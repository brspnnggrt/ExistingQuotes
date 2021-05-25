/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_ContainerVM } from './Webcom_API_Public_Attributes_VM_ContainerVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Products_VM_AttributeInstanceScriptVM } from './Webcom_API_SetupSPA_Products_VM_AttributeInstanceScriptVM';
import type { Webcom_API_SetupSPA_Products_VM_AttributeValueInstanceVM } from './Webcom_API_SetupSPA_Products_VM_AttributeValueInstanceVM';
import type { Webcom_API_SetupSPA_Products_VM_ContainerTransferSettingVM } from './Webcom_API_SetupSPA_Products_VM_ContainerTransferSettingVM';
import type { Webcom_API_SetupSPA_Products_VM_LineItemInfoVM } from './Webcom_API_SetupSPA_Products_VM_LineItemInfoVM';

export type Webcom_API_SetupSPA_Products_VM_AttributeInstanceVM = {
    Id?: number;
    ProductId?: number;
    AttributeName?: string;
    Description?: string;
    AttributeId?: number;
    SystemId?: string;
    LineItem?: boolean;
    Required?: boolean;
    DisplayAs?: Webcom_API_SetupSPA_Products_VM_AttributeInstanceVM.DisplayAs;
    AttributeImageColumns?: number;
    SpanAttribute?: boolean;
    AttributeConfigControlId?: number;
    Label?: string;
    Hint?: string;
    ShowPrice?: boolean;
    ShowRecurringPrice?: boolean;
    Width?: number;
    Height?: number;
    AttributeQuantity?: string;
    StartDate?: string;
    EndDate?: string;
    EscapeText?: string;
    ValidInputFrom?: string;
    ValidInputTo?: string;
    TransferToContainer?: boolean;
    ExecuteRulesOnChange?: boolean;
    RefreshConfiguratorOnChange?: boolean;
    ExecuteScripts?: boolean;
    PositionX?: string;
    PositionY?: string;
    SizeWidth?: string;
    SizeHeight?: string;
    Background?: string;
    ABSOption?: Webcom_API_SetupSPA_Products_VM_AttributeInstanceVM.ABSOption;
    InheritProductType?: Webcom_API_SetupSPA_Common_LookupVM;
    ScriptOnRowAdded?: string;
    ScriptOnRowCopied?: string;
    ScriptOnRowDeleted?: string;
    ScriptOnCellEdited?: string;
    UseAlternativePricingForProductsInContainer?: boolean;
    DataType?: string;
    IncludeHiddenAttrInKOContext?: boolean;
    LineItemInfo?: Webcom_API_SetupSPA_Products_VM_LineItemInfoVM;
    Values?: Array<Webcom_API_SetupSPA_Products_VM_AttributeValueInstanceVM>;
    ContainerSettings?: Webcom_API_Public_Attributes_VM_ContainerVM;
    AttributeInstanceScripts?: Array<Webcom_API_SetupSPA_Products_VM_AttributeInstanceScriptVM>;
    ContainerTransferSettings?: Array<Webcom_API_SetupSPA_Products_VM_ContainerTransferSettingVM>;
}

export namespace Webcom_API_SetupSPA_Products_VM_AttributeInstanceVM {

    export enum DisplayAs {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_50' = 50,
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
        '_101' = 101,
        '_102' = 102,
        '_103' = 103,
        '_951' = 951,
        '_999' = 999,
    }

    export enum ABSOption {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
