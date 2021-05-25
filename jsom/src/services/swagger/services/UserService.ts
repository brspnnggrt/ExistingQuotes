/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { System_Collections_Generic_KeyValuePair } from '../models/System_Collections_Generic_KeyValuePair';
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Users_DateAndMarketLookupVM } from '../models/Webcom_API_SetupSPA_Users_DateAndMarketLookupVM';
import type { Webcom_API_SetupSPA_Users_VM_AppUserVM } from '../models/Webcom_API_SetupSPA_Users_VM_AppUserVM';
import type { Webcom_API_SetupSPA_Users_VM_UserAdditionalSettingsLookupVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserAdditionalSettingsLookupVM';
import type { Webcom_API_SetupSPA_Users_VM_UserAddressLookupVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserAddressLookupVM';
import type { Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM';
import type { Webcom_API_SetupSPA_Users_VM_UserGeneralDefaultLookupVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserGeneralDefaultLookupVM';
import type { Webcom_API_SetupSPA_Users_VM_UserTableRowVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserTableRowVM';
import type { Webcom_API_SetupSPA_Users_VM_UserVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserVM';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Gets user with provided ID
     * @param id
     * @returns Webcom_API_SetupSPA_Users_VM_UserVM OK
     * @throws ApiError
     */
    public static async userGetUser(
        id: number,
    ): Promise<Webcom_API_SetupSPA_Users_VM_UserVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes the user with provided ID
     * @param id User id
     * @returns void
     * @throws ApiError
     */
    public static async userDeleteUser(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/users/${id}`,
        });
        return result.body;
    }

    /**
     * Gets the filtered, paged and sorted list of users with their total number
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/users?username_like=james&amp;offset=10&amp;limit=10&amp;sort=-firstNameThe result can be filtered with the following properties using only the listed operators:                 username_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like ne,eq,lt,gt,ge,le,in,nin,like     firstName_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     lastName_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     email_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     userType_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     company_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     address_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     approvalParent_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     managingParent_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     orderingParent_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     territory_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     active_{operator} - operator: eq,ne     createdBy_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     dateCreated_{operator} - operator: eq,lt,gt,ge,le     modifiedBy_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     dateModified_{operator} - operator: eq,lt,gt,ge,le     federationId_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     zipCode_{operator} - operator: ne,eq,lt,gt,ge,le,in,nin,like     There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Users_VM_UserTableRowVM> OK
     * @throws ApiError
     */
    public static async userGetUsers(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users`,
        });
        return result.body;
    }

    /**
     * Saves the user
     * @param user User VM
     * @returns number OK
     * @throws ApiError
     */
    public static async userSaveUser(
        user: Webcom_API_SetupSPA_Users_VM_UserVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/users`,
            body: user,
        });
        return result.body;
    }

    /**
     * Gets the info about the current, logged-in user
     * @returns Webcom_API_SetupSPA_Users_VM_AppUserVM OK
     * @throws ApiError
     */
    public static async userGetCurrentUser(): Promise<Webcom_API_SetupSPA_Users_VM_AppUserVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/current/data`,
        });
        return result.body;
    }

    /**
     * Gets Setup js configuration for walkme
     * @returns string OK
     * @throws ApiError
     */
    public static async userGetWalkMeConfiguration(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/getWalkMeConfiguration`,
        });
        return result.body;
    }

    /**
     * Gets names of users with provided IDs
     * @param userIds User ids
     * @returns System_Collections_Generic_KeyValuePair<System_Int32_System_String> OK
     * @throws ApiError
     */
    public static async userGetUserNames(
        userIds: string,
    ): Promise<Array<System_Collections_Generic_KeyValuePair>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/names`,
            query: {
                'userIds': userIds,
            },
        });
        return result.body;
    }

    /**
     * Gets names of users with provided IDs
     * @param userIds User ids
     * @returns System_Collections_Generic_KeyValuePair<System_Int32_System_String> OK
     * @throws ApiError
     */
    public static async userGetUserNamesPostMehthod(
        userIds: Array<number>,
    ): Promise<Array<System_Collections_Generic_KeyValuePair>> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/users/names`,
            body: userIds,
        });
        return result.body;
    }

    /**
     * Gets the ID/names of active and non-blocked administrators
     * @returns System_Collections_Generic_KeyValuePair<System_Int32_System_String> OK
     * @throws ApiError
     */
    public static async userGetAdminUserNames(): Promise<Array<System_Collections_Generic_KeyValuePair>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/admins/names`,
        });
        return result.body;
    }

    /**
     * Gets branding lookups
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userGetBrandingLookups(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/lookups/brands`,
        });
        return result.body;
    }

    /**
     * Gets company lookups
     * @param query Search criteria
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userGetCompanyLookups(
        query?: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/lookups/companies`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Gets default values for the General tab
     * @returns Webcom_API_SetupSPA_Users_VM_UserGeneralDefaultLookupVM OK
     * @throws ApiError
     */
    public static async userUserGeneralDefault(): Promise<Webcom_API_SetupSPA_Users_VM_UserGeneralDefaultLookupVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/tabs/general/default`,
        });
        return result.body;
    }

    /**
     * Gets the user address lookup
     * @returns Webcom_API_SetupSPA_Users_VM_UserAddressLookupVM OK
     * @throws ApiError
     */
    public static async userUserAddressLookup(): Promise<Webcom_API_SetupSPA_Users_VM_UserAddressLookupVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/address`,
        });
        return result.body;
    }

    /**
     * Gets the date and market lookup
     * @returns Webcom_API_SetupSPA_Users_DateAndMarketLookupVM OK
     * @throws ApiError
     */
    public static async userDateAndMarketLookup(): Promise<Webcom_API_SetupSPA_Users_DateAndMarketLookupVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/tabs/dateAndMarket`,
        });
        return result.body;
    }

    /**
     * Gets the lookup for the Additional Settings tab
     * @param marketId
     * @returns Webcom_API_SetupSPA_Users_VM_UserAdditionalSettingsLookupVM OK
     * @throws ApiError
     */
    public static async userUserAdditionalSettingsLookup(
        marketId: number,
    ): Promise<Webcom_API_SetupSPA_Users_VM_UserAdditionalSettingsLookupVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/tabs/additionalSettings/${marketId}`,
        });
        return result.body;
    }

    /**
     * Gets pricebook lookups by marketId
     * @param marketId
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userGetPricebooksByMarketId(
        marketId: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/tabs/pricebooks/${marketId}`,
        });
        return result.body;
    }

    /**
     * Gets user custom fields
     * @returns Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM OK
     * @throws ApiError
     */
    public static async userGetUserCustomFields(): Promise<Array<Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/customFields`,
        });
        return result.body;
    }

    /**
     * Checks if an email is sent to new users
     * @returns boolean OK
     * @throws ApiError
     */
    public static async userShouldSendEmailToUser(): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/shouldSendEmailToUser`,
        });
        return result.body;
    }

    /**
     * Gets a blocked users' IDs
     * @returns number OK
     * @throws ApiError
     */
    public static async userGetBlockedUsersIds(): Promise<Array<number>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/users/blockedUsers`,
        });
        return result.body;
    }

    /**
     * Adds a user to permission groups
     * @param id
     * @param permissionGroupSystemIds
     * @returns void
     * @throws ApiError
     */
    public static async userAddUserToPermissionGroups(
        id: number,
        permissionGroupSystemIds: Array<string>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/users/${id}/permissionGroup`,
            body: permissionGroupSystemIds,
        });
        return result.body;
    }

    /**
     * Deletes a user from permission groups
     * @param id
     * @param permissionGroupSystemIds
     * @returns void
     * @throws ApiError
     */
    public static async userDeleteUserFromPermssionGroups(
        id: number,
        permissionGroupSystemIds: Array<string>,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/users/${id}/permissionGroup`,
            body: permissionGroupSystemIds,
        });
        return result.body;
    }

}