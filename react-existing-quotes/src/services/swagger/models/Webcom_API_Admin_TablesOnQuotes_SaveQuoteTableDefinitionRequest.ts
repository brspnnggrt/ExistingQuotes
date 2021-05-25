/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm } from './Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm';

/**
 * Save quote table definition request
 */
export type Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableDefinitionRequest = {
    /**
     * Gets or sets table id
     */
    TableId?: number;
    /**
     * Get or sets table name.
     */
    TableName?: string;
    /**
     * Get or sets table label.
     */
    TableLabel?: string;
    /**
     * Get or sets table rank.
     */
    TableRank?: number;
    /**
     * Get or sets table location.
     */
    TableLocation?: number;
    /**
     * Get or sets if the table search is enabled.
     */
    EnableSearch?: boolean;
    /**
     * Get or sets if the table excel file upload is allowed.
     */
    AllowExcelUpload?: boolean;
    /**
     * Gets or sets the quote table permissions.
     */
    QuoteTablePermissions?: Array<Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm>;
}
