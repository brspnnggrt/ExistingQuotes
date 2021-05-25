/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_CustomerActionVM } from './Webcom_API_RD_Customers_CustomerActionVM';
import type { Webcom_API_RD_Customers_CustomerVM } from './Webcom_API_RD_Customers_CustomerVM';

/**
 * Class CustomerRoleResponse.
 */
export type Webcom_API_RD_Customers_CustomerRoleResponse = {
    /**
     * Gets or sets the customer.
     */
    Customer?: Webcom_API_RD_Customers_CustomerVM;
    /**
     * Gets or sets the customer actions.
     */
    CustomerActions?: Array<Webcom_API_RD_Customers_CustomerActionVM>;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
    /**
     * Gets or sets a value indicating whether this instance has error.
     */
    HasError?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is edit mode.
     */
    IsEditMode?: boolean;
    /**
     * Gets or sets the customer added message.
     */
    CustomerAddedMessage?: string;
    /**
     * Gets or sets a value indicating whether [show copy to bill to].
     */
    ShowCopyToBillTo?: boolean;
    /**
     * Gets or sets a value indicating whether [show copy to ship to].
     */
    ShowCopyToShipTo?: boolean;
    /**
     * Gets or sets a value indicating whether [show copy to end to].
     */
    ShowCopyToEndTo?: boolean;
    /**
     * Gets or sets a value indicating whether customer is blocked due data protection.
     */
    IsCustomerBlockedFromDeletion?: boolean;
}
