// Project:         Advanced Locomotion System V4 on C++
// Copyright:       Copyright (C) 2021 Doğa Can Yanıkoğlu
// License:         MIT License (http://www.opensource.org/licenses/mit-license.php)
// Source Code:     https://github.com/dyanikoglu/ALSV4_CPP
// Original Author: Doğa Can Yanıkoğlu
// Contributors:    


#include "Character/ALSCharacter.h"

#include "Engine/StaticMesh.h"
#include "AI/ALSAIController.h"
#include "Kismet/GameplayStatics.h"

AALSCharacter::AALSCharacter(const FObjectInitializer& ObjectInitializer)
	: Super(ObjectInitializer)
{
	HeldObjectRoot = CreateDefaultSubobject<USceneComponent>(TEXT("HeldObjectRoot"));
	HeldObjectRoot->SetupAttachment(GetMesh());

	ChildActor = CreateDefaultSubobject<UChildActorComponent>(TEXT("ChildActor"));
	ChildActor->SetupAttachment(HeldObjectRoot);
	
	SkeletalMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("SkeletalMesh"));
	SkeletalMesh->SetupAttachment(HeldObjectRoot);

	StaticMesh = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("StaticMesh"));
	StaticMesh->SetupAttachment(HeldObjectRoot);

	AIControllerClass = AALSAIController::StaticClass();
}

void AALSCharacter::ClearHeldObject()
{
	ChildActor->SetChildActorClass(nullptr);
	StaticMesh->SetStaticMesh(nullptr);
	SkeletalMesh->SetSkeletalMesh(nullptr);
	SkeletalMesh->SetAnimInstanceClass(nullptr);
}

void AALSCharacter::AttachToHand(TSubclassOf<AActor> NewChildActor, UStaticMesh* NewStaticMesh, USkeletalMesh* NewSkeletalMesh, UClass* NewAnimClass,
                                 bool bLeftHand, FVector Offset)
{
	ClearHeldObject();

	if (IsValid(NewChildActor))
	{
		ChildActor->SetChildActorClass(NewChildActor);
	}
	
	if (IsValid(NewStaticMesh))
	{
		StaticMesh->SetStaticMesh(NewStaticMesh);
	}
	else if (IsValid(NewSkeletalMesh))
	{
		SkeletalMesh->SetSkeletalMesh(NewSkeletalMesh);
		if (IsValid(NewAnimClass))
		{
			SkeletalMesh->SetAnimInstanceClass(NewAnimClass);
		}
	}

	FName AttachBone;
	if (bLeftHand)
	{
		AttachBone = TEXT("VB LHS_ik_hand_gun");
	}
	else
	{
		AttachBone = TEXT("VB RHS_ik_hand_gun");
	}

	HeldObjectRoot->AttachToComponent(GetMesh(),
	                                  FAttachmentTransformRules::SnapToTargetNotIncludingScale, AttachBone);
	HeldObjectRoot->SetRelativeLocation(Offset);
}

void AALSCharacter::RagdollStart()
{
	ClearHeldObject();
	Super::RagdollStart();
}

void AALSCharacter::RagdollEnd()
{
	Super::RagdollEnd();
	UpdateHeldObject();
}

ECollisionChannel AALSCharacter::GetThirdPersonTraceParams(FVector& TraceOrigin, float& TraceRadius)
{
	const FName CameraSocketName = bRightShoulder ? TEXT("TP_CameraTrace_R") : TEXT("TP_CameraTrace_L");
	TraceOrigin = GetMesh()->GetSocketLocation(CameraSocketName);
	TraceRadius = 15.0f;
	return ECC_Camera;
}

FTransform AALSCharacter::GetThirdPersonPivotTarget()
{
	return FTransform(GetActorRotation(),
	                  (GetMesh()->GetSocketLocation(TEXT("Head")) + GetMesh()->GetSocketLocation(TEXT("root"))) / 2.0f,
	                  FVector::OneVector);
}

FVector AALSCharacter::GetFirstPersonCameraTarget()
{
	return GetMesh()->GetSocketLocation(TEXT("FP_Camera"));
}

void AALSCharacter::OnOverlayStateChanged(EALSOverlayState PreviousState)
{
	Super::OnOverlayStateChanged(PreviousState);
	UpdateHeldObject();
}

void AALSCharacter::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

	UpdateHeldObjectAnimations();
}

void AALSCharacter::BeginPlay()
{
	Super::BeginPlay();

	UpdateHeldObject();
}