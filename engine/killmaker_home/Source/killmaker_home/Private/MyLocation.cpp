#include "MyLocation.h"
#define EXTERN extern "C"

AMyLocation::AMyLocation()
{
	PrimaryActorTick.bCanEverTick = true;
}

void AMyLocation::BeginPlay()
{
	Super::BeginPlay();
	ActiveCamera = 0;
}

void AMyLocation::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	if (ActiveCamera != -1)
	{
		SetCamera(ActiveCamera);
		ActiveCamera = -1;
	}
}

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SetCamera(int32 Value) { ActiveCamera = Value; };
