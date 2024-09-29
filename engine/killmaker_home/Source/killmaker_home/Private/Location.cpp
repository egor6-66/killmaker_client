#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif
#define EXTERN extern "C"

#include "Location.h"

ALocation::ALocation()
{
	PrimaryActorTick.bCanEverTick = true;
}

void ALocation::BeginPlay()
{
	Super::BeginPlay();
}

void ALocation::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

}