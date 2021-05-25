/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM } from '../models/Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM';
import type { Webcom_API_Public_Scripts_VM_ActionScriptHistoryRecordVM } from '../models/Webcom_API_Public_Scripts_VM_ActionScriptHistoryRecordVM';
import { request as __request } from '../core/request';

export class CustomActionsService {

    /**
     * Gets all custom actions.
     * This endpoint supports OData filtering. Example:    /api/script/v1/customactions?$filter=name like 'action'The following custom action properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like     sortOrder - $filter eq,lt,gt,ge,le     modifiedBy - $filter eq,ne,like     modifiedon - $filter eq,lt,gt,ge,le     script - $filter eq,ne,like     systemId - $filter eq,ne,like                   Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}      $skip={number}                               SAP CPQ custom actions script API is using <a href=>oData convention</a>.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM> The paged list contains all custom actions.
     * @throws ApiError
     */
    public static async customActionsGetCustomActions(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customactions`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Saves a new custom action.
     * @param customActionVm Custom action object
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns string OK.
     * @throws ApiError
     */
    public static async customActionsCreate(
        customActionVm: Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM,
        changeSetId?: number,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/script/v1/customactions`,
            query: {
                'changeSetId': changeSetId,
            },
            body: customActionVm,
            responseHeader: 'Location:',
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a custom action via its ID.
     * @param id Custom action ID
     * @returns Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM Custom Action with the specified ID
     * @throws ApiError
     */
    public static async customActionsGetById(
        id: number,
    ): Promise<Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customactions/${id}`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Updates custom actions.
     * @param id Custom action script ID
     * @param customActionVm Custom action object
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async customActionsUpdate(
        id: number,
        customActionVm: Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/script/v1/customactions/${id}`,
            query: {
                'changeSetId': changeSetId,
            },
            body: customActionVm,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes a custom action.
     * @param id Custom action ID
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async customActionsDelete(
        id: number,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/script/v1/customactions/${id}`,
            query: {
                'changeSetId': changeSetId,
            },
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets all custom action versions.
     * This endpoint supports OData filtering. Example:    /api/script/v1/customactions/1/versions?$filter=changedBy like 'smith'The following custom action version properties are available to OData, and have specific support for $filter option:                  content - $filter eq,ne,like                   changedBy - $filter eq,ne,like     created - $filter eq,lt,gt,ge,le             Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}       $skip={number}                               SAP CPQ custom actions script API is using <a href=>oData convention</a>.
     * @param id Custom action ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_VM_ActionScriptHistoryRecordVM> The paged list contains all custom action versions.
     * @throws ApiError
     */
    public static async customActionsGetAllVersions(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customactions/${id}/versions`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the version via its ID.
     * @param scriptId Script ID
     * @param id Custom action ID
     * @returns Webcom_API_Public_Scripts_VM_ActionScriptHistoryRecordVM The custom action version with the specified ID
     * @throws ApiError
     */
    public static async customActionsGetVersionById(
        scriptId: number,
        id: number,
    ): Promise<Webcom_API_Public_Scripts_VM_ActionScriptHistoryRecordVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customactions/${scriptId}/versions/${id}`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

}