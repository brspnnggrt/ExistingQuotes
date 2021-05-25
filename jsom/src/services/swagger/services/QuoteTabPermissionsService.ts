/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionResponse } from '../models/Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionResponse';
import type { Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionsResponse } from '../models/Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionsResponse';
import type { Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionVm } from '../models/Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionVm';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class QuoteTabPermissionsService {

    /**
     * Gets the initialize data.
     * @returns Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionsResponse OK
     * @throws ApiError
     */
    public static async quoteTabPermissionsGetListInitData(): Promise<Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/QuoteTabPermissions/GetListInitData`,
        });
        return result.body;
    }

    /**
     * Deletes the quote tab permission with specified identifier.
     * @param permissionId The permission id.
     * @returns void
     * @throws ApiError
     */
    public static async quoteTabPermissionsDeletePermission(
        permissionId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/QuoteTabPermissions/DeletePermission`,
            query: {
                'permissionId': permissionId,
            },
        });
        return result.body;
    }

    /**
     * Gets the quote tab permission with specified id.
     * @param permissionId The permission id.
     * @returns Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionResponse OK
     * @throws ApiError
     */
    public static async quoteTabPermissionsGetPermission(
        permissionId: number,
    ): Promise<Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/QuoteTabPermissions/GetPermission`,
            query: {
                'permissionId': permissionId,
            },
        });
        return result.body;
    }

    /**
     * Saves the quote tab permission.
     * @param permission The permission request.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async quoteTabPermissionsSavePermission(
        permission: Webcom_API_Admin_QuoteTabPermissions_QuoteTabPermissionVm,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/QuoteTabPermissions/SavePermission`,
            body: permission,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async quoteTabPermissionsGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/QuoteTabPermissions/GenerateSecretKey`,
        });
        return result.body;
    }

}