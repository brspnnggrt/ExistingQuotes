/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_CustomerColumnListItemVM } from './Webcom_API_RD_Customers_CustomerColumnListItemVM';
import type { Webcom_API_RD_Customers_CustomerVM } from './Webcom_API_RD_Customers_CustomerVM';
import type { Webcom_API_RD_Customers_PagerVM } from './Webcom_API_RD_Customers_PagerVM';

/**
 * Class CustomerListResponse.
 */
export type Webcom_API_RD_Customers_CustomerListResponse = {
    /**
     * Gets or sets the columns list.
     */
    ColumnsList?: Array<Webcom_API_RD_Customers_CustomerColumnListItemVM>;
    /**
     * Gets the customers.
     */
    readonly Customers?: Array<Webcom_API_RD_Customers_CustomerVM>;
    /**
     * Gets or sets the error information.
     */
    ErrorInfo?: string;
    /**
     * Gets or sets if there is an error.
     */
    HasError?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is lookup view.
     */
    IsLookupView?: boolean;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_RD_Customers_PagerVM;
    /**
     * Gets or sets the success information.
     */
    SuccessInfo?: string;
}
