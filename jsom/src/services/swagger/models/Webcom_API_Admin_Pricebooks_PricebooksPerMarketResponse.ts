/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Pricebooks_PagerVM } from './Webcom_API_Admin_Pricebooks_PagerVM';
import type { Webcom_API_Admin_Pricebooks_PricebookTableVM } from './Webcom_API_Admin_Pricebooks_PricebookTableVM';

/**
 * Response for GetPricebooksPerMarketInitData
 */
export type Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse = {
    /**
     * Market of the pricebooks
     */
    MarketName?: string;
    /**
     * Pricebooks in specified market
     */
    Pricebooks?: Array<Webcom_API_Admin_Pricebooks_PricebookTableVM>;
    /**
     * Returns paging information
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
