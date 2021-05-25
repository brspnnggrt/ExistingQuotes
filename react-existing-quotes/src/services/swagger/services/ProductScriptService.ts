/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM } from '../models/Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM';
import type { Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM } from '../models/Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import { request as __request } from '../core/request';

export class ProductScriptService {

    /**
     * Gets all product scripts and attached global scripts.
     * This endpoint supports OData filtering. Example:    /api/script/v1/products/1/scripts?$filter=name like 'memoryscript'The following product script properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like     active - $filter eq,ne             modifiedBy - $filter eq,ne,like     modifiedOn - $filter eq,lt,gt,ge,le     script- $filter eq,ne,like     systemId - $filter eq,ne,like            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}       SAP CPQ script API is using <a href=>oData convention</a>.
     * @param productId Product ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM> The paged list contains all product scripts.
     * @throws ApiError
     */
    public static async productScriptGetProductScripts(
        productId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/products/${productId}/scripts`,
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
     * Creates a new product script or attaches the existing global script.
     * This API is used for creating new product scripts or attaching the existing global scripts (if global scriptId is provided in productScriptVM.ProductScriptDefinition.Id), for creation of new product script use productScriptVM.ProductScriptDefinition.Id = 0
     * @param productId Product ID
     * @param productScriptVm Product script VM
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns string OK.
     * @throws ApiError
     */
    public static async productScriptCreate(
        productId: number,
        productScriptVm: Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM,
        changeSetId?: number,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/script/v1/products/${productId}/scripts`,
            query: {
                'changeSetId': changeSetId,
            },
            body: productScriptVm,
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
     * Gets a product script or a global script attached to a product.
     * @param productId Product ID
     * @param id Script ID
     * @returns Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM The product script with the specified ID.
     * @throws ApiError
     */
    public static async productScriptGetById(
        productId: number,
        id: number,
    ): Promise<Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/products/${productId}/scripts/${id}`,
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
     * Gets all product script versions. If the script is loading a new WSDL version, forceProxyGeneration needs to be set to true.
     * This endpoint supports OData filtering. Example:     api/script/v1/products/1/scripts/1/versions?$filter=changedBy like 'smith'The following product script version properties are available to OData, and have specific support for $filter option:                  content- $filter eq,ne,like     changedBy - $filter eq,ne,like             created - $filter eq,lt,gt,ge,le                  Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}       SAP CPQ script API is using <a href=>oData convention</a>.
     * @param productId Product ID
     * @param scriptId Script ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM> The paged list contains all product script versions.
     * @throws ApiError
     */
    public static async productScriptGetAllVersions(
        productId: number,
        scriptId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/products/${productId}/scripts/${scriptId}/versions`,
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
     * Gets the version via the product script of product ID and script ID.
     * @param productId Product ID
     * @param scriptId Product script ID
     * @param id Version ID
     * @returns Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM Product script version with the specified ID.
     * @throws ApiError
     */
    public static async productScriptGetVersionById(
        productId: number,
        scriptId: number,
        id: number,
    ): Promise<Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/products/${productId}/scripts/${scriptId}/versions/${id}`,
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
     * Updates product scripts or updates events of global scripts (if global script ID is provided in the script ID parameter)
     * @param productId Product ID
     * @param productScriptVm Product script VM
     * @param scriptId Script ID
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async productScriptUpdate(
        productId: number,
        productScriptVm: Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM,
        scriptId: number,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/script/v1/products/${productId}/scripts/${scriptId}`,
            query: {
                'changeSetId': changeSetId,
            },
            body: productScriptVm,
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
     * Deletes the product script.
     * Delete a product script or detach a global script(if script ID is global script ID, the detachment of global scripts from all product events will be attempted).
     * @param productId Product ID
     * @param scriptId Product script ID or global script ID for detachment
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async productScriptDelete(
        productId: number,
        scriptId: number,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/script/v1/products/${productId}/scripts/${scriptId}`,
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
     * Gets product system event lookups.
     * @returns Webcom_API_SetupSPA_Common_LookupVM The list contains all product script events.
     * @throws ApiError
     */
    public static async productScriptGetProductEvents(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/products/scripts/events`,
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