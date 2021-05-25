/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm } from './Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Define column model response
 */
export type Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm = {
    /**
     * Gets or sets quote table id
     */
    TableId?: number;
    /**
     * List of quote table columns
     */
    Columns?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm>;
    /**
     * List of quote table column groups
     */
    Groups?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm>;
    /**
     * Gets or sets the list of CPQ attributes.
     */
    Attributes?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the permission groups.
     */
    PermissionGroups?: Array<Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm>;
    /**
     * Gets or sets the error message
     */
    ErrorMessage?: string;
}
