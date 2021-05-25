/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartLineItemVM } from './Webcom_API_RD_Cart_CartLineItemVM';

/**
 * Class CartItemsResponse.
 */
export type Webcom_API_RD_Cart_CartItemsResponse = {
    /**
     * Gets or sets the items.
     */
    Items?: Array<Webcom_API_RD_Cart_CartLineItemVM>;
    /**
     * Gets or sets the total items count.
     */
    TotalItems?: number;
    /**
     * Gets or sets the current items page index.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the filtered total amount.
     */
    FilteredTotalAmount?: string;
}
