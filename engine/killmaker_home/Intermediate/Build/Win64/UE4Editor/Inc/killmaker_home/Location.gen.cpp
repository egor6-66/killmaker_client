// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/GeneratedCppIncludes.h"
#include "killmaker_home/Public/Location.h"
#ifdef _MSC_VER
#pragma warning (push)
#pragma warning (disable : 4883)
#endif
PRAGMA_DISABLE_DEPRECATION_WARNINGS
void EmptyLinkFunctionForGeneratedCodeLocation() {}
// Cross Module References
	KILLMAKER_HOME_API UClass* Z_Construct_UClass_ALocation_NoRegister();
	KILLMAKER_HOME_API UClass* Z_Construct_UClass_ALocation();
	ENGINE_API UClass* Z_Construct_UClass_AActor();
	UPackage* Z_Construct_UPackage__Script_killmaker_home();
// End Cross Module References
	void ALocation::StaticRegisterNativesALocation()
	{
	}
	UClass* Z_Construct_UClass_ALocation_NoRegister()
	{
		return ALocation::StaticClass();
	}
	struct Z_Construct_UClass_ALocation_Statics
	{
		static UObject* (*const DependentSingletons[])();
#if WITH_METADATA
		static const UE4CodeGen_Private::FMetaDataPairParam Class_MetaDataParams[];
#endif
		static const FCppClassTypeInfoStatic StaticCppClassTypeInfo;
		static const UE4CodeGen_Private::FClassParams ClassParams;
	};
	UObject* (*const Z_Construct_UClass_ALocation_Statics::DependentSingletons[])() = {
		(UObject* (*)())Z_Construct_UClass_AActor,
		(UObject* (*)())Z_Construct_UPackage__Script_killmaker_home,
	};
#if WITH_METADATA
	const UE4CodeGen_Private::FMetaDataPairParam Z_Construct_UClass_ALocation_Statics::Class_MetaDataParams[] = {
		{ "IncludePath", "Location.h" },
		{ "ModuleRelativePath", "Public/Location.h" },
	};
#endif
	const FCppClassTypeInfoStatic Z_Construct_UClass_ALocation_Statics::StaticCppClassTypeInfo = {
		TCppClassTypeTraits<ALocation>::IsAbstract,
	};
	const UE4CodeGen_Private::FClassParams Z_Construct_UClass_ALocation_Statics::ClassParams = {
		&ALocation::StaticClass,
		"Engine",
		&StaticCppClassTypeInfo,
		DependentSingletons,
		nullptr,
		nullptr,
		nullptr,
		UE_ARRAY_COUNT(DependentSingletons),
		0,
		0,
		0,
		0x009000A4u,
		METADATA_PARAMS(Z_Construct_UClass_ALocation_Statics::Class_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UClass_ALocation_Statics::Class_MetaDataParams))
	};
	UClass* Z_Construct_UClass_ALocation()
	{
		static UClass* OuterClass = nullptr;
		if (!OuterClass)
		{
			UE4CodeGen_Private::ConstructUClass(OuterClass, Z_Construct_UClass_ALocation_Statics::ClassParams);
		}
		return OuterClass;
	}
	IMPLEMENT_CLASS(ALocation, 1719238769);
	template<> KILLMAKER_HOME_API UClass* StaticClass<ALocation>()
	{
		return ALocation::StaticClass();
	}
	static FCompiledInDefer Z_CompiledInDefer_UClass_ALocation(Z_Construct_UClass_ALocation, &ALocation::StaticClass, TEXT("/Script/killmaker_home"), TEXT("ALocation"), false, nullptr, nullptr, nullptr);
	DEFINE_VTABLE_PTR_HELPER_CTOR(ALocation);
PRAGMA_ENABLE_DEPRECATION_WARNINGS
#ifdef _MSC_VER
#pragma warning (pop)
#endif
