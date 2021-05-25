/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Pricebooks_PagerVM } from './Webcom_API_Admin_Pricebooks_PagerVM';

/**
 * Class PricebookHistoryResponse.
 */
export type Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse = {
    /**
     * Gets the history records.
     */
    HistoryRecords?: Array<Array<string>>;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_Admin_Pricebooks_PagerVM;
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
}
