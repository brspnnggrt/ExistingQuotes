/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class CustomerListRequest.
 */
export type Webcom_API_RD_Customers_CustomerListRequest = {
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the customer role.
     */
    CustomerRole?: number;
    /**
     * Gets or sets the items per page.
     */
    ItemsPerPage?: number;
    /**
     * Gets the search.
     */
    readonly Search?: Record<string, string>;
    /**
     * Gets or sets the sort column.
     */
    SortColumn?: string;
    /**
     * Gets or sets the sort order.
     */
    SortOrder?: string;
    /**
     * Gets or sets the list of requested columns. If this parameter is null, system will return default list of columns.
     */
    Columns?: Array<string>;
}
