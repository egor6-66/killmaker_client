#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif
#include "Engine.h"
#include "LevelScript.h"
#define EXTERN extern "C"


ALevelScript::ALevelScript()
{
	PrimaryActorTick.bCanEverTick = true;
}

void ALevelScript::BeginPlay()
{
	Super::BeginPlay();
	AuthSuccess = -1;
	TargetLevel = -1;
#ifdef __EMSCRIPTEN__
	emscripten_run_script("wasmLoaded()");
#endif
}

void ALevelScript::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	if (Location != -1)
	{
		SetLocation(Location);
		Location = -1;
	}
	if (TargetLevel != -1)
	{
		GoToLevel(TargetLevel);
		TargetLevel = -1;
	}
	if (AuthSuccess != -1)
	{
		SetAuth(AuthSuccess);
		GEngine->AddOnScreenDebugMessage(-1, 15.0f, FColor::Yellow, TEXT("Some debug message!"));
		AuthSuccess = -1;
	}
}

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SetLocation(float value) { Location = value; };

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SetAuth(int32 value) { AuthSuccess = value; };

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void GoToLevel(int32 value) { TargetLevel = value; };