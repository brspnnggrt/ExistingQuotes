/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM } from '../models/Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM';
import type { Webcom_API_Admin_UsersPermissionGroups_UserPermissionListVM } from '../models/Webcom_API_Admin_UsersPermissionGroups_UserPermissionListVM';
import type { Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm } from '../models/Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm';
import type { Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsResponse } from '../models/Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsResponse';
import type { Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsVm } from '../models/Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsVm';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class UsersPermissionGroupsService {

    /**
     * Gets permission data
     * @param itemId Id of permission, 0 if new permission
     * @param actionType Action for permisison, new or copy
     * @returns Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsResponse OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGetPermission(
        itemId: number,
        actionType: number,
    ): Promise<Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/UsersPermissionGroups/GetPermission`,
            query: {
                'itemId': itemId,
                'actionType': actionType,
            },
        });
        return result.body;
    }

    /**
     * Saves Users permission group
     * @param permission The permission request
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsSavePermission(
        permission: Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsVm,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/UsersPermissionGroups/SavePermission`,
            body: permission,
        });
        return result.body;
    }

    /**
     * Searches all users and returns users that contain specified query string
     * @param query Search text
     * @returns Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGetUsers(
        query: string,
    ): Promise<Array<Webcom_API_Admin_UsersPermissionGroups_UserPermissionUserVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/UsersPermissionGroups/GetUsers`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Displays list of users that belong to specified permisison group. Does not include user total count.
     * @param permissionId Id of permission
     * @param page Current page for pagination
     * @param size Page size for displaying
     * @returns Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGetUsersBelongingToGroup(
        permissionId: number,
        page: number,
        size: number,
    ): Promise<Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroup`,
            query: {
                'permissionId': permissionId,
                'page': page,
                'size': size,
            },
        });
        return result.body;
    }

    /**
     * Displays list of users that belong to specified permisison group. Does not include user total count.
     * @param permission Object containing list of permissions, page and page size
     * @returns Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGetUsersBelongingToGroup1(
        permission: Webcom_API_Admin_UsersPermissionGroups_UserPermissionListVM,
    ): Promise<Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroup`,
            body: permission,
        });
        return result.body;
    }

    /**
     * Displays list of users that belong to specified permisison group. Includes total count of users.
     * @param permissionId Id of permission
     * @param page Current page for pagination
     * @param size Page size for displaying
     * @returns Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGetUsersBelongingToGroupInitial(
        permissionId: number,
        page: number,
        size: number,
    ): Promise<Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroupInitial`,
            query: {
                'permissionId': permissionId,
                'page': page,
                'size': size,
            },
        });
        return result.body;
    }

    /**
     * Displays list of users that belong to specified permisison group. Includes total count of users.
     * @param permission Object containing list of permissions, page and page size
     * @returns Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGetUsersBelongingToGroupInitial1(
        permission: Webcom_API_Admin_UsersPermissionGroups_UserPermissionListVM,
    ): Promise<Webcom_API_Admin_UsersPermissionGroups_UserListPaginationVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/UsersPermissionGroups/GetUsersBelongingToGroupInitial`,
            body: permission,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async usersPermissionGroupsGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/UsersPermissionGroups/GenerateSecretKey`,
        });
        return result.body;
    }

}