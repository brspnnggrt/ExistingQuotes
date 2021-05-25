/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_CustomerFieldsParameterVM } from './Webcom_API_RD_Customers_CustomerFieldsParameterVM';
import type { Webcom_API_RD_Customers_CustomerListRequest } from './Webcom_API_RD_Customers_CustomerListRequest';

/**
 * Class SaveCustomerRequest.
 */
export type Webcom_API_RD_Customers_SaveCustomerRequest = {
    Filter?: Webcom_API_RD_Customers_CustomerListRequest;
    /**
     * Gets the field values.
     */
    readonly FieldValues?: Array<Webcom_API_RD_Customers_CustomerFieldsParameterVM>;
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets a value indicating whether this instance is update.
     */
    IsUpdate?: boolean;
    /**
     * Gets or sets the type of the role.
     */
    RoleType?: number;
}
