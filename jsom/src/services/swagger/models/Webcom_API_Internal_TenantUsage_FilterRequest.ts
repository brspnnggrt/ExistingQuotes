/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * FilterRequest
 */
export type Webcom_API_Internal_TenantUsage_FilterRequest = {
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the items per page.
     */
    ItemsPerPage?: number;
    /**
     * Gets or sets the sort method.
     */
    SortMethod?: string;
    /**
     * Gets or sets the order by column.
     */
    OrderByColumn?: string;
    /**
     * Gets or sets the search.
     */
    Search?: Record<string, string>;
}
