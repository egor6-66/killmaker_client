#pragma once
#include "Kismet/GameplayStatics.h"
#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "MyGameInstance.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FPatchCompleteDelegate, bool, Succeeded);

DECLARE_EVENT_OneParam(ChunksDownloadComplete, Succeeded, bool)

UCLASS()
class KILLMAKERGAME_API UMyGameInstance : public UGameInstance
{
	GENERATED_BODY()

public:
	virtual void Init() override;
	virtual void Shutdown() override;

public:
	UFUNCTION(BlueprintCallable, Category = "Patching|Stats")
	void GetLoadingProgress();

	UFUNCTION(BlueprintCallable, Category = "Chunks")
	void GetChunks();

	UPROPERTY(BlueprintAssignable, Category="Patching")
	FPatchCompleteDelegate OnPatchComplete;

	Succeeded ChunksDownloadComplete;

	UPROPERTY(BlueprintReadWrite, Category="Patching")
	TArray<int32> ChunkDownloadList;

	UFUNCTION(BlueprintCallable, Category = "Patching")
	bool IsChunkLoaded(int32 ChunkId);

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="Patching")
	TArray<FString> LoadedLevels;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="Patching")
	TArray<FString> LoadedActors;

	UPROPERTY(BlueprintReadOnly, Category="Patching")
	bool IsLoadingAssets;

protected:
	bool bIsDownloadManifestUpToDate;
	void OnManifestUpdateComplete(bool bSuccess);
	void OnDownloadComplete(bool bSuccess);
	void OnLoadingModeComplete(bool bSuccess);
	void OnMountComplete(bool bSuccess);
};
