#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Location.generated.h"

UCLASS()
class KILLMAKER_HOME_API ALocation : public AActor
{
	GENERATED_BODY()

public:
	ALocation();

protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;
	UFUNCTION(BlueprintImplementableEvent)
	void SetLocation(int32 Value);
};

static int32 Location;
