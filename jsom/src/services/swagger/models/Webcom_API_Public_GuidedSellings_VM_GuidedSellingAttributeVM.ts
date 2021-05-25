/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeScriptVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeScriptVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM';

/**
 * Guided Selling Attribute view model
 */
export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM = {
    /**
     * Guided Selling Attribute Id.
     */
    Id?: number;
    /**
     * Attribute definition Id.
     */
    DefinitionId?: number;
    /**
     * Attribute definition type
     */
    DefinitionType?: string;
    /**
     * Attribute definition type label
     */
    DefinitionTypeLabel?: string;
    /**
     * Guided Selling Attribute Name.
     */
    Name?: string;
    /**
     * Display Guided Selling Attribute asOptions:RadioButton = 1,CheckBox = 2,DropDown = 3,ListBox = 4,ListBoxMultipleSelect = 5,ImageButton = 6,Container = 57 (Only if attribute definition is Container),DisplayOnlyText = 71,FreeFormMatchLower = 91,FreeFormMatchUpper = 92,HiddenCalculatedMatchUpper = 93,HiddenCalculatedMatchLower = 94,FreeInputNoMatching = 95,HiddenCalculatedNoMatching = 96,FreeFormSetMatchLower = 97,FreeFormSetMatchUpper = 98,FreeFormExactMatch = 99,Button = 100,AutoCompleteCustomTable = 102 (Only if attribute definition is AutoComplete Sourced from Custom Table),AutoCompleteQuoteTable = 103 (Only if attribute definition is AutoComplete Sourced from Quote Table),ConfigControl = 951 (Custom Control),FreeFormExactMatchWOtherwiseOption = 999
     */
    DisplayAs?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM.DisplayAs;
    /**
     * Is Guided Selling Attribute spanned across entire row on UI.
     */
    IsSpannedAcrossRow?: boolean;
    /**
     * Custom Label.Note: If CustomLabel has value it will be displayed instead of Guided Selling Attribute Name.
     */
    CustomLabel?: string;
    /**
     * Hint.
     */
    Hint?: string;
    /**
     * Guided Selling Attribute Height.Note: It is applied only for free forms.
     */
    Height?: number;
    /**
     * Effective Start Date.
     */
    EffectiveStartDate?: string;
    /**
     * Effective End Date
     */
    EffectiveEndDate?: string;
    /**
     * Guided Selling Attribute OptionOptions:Include = 0,Exclude = 1
     */
    Option?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM.Option;
    /**
     * Whether the scripts should be executed. Applicable only for Button display type.
     */
    ExecuteScripts?: boolean;
    /**
     * Whether rules should be executed on change
     */
    ExecuteRulesOnChange?: boolean;
    /**
     * Whether configurator should be refreshed on change
     */
    RefreshConfiguratorOnChange?: boolean;
    /**
     * Number of image columns. Applicable only for Image Button display type.
     */
    ImageColumnsNumber?: number;
    /**
     * Guided Selling Attribute Values
     */
    Values?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM>;
    /**
     * Guided Selling Attribute Scripts. Applicable only if ExecuteScripts is set to true and display type is Button.
     */
    Scripts?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeScriptVM>;
}

export namespace Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM {

    /**
     * Display Guided Selling Attribute asOptions:RadioButton = 1,CheckBox = 2,DropDown = 3,ListBox = 4,ListBoxMultipleSelect = 5,ImageButton = 6,Container = 57 (Only if attribute definition is Container),DisplayOnlyText = 71,FreeFormMatchLower = 91,FreeFormMatchUpper = 92,HiddenCalculatedMatchUpper = 93,HiddenCalculatedMatchLower = 94,FreeInputNoMatching = 95,HiddenCalculatedNoMatching = 96,FreeFormSetMatchLower = 97,FreeFormSetMatchUpper = 98,FreeFormExactMatch = 99,Button = 100,AutoCompleteCustomTable = 102 (Only if attribute definition is AutoComplete Sourced from Custom Table),AutoCompleteQuoteTable = 103 (Only if attribute definition is AutoComplete Sourced from Quote Table),ConfigControl = 951 (Custom Control),FreeFormExactMatchWOtherwiseOption = 999
     */
    export enum DisplayAs {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_57' = 57,
        '_71' = 71,
        '_91' = 91,
        '_92' = 92,
        '_93' = 93,
        '_94' = 94,
        '_95' = 95,
        '_96' = 96,
        '_97' = 97,
        '_98' = 98,
        '_99' = 99,
        '_100' = 100,
        '_102' = 102,
        '_103' = 103,
        '_951' = 951,
        '_999' = 999,
    }

    /**
     * Guided Selling Attribute OptionOptions:Include = 0,Exclude = 1
     */
    export enum Option {
        '_0' = 0,
        '_1' = 1,
    }


}
