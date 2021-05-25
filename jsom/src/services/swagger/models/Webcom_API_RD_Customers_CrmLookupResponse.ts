/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_CrmAccountVM } from './Webcom_API_RD_Customers_CrmAccountVM';
import type { Webcom_Configurator_Customers_CrmObjectInfo } from './Webcom_Configurator_Customers_CrmObjectInfo';

/**
 * Class CrmLookupResponse.
 */
export type Webcom_API_RD_Customers_CrmLookupResponse = {
    /**
     * Gets or sets the accounts.
     */
    Accounts?: Array<Webcom_API_RD_Customers_CrmAccountVM>;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
    /**
     * Gets or sets a value indicating whether this instance has error.
     */
    HasError?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has selected contact.
     */
    HasSelectedContact?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is came from sf.
     */
    IsCameFromSF?: boolean;
    /**
     * Gets or sets the selected contact.
     */
    SelectedContact?: Webcom_Configurator_Customers_CrmObjectInfo;
}
