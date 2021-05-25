/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CompareProducts_VM_ProductVM } from './Webcom_API_RD_CompareProducts_VM_ProductVM';

/**
 * Class CompareProductsResponse
 */
export type Webcom_API_RD_CompareProducts_CompareProductsResponse = {
    /**
     * Gets or sets the products.
     */
    Products?: Array<Webcom_API_RD_CompareProducts_VM_ProductVM>;
    /**
     * Gets or sets the currency sign.
     */
    CurrencySign?: string;
    /**
     * Gets or sets a value indicating whether [show prices].
     */
    ShowPrices?: boolean;
    /**
     * Gets or sets the attributes with different values.
     */
    AttributesWithDifferentValues?: Array<string>;
    /**
     * Gets or sets the attributes to compare.
     */
    AttributesToCompare?: Array<string>;
}
