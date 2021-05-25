/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionListItemVm } from './Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionListItemVm';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Represents quote tab permissions response
 */
export type Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionsResponse = {
    /**
     * Gets or sets the quote tab permissions.
     */
    QuoteTabPermissions?: Array<Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionListItemVm>;
    /**
     * Gets or sets the tabs.
     */
    Tabs?: Array<Webcom_API_IdNamePair>;
}
