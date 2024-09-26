#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif

#include "MyLevelScriptActor.h"
#define EXTERN extern "C"

AMyLevelScriptActor::AMyLevelScriptActor()
{
	PrimaryActorTick.bCanEverTick = true;
}

void AMyLevelScriptActor::BeginPlay() { Super::BeginPlay(); }


void AMyLevelScriptActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	if (Location)
	{
		SetLocation(Location);
		Location = 0;
	}
}

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SetLocation(int32 value) { Location = value; };