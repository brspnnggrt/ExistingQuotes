/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM } from '../models/Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM';
import type { Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM } from '../models/Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM';
import { request as __request } from '../core/request';

export class CustomCalculationService {

    /**
     * Gets custom calculations.
     * This endpoint supports OData filtering. Example:    /api/script/v1/customcalculations?$filter=name like 'calculation'The following custom calculation properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like     active - $filter eq,ne                 systemId - $filter eq,ne,like            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}        $skip={number}       SAP CPQ custom calculations script API is using <a href=>oData convention</a>.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM> The paged list contains all custom calculations.
     * @throws ApiError
     */
    public static async customCalculationGetCustomCalculations(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customcalculations`,
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
     * Creates a new custom calculation.
     * If the script needs to load a new WSDL version, forceProxyGeneration needs to be set to true.
     * @param customCalculationVm Custom calculation
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns string OK.
     * @throws ApiError
     */
    public static async customCalculationCreate(
        customCalculationVm: Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM,
        changeSetId?: number,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/script/v1/customcalculations`,
            query: {
                'changeSetId': changeSetId,
            },
            body: customCalculationVm,
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
     * Gets the custom calculation with the provided ID.
     * @param id Custom calculation ID
     * @returns Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM The custom calculation with the specified ID.
     * @throws ApiError
     */
    public static async customCalculationGetById(
        id: number,
    ): Promise<Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customcalculations/${id}`,
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
     * Updates custom calculations. If the script loads a new WSDL version, forceProxyGeneration needs to be set to true.
     * @param id
     * @param customCalculationVm Custom calculation
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async customCalculationUpdate(
        id: number,
        customCalculationVm: Webcom_API_SetupSPA_Scripts_CustomCalculation_VM_CustomCalculationVM,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/script/v1/customcalculations/${id}`,
            query: {
                'changeSetId': changeSetId,
            },
            body: customCalculationVm,
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
     * Deletes the custom calculation with the provided ID.
     * @param id Custom calculation ID
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any OK.
     * @throws ApiError
     */
    public static async customCalculationDelete(
        id: number,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/script/v1/customcalculations/${id}`,
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
     * Gets all versions for custom calculation with the provided ID.
     * This endpoint supports OData filtering. Example:    /api/script/v1/customcalculations/1/versions?$filter=changedBy like 'smith'The following custom calculation version properties are available to OData, and have specific support for $filter option:                  content - $filter eq,ne,like               changedBy - $filter eq,ne,like     created - $filter eq,lt,gt,ge,le                        Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}     $skip={number}       SAP CPQ custom calculations script API is using <a href=>oData convention</a>.
     * @param customCalculationId Custom calculation ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM> The paged list contains all custom calculation versions.
     * @throws ApiError
     */
    public static async customCalculationGetAllVersions(
        customCalculationId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customcalculations/${customCalculationId}/versions`,
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
     * Gets the version of the custom calculation with the provided ID.
     * @param customCalculationId Custom calculation ID
     * @param versionId Custom calculation version ID
     * @returns Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM Custom Calculation Version with the specified id
     * @throws ApiError
     */
    public static async customCalculationGetCustomCalculationVersion(
        customCalculationId: number,
        versionId: number,
    ): Promise<Webcom_API_Public_Scripts_VM_BaseScriptHistoryRecordVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/script/v1/customcalculations/${customCalculationId}/versions/${versionId}`,
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