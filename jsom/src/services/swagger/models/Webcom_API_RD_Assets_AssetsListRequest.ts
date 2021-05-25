/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * AssetsListRequest
 */
export type Webcom_API_RD_Assets_AssetsListRequest = {
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the items per page.
     */
    ItemsPerPage?: number;
    /**
     * Gets the search.
     */
    Search?: Record<string, string>;
    /**
     * Gets or sets the sort column.
     */
    SortColumn?: string;
    /**
     * Gets or sets the sort order.
     */
    SortOrder?: string;
    /**
     * Gets or sets a value indicating whether [perform count].
     */
    PerformCount?: boolean;
}
