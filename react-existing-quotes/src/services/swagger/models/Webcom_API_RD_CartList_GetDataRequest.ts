/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_AdditionalFieldRequestVM } from './Webcom_API_RD_CartList_AdditionalFieldRequestVM';

/**
 * Class GetDataRequest.
 */
export type Webcom_API_RD_CartList_GetDataRequest = {
    /**
     * Gets or sets the additional fields.
     */
    AdditionalFields?: Array<Webcom_API_RD_CartList_AdditionalFieldRequestVM>;
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the current tab identifier.
     */
    CurrentTabId?: number;
    /**
     * Gets or sets the date from.
     */
    DateFrom?: string;
    /**
     * Gets or sets the date to.
     */
    DateTo?: string;
    /**
     * Gets or sets the last days.
     */
    LastDays?: number;
    /**
     * Gets or sets the size of the page.
     */
    PageSize?: number;
    /**
     * Gets or sets a value indicating whether [perform count].
     */
    PerformCount?: boolean;
    /**
     * Gets or sets the sort by.
     */
    SortBy?: string;
    /**
     * Gets or sets the sort method.
     */
    SortMethod?: string;
    /**
     * Gets or sets the statuses.
     */
    Statuses?: Array<number>;
    /**
     * Gets or sets the name of the grid.
     */
    GridName?: string;
}
