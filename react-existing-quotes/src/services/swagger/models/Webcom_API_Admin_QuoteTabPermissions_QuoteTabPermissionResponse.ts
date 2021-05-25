/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_QuoteTabPermissions_PermissionGroupVm } from './Webcom_API_Admin_QuoteTabPermissions_PermissionGroupVm';
import type { Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionVm } from './Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionVm';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Quote tab permission response
 */
export type Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionResponse = {
    /**
     * Gets or sets the permission.
     */
    Permission?: Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionVm;
    /**
     * Gets or sets the permission groups.
     */
    PermissionGroups?: Array<Webcom_API_Admin_QuoteTabPermissions_PermissionGroupVm>;
    /**
     * Gets or sets the tabs.
     */
    Tabs?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the statuses.
     */
    Statuses?: Array<Webcom_API_IdNamePair>;
}
