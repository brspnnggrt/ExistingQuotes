/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_ProductDetails_VM_ProductVM } from './Webcom_API_RD_ProductDetails_VM_ProductVM';

export type Webcom_API_RD_ProductDetails_ProductDetailsResponse = {
    /**
     * Gets or sets the product.
     */
    Product?: Webcom_API_RD_ProductDetails_VM_ProductVM;
    /**
     * Gets or sets the currency sign.
     */
    CurrencySign?: string;
    /**
     * Gets or sets a value indicating whether [show prices].
     */
    ShowPrices?: boolean;
    /**
     * Gets the value of application parameter to see whether comparing is enabled
     */
    readonly IsComparingEnabled?: boolean;
}
