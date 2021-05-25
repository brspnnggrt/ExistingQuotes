/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Common_Models_PagerVM } from './Webcom_API_Common_Models_PagerVM';
import type { Webcom_API_Internal_TenantUsage_VM_UserActivityVM } from './Webcom_API_Internal_TenantUsage_VM_UserActivityVM';
import type { Webcom_API_NameValuePair } from './Webcom_API_NameValuePair';

/**
 * UserActivityResponse
 */
export type Webcom_API_Internal_TenantUsage_UserActivityResponse = {
    /**
     * Gets or sets the sort method.
     */
    SortMethod?: string;
    /**
     * Gets or sets the total user logins.
     */
    TotalUserLogins?: number;
    /**
     * Gets or sets the total admin logins.
     */
    TotalAdminLogins?: number;
    /**
     * Gets or sets the total user created.
     */
    TotalUserCreated?: number;
    /**
     * Gets or sets the user activities.
     */
    UserActivities?: Array<Webcom_API_Internal_TenantUsage_VM_UserActivityVM>;
    /**
     * Gets or sets the columns list.
     */
    ColumnsList?: Array<Webcom_API_NameValuePair>;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_Common_Models_PagerVM;
}
