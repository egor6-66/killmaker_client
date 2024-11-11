#pragma once

#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "PlayerStateInterface.generated.h"

UINTERFACE(MinimalAPI)
class UPlayerStateInterface : public UInterface
{
	GENERATED_BODY()
};


class KILLMAKERGAME_API IPlayerStateInterface
{
	GENERATED_BODY()

public:
	UFUNCTION(BlueprintNativeEvent,BlueprintCallable, Category = "Api")
	void OnClientEvent(const FString& EventName, UVaRestJsonObject* EventData);

	UFUNCTION(BlueprintCallable, BlueprintNativeEvent, Category = "Api")
	void CallClient(const FString& EventName,const  FString& EventData);
};
