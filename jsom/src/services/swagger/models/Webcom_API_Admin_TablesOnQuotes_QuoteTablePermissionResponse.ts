/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm } from './Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm';
import type { Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm } from './Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Quote table permission response
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTablePermissionResponse = {
    /**
     * Gets or sets the permission.
     */
    Permission?: Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm;
    /**
     * Gets or sets the permission groups.
     */
    PermissionGroups?: Array<Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm>;
    /**
     * Gets or sets the statuses.
     */
    Statuses?: Array<Webcom_API_IdNamePair>;
}
