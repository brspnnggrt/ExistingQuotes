/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_VM_SelectedAttributeValuesVM } from './Webcom_API_Public_Quote_VM_SelectedAttributeValuesVM';

/**
 * SelectedAttributesVM
 */
export type Webcom_API_Public_Quote_VM_SelectedAttributesVM = {
    /**
     * Attribute ID
     */
    Id?: number;
    /**
     * Attribute System ID
     */
    SystemId?: string;
    /**
     * Data type for attribute values
     */
    ValueDataType?: string;
    /**
     * Attribute values
     */
    Values?: Array<Webcom_API_Public_Quote_VM_SelectedAttributeValuesVM>;
    /**
     * Get or set Synced From Back Office
     */
    SyncedFromBackOffice?: boolean;
}
