#pragma once
#include "Engine.h"
#include "VaRestJsonObject.h"
#include "MyGameInstance.h"
#include "PlayerState/PlayerStateInterface.h"
#include "CoreMinimal.h"
#include "Engine/LevelScriptActor.h"
#include "MyLevelScriptActor.generated.h"


UCLASS()
class KILLMAKERGAME_API AMyLevelScriptActor : public ALevelScriptActor, public IPlayerStateInterface
{
	GENERATED_BODY()

protected:
	virtual void BeginPlay() override;

public:
	AMyLevelScriptActor();
	virtual void Tick(float DeltaTime) override;
	
	UPROPERTY(BlueprintReadOnly)
	bool LevelIsLoaded;
	
	UPROPERTY(BlueprintReadOnly)
	FString LevelName;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	TArray<int32> Chunks;

	void HandleLevelTransition();
	
	void ListenerChunksDownload(bool Status);
	
	UMyGameInstance* GI;
};
