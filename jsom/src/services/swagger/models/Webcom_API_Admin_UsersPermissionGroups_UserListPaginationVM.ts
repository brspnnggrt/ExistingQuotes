/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm } from './Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm';

export type Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM = {
    /**
     * List of user permissions
     */
    UserList?: Array<Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm>;
    /**
     * Indicates if there are more results available
     */
    HasNext?: boolean;
    /**
     * Current page number
     */
    CurrentPage?: number;
    /**
     * Number of users on current page
     */
    PageSize?: number;
    /**
     * Total number of users on all pages
     */
    TotalRecords?: number;
}
