/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM } from './Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM';

export type Webcom_API_Public_Attributes_VM_AutocompleteAttributeVM = {
    TableId?: number;
    PreselectionFilter?: string;
    ShowOnlyDistinctValues?: boolean;
    TableColumns?: Array<Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM>;
    SearchableColumns?: Array<Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM>;
    DisplayedColumns?: Array<Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM>;
    IsAutocompleteUsedAsProductAttribute?: boolean;
}
