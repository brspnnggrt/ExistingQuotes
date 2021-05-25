/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Pricebooks_PagerVM } from './Webcom_API_Admin_Pricebooks_PagerVM';
import type { Webcom_API_Admin_Pricebooks_PricebookEntryVM } from './Webcom_API_Admin_Pricebooks_PricebookEntryVM';

/**
 * Pricebook entries response.
 */
export type Webcom_API_Admin_Pricebooks_PricebookEntriesResponse = {
    /**
     * Returns paging information.
     */
    Pager?: Webcom_API_Admin_Pricebooks_PagerVM;
    /**
     * List of pricebook entries of particular pricebook.
     */
    PricebookEntries?: Array<Webcom_API_Admin_Pricebooks_PricebookEntryVM>;
    /**
     * True if effective dates should be included in the response and displayed on the UI
     */
    ShowEffectiveDates?: boolean;
    /**
     * True if Recurring Price Period and Recurring Cost Period should be included in the response and displayed on the UI
     */
    UseRecurringPeriods?: boolean;
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
