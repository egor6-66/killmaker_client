#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MyLocation.generated.h"

UCLASS()
class KILLMAKER_HOME_API AMyLocation : public AActor
{
	GENERATED_BODY()

public:
	AMyLocation();

protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;
	UFUNCTION(BlueprintImplementableEvent)
	void SetCamera(int32 Value);
};

static float ActiveCamera;