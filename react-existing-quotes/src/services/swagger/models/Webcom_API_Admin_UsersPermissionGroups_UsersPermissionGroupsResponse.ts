/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_UsersPermissionGroups_UserPermissionVm } from './Webcom_API_Admin_UsersPermissionGroups_UserPermissionVm';

/**
 * Represents Users group permission response
 */
export type Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsResponse = {
    /**
     * Gets or sets permission id
     */
    PermissionId?: number;
    /**
     * Gets or sets permission name
     */
    PermissionName?: string;
    /**
     * Gets or sets permission system id
     */
    SystemId?: string;
    /**
     * Gets or sets permission description
     */
    Description?: string;
    /**
     * Gets or sets permission condition
     */
    PermissionCondition?: string;
    /**
     * Gets or sets currently selected permission groups
     */
    SelectedPermissions?: Array<string>;
    /**
     * Gets or sets all available permission groups
     */
    PermissionGroups?: Array<Webcom_API_Admin_UsersPermissionGroups_UserPermissionVm>;
    /**
     * Gets or sets currently selected permission users
     */
    PermissionUsers?: Array<Webcom_API_Admin_UsersPermissionGroups_UserPermissionVm>;
}
