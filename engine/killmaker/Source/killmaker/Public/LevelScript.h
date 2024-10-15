#pragma once

#include "CoreMinimal.h"
#include "Engine/LevelScriptActor.h"
#include "LevelScript.generated.h"

UCLASS()
class KILLMAKER_API ALevelScript : public ALevelScriptActor
{
	GENERATED_BODY()
public:
	ALevelScript();

protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;

	UFUNCTION(BlueprintImplementableEvent)
	void SetLocation(float Value);
	UFUNCTION(BlueprintImplementableEvent)
	void SetAuth(int32 Value);
	UFUNCTION(BlueprintImplementableEvent)
	void GoToLevel(int32 Value);
};

static float Location;
static int32 AuthSuccess;
static int32 TargetLevel;
