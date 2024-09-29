#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif

#include "MyLevelScriptActor.h"
#define EXTERN extern "C"


AMyLevelScriptActor::AMyLevelScriptActor()
{
	PrimaryActorTick.bCanEverTick = true;
}

void AMyLevelScriptActor::BeginPlay()
{
	Super::BeginPlay();
#ifdef __EMSCRIPTEN__ 
	emscripten_run_script("wasmLoaded()");
#endif
}

void AMyLevelScriptActor::Tick(float DeltaTime)
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
void SetMainLocation(float value) { Location = value; };
