/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Contains list of all user permissions, current page and page size for paging
 */
export type Webcom_API_Admin_UsersPermissionGroups_UserPermissionListVM = {
    /**
     * List of all permission IDs
     */
    PermissionList?: Array<string>;
    /**
     * Current page for paging
     */
    Page?: number;
    /**
     * Current page size for paging
     */
    Size?: number;
}
