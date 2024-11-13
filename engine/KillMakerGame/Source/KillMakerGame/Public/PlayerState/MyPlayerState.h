#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerState.h"
#include "Engine/Engine.h"
#include "PlayerStateInterface.h"
#include "Kismet/GameplayStatics.h"
#include "VaRestJsonObject.h"
#include "VaRestSubsystem.h"
#include "MyPlayerState.generated.h"

UCLASS()
class KILLMAKERGAME_API AMyPlayerState : public APlayerState, public IPlayerStateInterface
{
	GENERATED_BODY()

public:
	AMyPlayerState();
	void CallClient_Implementation(const FString& EventName, const FString& EventData) override;
	
protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	FString CharacterVariant;
};

static bool NewClientEvent;
static FString NewClientEventName;
static FString NewClientEventData;
static FString TargetLevelName;