/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { System_Collections_Generic_KeyValuePair } from '../models/System_Collections_Generic_KeyValuePair';
import type { Webcom_API_Common_Models_FilteredRequest } from '../models/Webcom_API_Common_Models_FilteredRequest';
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Permission_VM_PermissionGroupRowVM } from '../models/Webcom_API_SetupSPA_Permission_VM_PermissionGroupRowVM';
import type { Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM } from '../models/Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM';
import type { Webcom_API_SetupSPA_Permission_VM_PermissionGroupVM } from '../models/Webcom_API_SetupSPA_Permission_VM_PermissionGroupVM';
import type { Webcom_API_SetupSPA_Users_VM_UserTableRowVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserTableRowVM';
import { request as __request } from '../core/request';

export class PermissionGroupService {

    /**
     * Get all permissions for data table
     * This endpoint supports filtering by the following properties:name, description, members, permissionType            permissionType values:     0 - Custom permission groups     1 - User type     2 - Company     3 - Market     4 - Brand     5 - User            Example:                /setup/api/v1/admin/permissionGroups?permissionType_eq=1If permissionType filter is not used custom permission groups are returned.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Permission_VM_PermissionGroupRowVM> OK
     * @throws ApiError
     */
    public static async permissionGroupGetPermissionGroups(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups`,
        });
        return result.body;
    }

    /**
     * Saves manually created permission group
     * @param permissionGroup
     * @returns number OK
     * @throws ApiError
     */
    public static async permissionGroupSavePermission(
        permissionGroup: Webcom_API_SetupSPA_Permission_VM_PermissionGroupVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/permissionGroups`,
            body: permissionGroup,
        });
        return result.body;
    }

    /**
     * Gets all users which belongs to selected permission groups
     * @param request
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Users_VM_UserTableRowVM> OK
     * @throws ApiError
     */
    public static async permissionGroupGetUsersByPermissionGroups(
        request: Webcom_API_Common_Models_FilteredRequest,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/permissionGroups/users`,
            body: request,
        });
        return result.body;
    }

    /**
     * Get all permissions
     * @returns Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM OK
     * @throws ApiError
     */
    public static async permissionGroupGetAllPermissions(): Promise<Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/permissions`,
        });
        return result.body;
    }

    /**
     * Get all permissions for permission groups
     * @returns Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM OK
     * @throws ApiError
     */
    public static async permissionGroupGetAllPermissionsForPermissionGroups(): Promise<Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/permissions/group`,
        });
        return result.body;
    }

    /**
     * Get all permissions for permission groups
     * @returns Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM OK
     * @throws ApiError
     */
    public static async permissionGroupGetAllPermissionsForUserTypeGroup(): Promise<Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/permissions/userTypeGroup`,
        });
        return result.body;
    }

    /**
     * Gets all permission groups for admin users
     * @returns Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM OK
     * @throws ApiError
     */
    public static async permissionGroupGetAdminPermissionGroups(): Promise<Webcom_API_SetupSPA_Permission_VM_PermissionGroupsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/permissions/admin`,
        });
        return result.body;
    }

    /**
     * Get permission by Id
     * @param permissionId
     * @returns Webcom_API_SetupSPA_Permission_VM_PermissionGroupVM OK
     * @throws ApiError
     */
    public static async permissionGroupGetPermissionById(
        permissionId: number,
    ): Promise<Webcom_API_SetupSPA_Permission_VM_PermissionGroupVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/${permissionId}`,
        });
        return result.body;
    }

    /**
     * Get permission id of user with provided id
     * @param userId User id
     * @returns number OK
     * @throws ApiError
     */
    public static async permissionGroupGetUserPermissionId(
        userId: number,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/users/${userId}/id`,
        });
        return result.body;
    }

    /**
     * Get name by Id for user permission groups
     * @param userId User id
     * @returns System_Collections_Generic_KeyValuePair<System_Int32_System_String> OK
     * @throws ApiError
     */
    public static async permissionGroupGetNameByIdForUserPermissionGroup(
        userId: number,
    ): Promise<System_Collections_Generic_KeyValuePair> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/name`,
            query: {
                'userId': userId,
            },
        });
        return result.body;
    }

    /**
     * Gets system id
     * @returns string OK
     * @throws ApiError
     */
    public static async permissionGroupGetSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/permissionGroups/SystemId`,
        });
        return result.body;
    }

    /**
     * Deletes permission group with provided id
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async permissionGroupDeletePermission(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/permissionGroups/${id}`,
        });
        return result.body;
    }

}