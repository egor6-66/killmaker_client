#include "MenuBase.h"

AMenuBase::AMenuBase()
{
	PrimaryActorTick.bCanEverTick = true;
}


void AMenuBase::BeginPlay()
{
	Super::BeginPlay();
}

void AMenuBase::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
}

void AMenuBase::SetMenu(int32 Value)
{
	
}
