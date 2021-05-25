/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Scim_Models_ScimV2PatchUserRequest } from '../models/Webcom_API_Scim_Models_ScimV2PatchUserRequest';
import type { Webcom_API_Scim_Models_ScimV2ResourceQueryResponse } from '../models/Webcom_API_Scim_Models_ScimV2ResourceQueryResponse';
import type { Webcom_API_Scim_Models_ScimV2User } from '../models/Webcom_API_Scim_Models_ScimV2User';
import { request as __request } from '../core/request';

export class ScimV2UsersService {

    /**
     * Retrieve details of a user
     * @param uid The user ID
     * @returns Webcom_API_Scim_Models_ScimV2User The user is successfully retrieved.
     * @throws ApiError
     */
    public static async scimV2UsersGetScimV2UserById(
        uid: string,
    ): Promise<Webcom_API_Scim_Models_ScimV2User> {
        const result = await __request({
            method: 'GET',
            path: `/api/scim/v2/Users/${uid}`,
            errors: {
                401: `Unauthorized request.`,
                404: `User not found.`,
            },
        });
        return result.body;
    }

    /**
     * Update details of a user
     * The groups will also be re-assigned to the user or unassigned from them.
     * @param scimV2User The user payload
     * @param uid The user ID
     * @returns Webcom_API_Scim_Models_ScimV2User The user is successfully updated.
     * @throws ApiError
     */
    public static async scimV2UsersReplaceUser(
        scimV2User: Webcom_API_Scim_Models_ScimV2User,
        uid: string,
    ): Promise<Webcom_API_Scim_Models_ScimV2User> {
        const result = await __request({
            method: 'PUT',
            path: `/api/scim/v2/Users/${uid}`,
            body: scimV2User,
            errors: {
                400: `Invalid payload.`,
                401: `Unauthorized request.`,
                404: `User not found.`,
                409: `Username conflict.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

    /**
     * Delete a user
     * @param uid The user ID
     * @returns void
     * @throws ApiError
     */
    public static async scimV2UsersDeleteUser(
        uid: string,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/scim/v2/Users/${uid}`,
            errors: {
                400: `The logged user cannot be deleted.`,
                401: `Unauthorized request.`,
                404: `User not found.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

    /**
     * Activate or deactivate a user or change user groups
     * <para>We support matching with  operation, as it is a required field).</para>
     * @param uid The user ID
     * @param scimV2PatchUserRequest The patch payload
     * @returns Webcom_API_Scim_Models_ScimV2User The user is successfully patched.
     * @throws ApiError
     */
    public static async scimV2UsersPatchUser(
        uid: string,
        scimV2PatchUserRequest: Webcom_API_Scim_Models_ScimV2PatchUserRequest,
    ): Promise<Webcom_API_Scim_Models_ScimV2User> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/scim/v2/Users/${uid}`,
            body: scimV2PatchUserRequest,
            errors: {
                400: `Invalid patch payload.`,
                401: `Unauthorized request.`,
                404: `User not found.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

    /**
     * Retrieve a list of users
     * Retrieves a collection of users. Example:    /api/scim/v2/Users?startindex=3&amp;count=15&amp;filter=groups eq .  The filter supports AND logic between conditions.
     * @param filter Condition to filter the users
     * @param pagingParameterModelStartIndex 1-based starting index of the collection.
     * @param pagingParameterModelCount Maximum size of the returned collection.
     * @returns Webcom_API_Scim_Models_ScimV2ResourceQueryResponse<Webcom_API_Scim_Models_ScimV2User> Users are successfully retrieved.
     * @throws ApiError
     */
    public static async scimV2UsersGetAllScimV2Users(
        filter?: string,
        pagingParameterModelStartIndex?: number,
        pagingParameterModelCount?: number,
    ): Promise<Webcom_API_Scim_Models_ScimV2ResourceQueryResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/scim/v2/Users`,
            query: {
                'filter': filter,
                'pagingParameterModel.startIndex': pagingParameterModelStartIndex,
                'pagingParameterModel.count': pagingParameterModelCount,
            },
            errors: {
                400: `Invalid query parameters.`,
                401: `Unauthorized request.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

    /**
     * Create a new user
     * Groups will be assigned during the creation.
     * @param scimV2User The user payload
     * @returns Webcom_API_Scim_Models_ScimV2User The user is successfully created.
     * @throws ApiError
     */
    public static async scimV2UsersCreateUser(
        scimV2User: Webcom_API_Scim_Models_ScimV2User,
    ): Promise<Webcom_API_Scim_Models_ScimV2User> {
        const result = await __request({
            method: 'POST',
            path: `/api/scim/v2/Users`,
            body: scimV2User,
            errors: {
                400: `Invalid payload.`,
                401: `Unauthorized request.`,
                409: `Username conflict.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

}