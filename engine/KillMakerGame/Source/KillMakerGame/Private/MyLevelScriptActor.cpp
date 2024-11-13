#include "MyLevelScriptActor.h"
#ifdef EMSCRIPTEN
#include <emscripten.h> 
#endif
#define EXTERN extern "C"

AMyLevelScriptActor::AMyLevelScriptActor()
{
	PrimaryActorTick.bCanEverTick = true;
}

void AMyLevelScriptActor::BeginPlay()
{
	UWorld* MyWorld = GetWorld();
	LevelName = MyWorld->GetMapName();
	GI = Cast<UMyGameInstance>(UGameplayStatics::GetGameInstance(GetWorld()));
	LevelIsLoaded = GI->LoadedLevels.Contains(LevelName);
	Super::BeginPlay();
	this->HandleLevelTransition();
}

void AMyLevelScriptActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	if(GI->IsLoadingAssets)
	{
		GI->GetLoadingProgress();
	}
}

void AMyLevelScriptActor::HandleLevelTransition()
{
	if (LevelName.Equals("LVL_Init"))return;
	if (LevelIsLoaded)
	{
#ifdef __EMSCRIPTEN__
		EM_ASM({
			window.engine.engineEvent({eventName: "OnLevelTransition", data: {isLoading: false, levelName: UTF8ToString($0)}});
		}, TCHAR_TO_ANSI(*LevelName));
#endif
	}
	else
	{
#ifdef __EMSCRIPTEN__
		EM_ASM({
			window.engine.engineEvent({eventName: "OnLevelTransition", data: {isLoading: true, levelName: UTF8ToString($0)}});
		}, TCHAR_TO_ANSI(*LevelName));
#endif
		GI->LoadedLevels.Add(LevelName);
		for (int32 Chunk : Chunks)
		{
			GI->ChunkDownloadList.AddUnique(Chunk);
		}
		GI->GetChunks();
		GI->ChunksDownloadComplete.AddUObject<AMyLevelScriptActor>(this, &AMyLevelScriptActor::ListenerChunksDownload);
	}
}

void AMyLevelScriptActor::ListenerChunksDownload(bool Status)
{
	if (Status)
	{
		UGameplayStatics::OpenLevel(this, FName(LevelName), true);
	}
}
