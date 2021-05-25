/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { System_Collections_Generic_KeyValuePair } from './System_Collections_Generic_KeyValuePair';
import type { Webcom_API_Public_Cart_VM_CustomerVM } from './Webcom_API_Public_Cart_VM_CustomerVM';

export type Webcom_API_Public_Cart_CartApiRequest = {
    /**
     * Gets or sets the opportunity identifier.
     */
    OpportunityId?: string;
    /**
     * Gets or sets the market code.
     */
    MarketCode?: string;
    /**
     * Gets or sets the cart status.
     */
    CartStatus?: string;
    /**
     * Gets or sets the comment.
     */
    Comment?: string;
    /**
     * Gets or sets the cart custom fields.
     */
    CartCustomFields?: Array<System_Collections_Generic_KeyValuePair>;
    /**
     * Gets or sets the bill to.
     */
    BillTo?: Webcom_API_Public_Cart_VM_CustomerVM;
    /**
     * Gets or sets the ship to.
     */
    ShipTo?: Webcom_API_Public_Cart_VM_CustomerVM;
    /**
     * Gets or sets the end user.
     */
    EndUser?: Webcom_API_Public_Cart_VM_CustomerVM;
}
