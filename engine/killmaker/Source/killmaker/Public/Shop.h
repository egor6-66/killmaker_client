#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "Shop.generated.h"

UCLASS()
class KILLMAKER_API AShop : public AActor
{
	GENERATED_BODY()

public:
	AShop();

protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;

	UFUNCTION(BlueprintImplementableEvent)
	void SelectedMelee(int32 Value);

	UFUNCTION(BlueprintImplementableEvent)
	void SelectedPrimary(int32 Value);

	UFUNCTION(BlueprintImplementableEvent)
	void SelectedSecondary(int32 Value);
};

static int32 Melee;
static int32 Primary;
static int32 Secondary;