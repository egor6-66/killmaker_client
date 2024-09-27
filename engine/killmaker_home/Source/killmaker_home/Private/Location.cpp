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
	if (Location != -1)
	{
		SetLocation(Location);
		Location = -1;
	}
}

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SetSubLocation(int32 value) { Location = value; };
