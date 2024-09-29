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
};

static float Location;
