/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_ContainerPermissionVM } from './Webcom_API_Public_Attributes_VM_ContainerPermissionVM';
import type { Webcom_API_Public_Attributes_VM_SelectedAttributeValuesVM } from './Webcom_API_Public_Attributes_VM_SelectedAttributeValuesVM';
import type { Webcom_API_SetupSPA_Users_SelectedPermissionsCollectionVM } from './Webcom_API_SetupSPA_Users_SelectedPermissionsCollectionVM';

export type Webcom_API_Public_Attributes_VM_ContainerColumnVM = {
    Id?: number;
    Name?: string;
    HeaderLabel?: string;
    FooterLabel?: string;
    Width?: number;
    Height?: number;
    /**
     * Total:None = 0,Sum = 1,Average = 2,Formula = 3
     */
    Total?: Webcom_API_Public_Attributes_VM_ContainerColumnVM.Total;
    Formula?: string;
    DisplayRank?: number;
    CalculationRank?: number;
    /**
     * Data Type:None = 0,Sum = 1,Average = 2,Formula = 3
     */
    DataType?: Webcom_API_Public_Attributes_VM_ContainerColumnVM.DataType;
    DecimalPlaces?: number;
    /**
     * Column Type:StandAloneColumn = 0,ProductPartNumber = 1,ProductAttribute = 2
     */
    ColumnType?: Webcom_API_Public_Attributes_VM_ContainerColumnVM.ColumnType;
    /**
     * Display Type:Label = 0,TextBox = 1,CheckBox = 2,DropDown = 3,SelectList = 4,RadioButton = 5,Multiline = 7,SelectorRadioButton = 9,SelectorCheckBox = 10,AutocompleteCustomTable = 11,AutocompleteQuoteTable = 12,
     */
    DisplayType?: Webcom_API_Public_Attributes_VM_ContainerColumnVM.DisplayType;
    SelectedAttributeId?: number;
    SelectedAttributeValues?: Array<Webcom_API_Public_Attributes_VM_SelectedAttributeValuesVM>;
    IsSelectedAttributeAutocomplete?: boolean;
    IsSelectedAttributeQuoteTableAutocomplete?: boolean;
    CalculationFormula?: string;
    AlwaysIncludeInKOContext?: boolean;
    ContainsPersonallyIdentifiableInformation?: boolean;
    SensitiveData?: boolean;
    Permissions?: Array<Webcom_API_Public_Attributes_VM_ContainerPermissionVM>;
    SelectedPermissions?: Webcom_API_SetupSPA_Users_SelectedPermissionsCollectionVM;
    /**
     * Default UserType Permission:Hidden = 0,ReadOnly = 1,Editable = 2,Required = 3
     */
    DefaultUserTypePermission?: Webcom_API_Public_Attributes_VM_ContainerColumnVM.DefaultUserTypePermission;
}

export namespace Webcom_API_Public_Attributes_VM_ContainerColumnVM {

    /**
     * Total:None = 0,Sum = 1,Average = 2,Formula = 3
     */
    export enum Total {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }

    /**
     * Data Type:None = 0,Sum = 1,Average = 2,Formula = 3
     */
    export enum DataType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }

    /**
     * Column Type:StandAloneColumn = 0,ProductPartNumber = 1,ProductAttribute = 2
     */
    export enum ColumnType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }

    /**
     * Display Type:Label = 0,TextBox = 1,CheckBox = 2,DropDown = 3,SelectList = 4,RadioButton = 5,Multiline = 7,SelectorRadioButton = 9,SelectorCheckBox = 10,AutocompleteCustomTable = 11,AutocompleteQuoteTable = 12,
     */
    export enum DisplayType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_7' = 7,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
    }

    /**
     * Default UserType Permission:Hidden = 0,ReadOnly = 1,Editable = 2,Required = 3
     */
    export enum DefaultUserTypePermission {
        HIDDEN = 'Hidden',
        READ_ONLY = 'ReadOnly',
        EDITABLE = 'Editable',
        REQUIRED = 'Required',
    }


}
