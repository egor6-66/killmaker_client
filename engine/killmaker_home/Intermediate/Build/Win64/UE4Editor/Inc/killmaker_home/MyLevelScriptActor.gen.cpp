// Copyright Epic Games, Inc. All Rights Reserved.
/*===========================================================================
	Generated code exported from UnrealHeaderTool.
	DO NOT modify this manually! Edit the corresponding .h files instead!
===========================================================================*/

#include "UObject/GeneratedCppIncludes.h"
#include "killmaker_home/Public/MyLevelScriptActor.h"
#ifdef _MSC_VER
#pragma warning (push)
#pragma warning (disable : 4883)
#endif
PRAGMA_DISABLE_DEPRECATION_WARNINGS
void EmptyLinkFunctionForGeneratedCodeMyLevelScriptActor() {}
// Cross Module References
	KILLMAKER_HOME_API UClass* Z_Construct_UClass_AMyLevelScriptActor_NoRegister();
	KILLMAKER_HOME_API UClass* Z_Construct_UClass_AMyLevelScriptActor();
	ENGINE_API UClass* Z_Construct_UClass_ALevelScriptActor();
	UPackage* Z_Construct_UPackage__Script_killmaker_home();
// End Cross Module References
	static FName NAME_AMyLevelScriptActor_SetLocation = FName(TEXT("SetLocation"));
	void AMyLevelScriptActor::SetLocation(int32 Value)
	{
		MyLevelScriptActor_eventSetLocation_Parms Parms;
		Parms.Value=Value;
		ProcessEvent(FindFunctionChecked(NAME_AMyLevelScriptActor_SetLocation),&Parms);
	}
	void AMyLevelScriptActor::StaticRegisterNativesAMyLevelScriptActor()
	{
	}
	struct Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics
	{
		static const UE4CodeGen_Private::FIntPropertyParams NewProp_Value;
		static const UE4CodeGen_Private::FPropertyParamsBase* const PropPointers[];
#if WITH_METADATA
		static const UE4CodeGen_Private::FMetaDataPairParam Function_MetaDataParams[];
#endif
		static const UE4CodeGen_Private::FFunctionParams FuncParams;
	};
	const UE4CodeGen_Private::FIntPropertyParams Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::NewProp_Value = { "Value", nullptr, (EPropertyFlags)0x0010000000000080, UE4CodeGen_Private::EPropertyGenFlags::Int, RF_Public|RF_Transient|RF_MarkAsNative, 1, STRUCT_OFFSET(MyLevelScriptActor_eventSetLocation_Parms, Value), METADATA_PARAMS(nullptr, 0) };
	const UE4CodeGen_Private::FPropertyParamsBase* const Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::PropPointers[] = {
		(const UE4CodeGen_Private::FPropertyParamsBase*)&Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::NewProp_Value,
	};
#if WITH_METADATA
	const UE4CodeGen_Private::FMetaDataPairParam Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::Function_MetaDataParams[] = {
		{ "ModuleRelativePath", "Public/MyLevelScriptActor.h" },
	};
#endif
	const UE4CodeGen_Private::FFunctionParams Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::FuncParams = { (UObject*(*)())Z_Construct_UClass_AMyLevelScriptActor, nullptr, "SetLocation", nullptr, nullptr, sizeof(MyLevelScriptActor_eventSetLocation_Parms), Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::PropPointers, UE_ARRAY_COUNT(Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::PropPointers), RF_Public|RF_Transient|RF_MarkAsNative, (EFunctionFlags)0x08020800, 0, 0, METADATA_PARAMS(Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::Function_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::Function_MetaDataParams)) };
	UFunction* Z_Construct_UFunction_AMyLevelScriptActor_SetLocation()
	{
		static UFunction* ReturnFunction = nullptr;
		if (!ReturnFunction)
		{
			UE4CodeGen_Private::ConstructUFunction(ReturnFunction, Z_Construct_UFunction_AMyLevelScriptActor_SetLocation_Statics::FuncParams);
		}
		return ReturnFunction;
	}
	UClass* Z_Construct_UClass_AMyLevelScriptActor_NoRegister()
	{
		return AMyLevelScriptActor::StaticClass();
	}
	struct Z_Construct_UClass_AMyLevelScriptActor_Statics
	{
		static UObject* (*const DependentSingletons[])();
		static const FClassFunctionLinkInfo FuncInfo[];
#if WITH_METADATA
		static const UE4CodeGen_Private::FMetaDataPairParam Class_MetaDataParams[];
#endif
		static const FCppClassTypeInfoStatic StaticCppClassTypeInfo;
		static const UE4CodeGen_Private::FClassParams ClassParams;
	};
	UObject* (*const Z_Construct_UClass_AMyLevelScriptActor_Statics::DependentSingletons[])() = {
		(UObject* (*)())Z_Construct_UClass_ALevelScriptActor,
		(UObject* (*)())Z_Construct_UPackage__Script_killmaker_home,
	};
	const FClassFunctionLinkInfo Z_Construct_UClass_AMyLevelScriptActor_Statics::FuncInfo[] = {
		{ &Z_Construct_UFunction_AMyLevelScriptActor_SetLocation, "SetLocation" }, // 3375373675
	};
#if WITH_METADATA
	const UE4CodeGen_Private::FMetaDataPairParam Z_Construct_UClass_AMyLevelScriptActor_Statics::Class_MetaDataParams[] = {
		{ "HideCategories", "Collision Rendering Utilities|Transformation" },
		{ "IncludePath", "MyLevelScriptActor.h" },
		{ "ModuleRelativePath", "Public/MyLevelScriptActor.h" },
	};
#endif
	const FCppClassTypeInfoStatic Z_Construct_UClass_AMyLevelScriptActor_Statics::StaticCppClassTypeInfo = {
		TCppClassTypeTraits<AMyLevelScriptActor>::IsAbstract,
	};
	const UE4CodeGen_Private::FClassParams Z_Construct_UClass_AMyLevelScriptActor_Statics::ClassParams = {
		&AMyLevelScriptActor::StaticClass,
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
		0x009002A4u,
		METADATA_PARAMS(Z_Construct_UClass_AMyLevelScriptActor_Statics::Class_MetaDataParams, UE_ARRAY_COUNT(Z_Construct_UClass_AMyLevelScriptActor_Statics::Class_MetaDataParams))
	};
	UClass* Z_Construct_UClass_AMyLevelScriptActor()
	{
		static UClass* OuterClass = nullptr;
		if (!OuterClass)
		{
			UE4CodeGen_Private::ConstructUClass(OuterClass, Z_Construct_UClass_AMyLevelScriptActor_Statics::ClassParams);
		}
		return OuterClass;
	}
	IMPLEMENT_CLASS(AMyLevelScriptActor, 3438073759);
	template<> KILLMAKER_HOME_API UClass* StaticClass<AMyLevelScriptActor>()
	{
		return AMyLevelScriptActor::StaticClass();
	}
	static FCompiledInDefer Z_CompiledInDefer_UClass_AMyLevelScriptActor(Z_Construct_UClass_AMyLevelScriptActor, &AMyLevelScriptActor::StaticClass, TEXT("/Script/killmaker_home"), TEXT("AMyLevelScriptActor"), false, nullptr, nullptr, nullptr);
	DEFINE_VTABLE_PTR_HELPER_CTOR(AMyLevelScriptActor);
PRAGMA_ENABLE_DEPRECATION_WARNINGS
#ifdef _MSC_VER
#pragma warning (pop)
#endif
