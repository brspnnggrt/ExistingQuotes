/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { System_Collections_Generic_KeyValuePair } from '../models/System_Collections_Generic_KeyValuePair';
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM } from '../models/Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM';
import type { Webcom_API_SetupSPA_Users_VM_UserCustomFieldTableRowVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserCustomFieldTableRowVM';
import { request as __request } from '../core/request';

export class UserCustomFieldService {

    /**
     * Get user custom fields
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Users_VM_UserCustomFieldTableRowVM> OK
     * @throws ApiError
     */
    public static async userCustomFieldGetUserCustomFieldsTable(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields`,
        });
        return result.body;
    }

    /**
     * Save User custom field
     * @param customField Custom field
     * @returns number OK
     * @throws ApiError
     */
    public static async userCustomFieldSave(
        customField: Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/userCustomFields`,
            body: customField,
        });
        return result.body;
    }

    /**
     * Get user custom field definition by provided id
     * @param userCustomFieldDefnId User custom field id
     * @returns Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM OK
     * @throws ApiError
     */
    public static async userCustomFieldGetUserCustomFieldDefn(
        userCustomFieldDefnId: number,
    ): Promise<Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields/${userCustomFieldDefnId}`,
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_SetupSPA_Users_VM_UserCustomFieldTableRowVM OK
     * @throws ApiError
     */
    public static async userCustomFieldGetCustomFieldsRanks(): Promise<Array<Webcom_API_SetupSPA_Users_VM_UserCustomFieldTableRowVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields/ranks`,
        });
        return result.body;
    }

    /**
     * @param customFieldsRanks
     * @returns void
     * @throws ApiError
     */
    public static async userCustomFieldSaveUserCustomFieldsRanks(
        customFieldsRanks: Array<System_Collections_Generic_KeyValuePair>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/userCustomFields/ranks`,
            body: customFieldsRanks,
        });
        return result.body;
    }

    /**
     * Gets user custom field types
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userCustomFieldGetUserCustomFieldTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields/types`,
        });
        return result.body;
    }

    /**
     * Get user custom field attributes
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userCustomFieldCustomFieldAttributes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields/attributes`,
        });
        return result.body;
    }

    /**
     * Deletes user custom field with provided id
     * @param id User custom field id
     * @returns void
     * @throws ApiError
     */
    public static async userCustomFieldDeleteUserCustomField(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/userCustomFields/${id}`,
        });
        return result.body;
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async userCustomFieldGetCustomFieldNames(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields/names`,
        });
        return result.body;
    }

    /**
     * Gets user custom fields lookup list
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async userCustomFieldGetCustomFieldLookups(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userCustomFields/lookups`,
        });
        return result.body;
    }

    /**
     * Save User custom field
     * @param customField Custom field
     * @returns void
     * @throws ApiError
     */
    public static async userCustomFieldSaveTranslations(
        customField: Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/userCustomFields/translations`,
            body: customField,
        });
        return result.body;
    }

}