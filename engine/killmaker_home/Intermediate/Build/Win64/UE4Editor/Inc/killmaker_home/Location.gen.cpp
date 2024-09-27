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
	static FName NAME_ALocation_SetLocation = FName(TEXT("SetLocation"));
	void ALocation::SetLocation(int32 Value)
	{
		Location_eventSetLocation_Parms Parms;
		Parms.Value=Value;
		ProcessEvent(FindFunctionChecked(NAME_ALocation_SetLocation),&Parms);
	}
	void ALocation::StaticRegisterNativesALocation()
	{
	}
	struct Z_Construct_UFunction_ALocation_SetLocation_Statics
	{
		static const UE4CodeGen_Private::FIntPropertyParams NewProp_Value;
		static const UE4CodeGen_Private::FPropertyParamsBase* const PropPointers[];
#if WITH_METADATA
		static const UE4CodeGen_Private::FMetaDataPairParam Function_MetaDataParams[];
#endif
		static const UE4CodeGen_Private::FFunctionParams FuncParams;
	};
	const UE4CodeGen_Private::FIntPropertyParams Z_Construct_UFunction_ALocation_SetLocation_Statics::NewProp_Value = { "Value", nullptr, (EPropertyFlags)0x0010000000000080, UE4CodeGen_Private::EPropertyGenFlags::Int, RF_Public|RF_Transient|RF_MarkAsNative, 1, STRUCT_OFFSET(Location_eventSetLocation_Parms, Value), METADATA_PARAMS(nullptr, 0) };
	const UE4CodeGen_Private::FPropertyParamsBase* const Z_Construct_UFunction_ALocation_SetLocation_Statics::PropPointers[] = {
		(const UE4CodeGen_Private::FPropertyParamsBase*)&Z_Construct_UFunction_ALocation_SetLocation_Statics::NewProp_Value,
	};
#if WITH_METADATA
	const UE4CodeGen_Private::FMetaDataPairParam Z_Construct_UFunction_ALocation_SetLocation_Statics::Function_MetaDataParams[] = {
		{ "ModuleRelativePath", "Public/Location.h" },
	};
#endif
	const UE4CodeGen_Private::FFunctionParams Z_Construct_UFunction_ALocation_SetLocation_Statics::FuncParams = { (UObject*(*)())Z_Construct_UClass_ALocation, nullptr, "SetLocation", nullptr, nullptr, sizeof(Location_eventSetLocation_Parms), Z_Construct_UFunction_ALocation_SetLocation_Statics::PropPointers, UE_ARRAY_COUNT(Z_Construct_UFunction_ALocation_SetLocation_Statics::PropPointers), RF_Public|RF_Transient|RF_MarkAsNative, (EFunctionFlags)0x08020800, 0, 0, METADATA_PARAMS(Z_Construct_UFunction_ALocation_SetLocation_Statics::Function_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UFunction_ALocation_SetLocation_Statics::Function_MetaDataParams)) };
	UFunction* Z_Construct_UFunction_ALocation_SetLocation()
	{
		static UFunction* ReturnFunction = nullptr;
		if (!ReturnFunction)
		{
			UE4CodeGen_Private::ConstructUFunction(ReturnFunction, Z_Construct_UFunction_ALocation_SetLocation_Statics::FuncParams);
		}
		return ReturnFunction;
	}
	UClass* Z_Construct_UClass_ALocation_NoRegister()
	{
		return ALocation::StaticClass();
	}
	struct Z_Construct_UClass_ALocation_Statics
	{
		static UObject* (*const DependentSingletons[])();
		static const FClassFunctionLinkInfo FuncInfo[];
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
	const FClassFunctionLinkInfo Z_Construct_UClass_ALocation_Statics::FuncInfo[] = {
		{ &Z_Construct_UFunction_ALocation_SetLocation, "SetLocation" }, // 2472038074
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
		FuncInfo,
		nullptr,
		nullptr,
		UE_ARRAY_COUNT(DependentSingletons),
		UE_ARRAY_COUNT(FuncInfo),
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
	IMPLEMENT_CLASS(ALocation, 2736880989);
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
