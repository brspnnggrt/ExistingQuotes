/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_QuoteFields_VM_CustomFieldVM } from './Webcom_API_SetupSPA_QuoteFields_VM_CustomFieldVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_EditingPermissionsVM } from './Webcom_API_SetupSPA_QuoteFields_VM_EditingPermissionsVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM } from './Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM';

export type Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM = {
    CustomField?: Webcom_API_SetupSPA_QuoteFields_VM_CustomFieldVM;
    Calculations?: Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM>;
    VisibiliyPermissions?: Array<number>;
    EditingPermissions?: Array<Webcom_API_SetupSPA_QuoteFields_VM_EditingPermissionsVM>;
    Id?: number;
    RowType?: Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM.RowType;
    ColumnType?: string;
    Label?: string;
    IsActive?: boolean;
    IsEditable?: boolean;
    Rank?: number;
    AggregationType?: Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM.AggregationType;
    TotalCalculationType?: Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM.TotalCalculationType;
}

export namespace Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM {

    export enum RowType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_13' = 13,
        '_14' = 14,
        '_15' = 15,
        '_16' = 16,
        '_17' = 17,
        '_18' = 18,
        '_19' = 19,
        '_20' = 20,
        '_21' = 21,
        '_22' = 22,
        '_23' = 23,
        '_24' = 24,
        '_25' = 25,
        '_26' = 26,
        '_27' = 27,
    }

    export enum AggregationType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }

    export enum TotalCalculationType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }


}
