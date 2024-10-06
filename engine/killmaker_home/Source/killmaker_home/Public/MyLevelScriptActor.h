#pragma once

#include "CoreMinimal.h"
#include "Engine/LevelScriptActor.h"
#include "MyLevelScriptActor.generated.h"

UCLASS()
class KILLMAKER_HOME_API AMyLevelScriptActor : public ALevelScriptActor
{
	GENERATED_BODY()
public:
	AMyLevelScriptActor();

protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;

	UFUNCTION(BlueprintImplementableEvent)
	void SetLocation(float Value);
};

static float Location;
