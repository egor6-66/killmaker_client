#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif
#include "Engine.h"
#include "LevelScript.h"
#define EXTERN extern "C"
#include "Shop.h"

// Sets default values
AShop::AShop()
{
	PrimaryActorTick.bCanEverTick = true;
}

void AShop::BeginPlay()
{
	Super::BeginPlay();
	Melee = -1;
	Primary = -1;
	Secondary = -1;
}

// Called every frame
void AShop::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
	if (Melee != -1)
	{
		SelectedMelee(Melee);
		Melee = -1;
	}
	if (Primary != -1)
	{
		SelectedPrimary(Primary);
		Primary = -1;
	}
	if (Secondary != -1)
	{
		SelectedSecondary(Secondary);
		Secondary = -1;
	}
}

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SelectedMelee(int32 value) { Melee = value; };
#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SelectedPrimary(int32 value) { Primary = value; };
#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
#endif
void SelectedSecondary(int32 value) { Secondary = value; };