/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_AddressResponse } from './Webcom_API_RD_Customers_AddressResponse';

/**
 * Class AddressesLookupResponse.
 */
export type Webcom_API_RD_Customers_AddressesLookupResponse = {
    /**
     * Gets or sets the addresses.
     */
    Addresses?: Array<Webcom_API_RD_Customers_AddressResponse>;
    /**
     * Gets or sets a value indicating whether [by post code].
     */
    ByPostCode?: boolean;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
    /**
     * Gets or sets a value indicating whether this instance has error.
     */
    HasError?: boolean;
}
