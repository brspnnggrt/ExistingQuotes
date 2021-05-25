/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM } from '../models/Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM';
import type { Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM } from '../models/Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import { request as __request } from '../core/request';

export class GlobalScriptService {

    /**
     * Gets all global scripts.
     * This endpoint supports OData filtering. Example:    /api/script/v1/globalscripts?$filter=name like 'script1'The following global script properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like               active - $filter eq,ne     modifiedBy - $filter eq,ne,like      modifiedon - $filter eq,lt,gt,ge,le     script - $filter eq,ne,like     systemId - $filter eq,ne,like                        Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}           $skip={number}           SAP CPQ global script API is using <a href=>oData convention</a>.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM> The paged list contains all global scripts.
     * @throws ApiError
     */
    public static async globalScriptGetGlobalScripts(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/globalscripts`,
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
     * Creates a new global script.
     * @param globalScriptVm
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns string OK.
     * @throws ApiError
     */
    public static async globalScriptCreate(
        globalScriptVm: Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM,
        changeSetId?: number,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/script/v1/globalscripts`,
            query: {
                'changeSetId': changeSetId,
            },
            body: globalScriptVm,
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
     * Gets a global script.
     * @param id Global script ID
     * @returns Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM Global Script with the specified ID
     * @throws ApiError
     */
    public static async globalScriptGetById(
        id: number,
    ): Promise<Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/globalscripts/${id}`,
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
     * Updates a global script.
     * @param id Global script ID
     * @param globalScriptVm Global script view model
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async globalScriptUpdate(
        id: number,
        globalScriptVm: Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/script/v1/globalscripts/${id}`,
            query: {
                'changeSetId': changeSetId,
            },
            body: globalScriptVm,
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
     * Deletes a global script.
     * @param id Global script ID
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async globalScriptDelete(
        id: number,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/script/v1/globalscripts/${id}`,
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
     * Gets all global script versions.
     * This endpoint supports OData filtering. Example:    /api/script/v1/globalscripts/1/versions?$filter=changedBy like 'smith'The following global script version properties are available to OData, and have specific support for $filter option:                  content - $filter eq,ne,like               changedBy - $filter eq,ne,like     created - $filter eq,lt,gt,ge,le            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}       SAP CPQ global script API is using <a href=>oData convention</a>.
     * @param id Global script ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM> The paged list contains all global script versions.
     * @throws ApiError
     */
    public static async globalScriptGetAllVersions(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/globalscripts/${id}/versions`,
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
     * Gets a global script version via its ID.
     * @param scriptId Global script ID
     * @param id Version ID
     * @returns Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM Global script version with the specified ID.
     * @throws ApiError
     */
    public static async globalScriptGetVersionById(
        scriptId: number,
        id: number,
    ): Promise<Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/globalscripts/${scriptId}/versions/${id}`,
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
     * Gets the list of global script events.
     * @returns Webcom_API_SetupSPA_Common_LookupVM The list contains all available global script events.
     * @throws ApiError
     */
    public static async globalScriptGetGlobalScriptEvents(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/globalscripts/scripts/events`,
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