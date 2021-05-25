/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm } from './Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm';

/**
 * Represents quote table actions tab data
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm = {
    /**
     * Gets or sets all permission groups.
     */
    AllPermissionGroups?: Array<Webcom_API_Admin_TablesOnQuotes_PermissionGroupVm>;
    /**
     * Gets or sets the actions.
     */
    Actions?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm>;
}
