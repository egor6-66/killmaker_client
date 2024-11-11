#include "PlayerState/MyPlayerState.h"
#ifdef EMSCRIPTEN
#include <emscripten.h> 
#endif
#define EXTERN extern "C"

AMyPlayerState::AMyPlayerState()
{
	PrimaryActorTick.bCanEverTick = true;
}

void AMyPlayerState::BeginPlay()
{
	Super::BeginPlay();
}

void AMyPlayerState::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	if (NewClientEvent)
	{
		UVaRestSubsystem* Subsystem{};
		TArray<AActor*> Actors;
		UVaRestJsonObject* Json = Subsystem->StaticConstructVaRestJsonObject();
		Json->DecodeJson(NewClientEventData);
		UGameplayStatics::GetAllActorsWithInterface(GetWorld(), UPlayerStateInterface::StaticClass(), Actors);
		if(NewClientEventName.Equals("SetLevel"))
		{
			UGameplayStatics::OpenLevel(this, FName(FString("LVL_").Append(Json->GetStringField("LevelName"))), true);
		}else
		{
			for (AActor* Actor : Actors)
			{
				IPlayerStateInterface::Execute_OnClientEvent(Actor, NewClientEventName, Json);
			}	
		}
		NewClientEvent = false;
	}
}

void AMyPlayerState::CallClient_Implementation(const FString& EventName, const FString& EventData)
{
#ifdef __EMSCRIPTEN__
	EM_ASM({
		window.engine.engineEvent({eventName: UTF8ToString($0), data: JSON.parse(UTF8ToString($1))})
	}, TCHAR_TO_ANSI(*EventName), TCHAR_TO_ANSI(*EventData));
#endif
}

#ifdef __EMSCRIPTEN__
EXTERN	EMSCRIPTEN_KEEPALIVE
void ClientEvent(char *eventName, char *eventData)
{
	size_t nameSize = strlen(eventName);
	NewClientEventName = FString(nameSize, eventName);
	
	size_t dataSize = strlen(eventData);
	NewClientEventData = FString(dataSize, eventData);
	
	NewClientEvent = true;
}
#endif
