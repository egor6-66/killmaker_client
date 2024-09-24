#include "MyLevelScriptActor.h"

using namespace std;


AMyLevelScriptActor::AMyLevelScriptActor()

{
	PrimaryActorTick.bCanEverTick = true;
	CurrentMenu = -1;
	Initial = true;
	TransitionSpeed = 0;
}


void AMyLevelScriptActor::BeginPlay()
{
	Super::BeginPlay();
}

void AMyLevelScriptActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
#ifdef __EMSCRIPTEN__
	int32 WebCurrentMenu = EM_ASM_INT({
		return __location__;
		});
	float TransitionSpeed = EM_ASM_INT({
		return __transitionSpeed__;
		});
#else
	int WebCurrentMenu = -1;
#endif
	if (WebCurrentMenu != this->CurrentMenu)
	{
		this->CurrentMenu = WebCurrentMenu;
		this->Transition(WebCurrentMenu);
	}

	this->TransitionSpeed = TransitionSpeed;
}
