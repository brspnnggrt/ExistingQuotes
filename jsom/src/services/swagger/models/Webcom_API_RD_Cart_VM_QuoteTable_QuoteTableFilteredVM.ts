/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableColumnFilterVM } from './Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableColumnFilterVM';

/**
 * Filtered quote table data
 */
export type Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableFilteredVM = {
    /**
     * The table identifier
     */
    quoteTableId?: number;
    /**
     * List of quote table column filter values
     */
    filters?: Array<Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableColumnFilterVM>;
    /**
     * The page number
     */
    pageNumber?: number;
    /**
     * Size of the page
     */
    pageSize?: number;
    /**
     * The tab identifier
     */
    tabId?: number;
}
