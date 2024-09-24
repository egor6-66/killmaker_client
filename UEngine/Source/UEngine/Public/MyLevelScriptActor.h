#pragma once

#include "CoreMinimal.h"
#include "Engine/LevelScriptActor.h"
#include "MyLevelScriptActor.generated.h"

UCLASS()
class UENGINE_API AMyLevelScriptActor : public ALevelScriptActor
{
	GENERATED_BODY()

public:
	AMyLevelScriptActor();
	virtual void Tick(float DeltaTime) override;

protected:
	virtual void BeginPlay() override;

public:
	int8 CurrentMenu;
	bool Initial;

	UPROPERTY(BlueprintReadOnly)
	float TransitionSpeed;

	UFUNCTION(BlueprintImplementableEvent)
	void Transition(int32 Value);
};
