#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MenuBase.generated.h"

UCLASS()
class UENGINE_API AMenuBase : public AActor
{
	GENERATED_BODY()

public:
	AMenuBase();
	virtual void Tick(float DeltaTime) override;
	
protected:
	virtual void BeginPlay() override;

public:

	
	UFUNCTION(BlueprintCallable)
	void SetMenu(int32 Value);
};
