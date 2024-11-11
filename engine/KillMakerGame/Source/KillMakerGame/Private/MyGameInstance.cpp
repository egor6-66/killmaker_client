#include "MyGameInstance.h"
#include "Engine/Engine.h"
#include "ChunkDownloader.h"
#include "Misc/CoreDelegates.h"
#include "Runtime/Json/Public/Serialization/JsonSerializerMacros.h"

#ifdef EMSCRIPTEN
#include <emscripten.h> 
#endif
#define EXTERN extern "C"

void UMyGameInstance::Init()
{
	Super::Init();
	const FString DeploymentName = "PatchingDemoLive";
	const FString ContentBuildId = "data";

	TSharedRef<FChunkDownloader> Downloader = FChunkDownloader::GetOrCreate();
	Downloader->Initialize("HTML5", 8);
	Downloader->LoadCachedBuild(DeploymentName);
	TFunction<void(bool bSuccess)> UpdateCompleteCallback = [&](bool bSuccess)
	{
		bIsDownloadManifestUpToDate = true;
#ifdef __EMSCRIPTEN__
		EM_ASM({window.engine.engineEvent({eventName: "EngineLoaded", data: {}})});
#endif
	};
	Downloader->UpdateBuild(DeploymentName, ContentBuildId, UpdateCompleteCallback);
}

void UMyGameInstance::Shutdown()
{
	Super::Shutdown();
	FChunkDownloader::Shutdown();
}

void UMyGameInstance::OnManifestUpdateComplete(bool bSuccess)
{
	bIsDownloadManifestUpToDate = bSuccess;
}

void UMyGameInstance::GetLoadingProgress()
{
	
	TSharedRef<FChunkDownloader> Downloader = FChunkDownloader::GetChecked();
	FChunkDownloader::FStats LoadingStats = Downloader->GetLoadingStats();
	int BytesDownloaded = LoadingStats.BytesDownloaded;
	int TotalBytesToDownload = LoadingStats.TotalBytesToDownload;
	int ChunksMounted = LoadingStats.ChunksMounted;
	int TotalChunksToMount = LoadingStats.TotalChunksToMount;
	int DownloadPercent = ((float)BytesDownloaded / (float)TotalBytesToDownload) * 100.0f;
	float MountPercent = ((float)ChunksMounted / (float)TotalChunksToMount) * 100.0f;
	FString DownloadPercentString = FString::SanitizeFloat(DownloadPercent);
#ifdef __EMSCRIPTEN__
	EM_ASM({
		window.engine.engineEvent({eventName: "AssetsLoadingProgress", data: {value: UTF8ToString($0)}});
	}, TCHAR_TO_ANSI(*DownloadPercentString));
#endif
}

void UMyGameInstance::GetChunks()
{
	if (bIsDownloadManifestUpToDate)
	{
		IsLoadingAssets = true;
		TSharedRef<FChunkDownloader> Downloader = FChunkDownloader::GetChecked();
		for (int32 ChunkID : ChunkDownloadList)
		{
			int32 ChunkStatus = static_cast<int32>(Downloader->GetChunkStatus(ChunkID));
			UE_LOG(LogTemp, Display, TEXT("Chunk %i status: %i"), ChunkID, ChunkStatus);
		}
		TFunction<void (bool bSuccess)> DownloadCompleteCallback = [&](bool bSuccess) { OnDownloadComplete(bSuccess); };
		Downloader->DownloadChunks(ChunkDownloadList, DownloadCompleteCallback, 1);
		TFunction<void (bool bSuccess)> LoadingModeCompleteCallback = [&](bool bSuccess)
		{
			OnLoadingModeComplete(bSuccess);
		};
		Downloader->BeginLoadingMode(LoadingModeCompleteCallback);
	}
	UE_LOG(LogTemp, Display, TEXT("Manifest Update Failed. Can't patch the game"));
}

void UMyGameInstance::OnLoadingModeComplete(bool bSuccess)
{
	OnDownloadComplete(bSuccess);
	ChunksDownloadComplete.Broadcast(true);
	IsLoadingAssets = false;
}

void UMyGameInstance::OnMountComplete(bool bSuccess)
{
	OnPatchComplete.Broadcast(bSuccess);
}

void UMyGameInstance::OnDownloadComplete(bool bSuccess)
{
	if (bSuccess)
	{
		UE_LOG(LogTemp, Display, TEXT("Download complete"));
		TSharedRef<FChunkDownloader> Downloader = FChunkDownloader::GetChecked();
		FJsonSerializableArrayInt DownloadedChunks;
		for (int32 ChunkID : ChunkDownloadList)
		{
			DownloadedChunks.Add(ChunkID);
		}

		TFunction<void(bool bSuccess)> MountCompleteCallback = [&](bool bSuccess) { OnMountComplete(bSuccess); };
		Downloader->MountChunks(DownloadedChunks, MountCompleteCallback);
		OnPatchComplete.Broadcast(true);
	}
	else
	{
		UE_LOG(LogTemp, Display, TEXT("Load process failed"));
		OnPatchComplete.Broadcast(false);
		ChunksDownloadComplete.Broadcast(false);
	}
}

bool UMyGameInstance::IsChunkLoaded(int32 ChunkId)
{
	if (!bIsDownloadManifestUpToDate)
		return false;
	TSharedRef<FChunkDownloader> Downloader = FChunkDownloader::GetChecked();
	return Downloader->GetChunkStatus(ChunkId) == FChunkDownloader::EChunkStatus::Mounted;
}
