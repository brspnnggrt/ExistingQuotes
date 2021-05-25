/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_ProductVM } from './Webcom_API_SetupSPA_Products_VM_ProductVM';

/**
 * Product alias VM
 */
export type Webcom_API_SetupSPA_Products_VM_ProductAliasVM = {
    /**
     * Product alias id
     */
    Id?: number;
    /**
     * Alias product
     */
    Alias?: Webcom_API_SetupSPA_Products_VM_ProductVM;
    /**
     * Original product id
     */
    ProductId?: number;
    /**
     * Original product name
     */
    ProductName?: string;
}
