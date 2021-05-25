/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_GuestUser_GuestUserVM } from '../models/Webcom_API_SetupSPA_GuestUser_GuestUserVM';
import { request as __request } from '../core/request';

export class GuestUserService {

    /**
     * Gets guest user's lookup
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async guestUserGuestUserLookup(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/guestUser/lookup`,
        });
        return result.body;
    }

    /**
     * Gets guest user settings
     * @returns Webcom_API_SetupSPA_GuestUser_GuestUserVM OK
     * @throws ApiError
     */
    public static async guestUserGetDefault(): Promise<Webcom_API_SetupSPA_GuestUser_GuestUserVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/guestUser`,
        });
        return result.body;
    }

    /**
     * Saves guest user settings
     * @param guestUser Guest user
     * @returns void
     * @throws ApiError
     */
    public static async guestUserSave(
        guestUser: Webcom_API_SetupSPA_GuestUser_GuestUserVM,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/guestUser`,
            body: guestUser,
        });
        return result.body;
    }

    /**
     * Gets required fields for user registration
     * @returns string OK
     * @throws ApiError
     */
    public static async guestUserGetUserRegistrationRequiredFields(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/guestUser/requiredFields`,
        });
        return result.body;
    }

}