/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm } from './Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm';
import type { Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm } from './Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Define table model response
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm = {
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
     * Gets or sets the tabs list.
     */
    Tabs?: Array<Webcom_API_IdNamePair>;
    /**
     * Get or sets if the table search is enabled.
     */
    EnableSearch?: boolean;
    /**
     * Get or sets if the table excel file upload is allowed.
     */
    AllowExcelUpload?: boolean;
    /**
     * Gets or sets the statuses.
     */
    Statuses?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the permission groups.
     */
    PermissionGroups?: Array<Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm>;
    /**
     * Gets or sets the quote table permissions.
     */
    QuoteTablePermissions?: Array<Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm>;
    /**
     * Gets or sets the error message
     */
    ErrorMessage?: string;
}
