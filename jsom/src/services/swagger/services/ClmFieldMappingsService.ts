/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_Providers_CLM_CLMFieldMappingResponse } from '../models/Webcom_API_Admin_Providers_CLM_CLMFieldMappingResponse';
import type { Webcom_API_Admin_Providers_CLM_CLMFieldMappingsRequest } from '../models/Webcom_API_Admin_Providers_CLM_CLMFieldMappingsRequest';
import type { Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse } from '../models/Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse';
import { request as __request } from '../core/request';

export class ClmFieldMappingsService {

    /**
     * Gets the initialize data.
     * @param directionId
     * @param contractType
     * @returns Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse OK
     * @throws ApiError
     */
    public static async clmFieldMappingsGetData(
        directionId: number,
        contractType: string,
    ): Promise<Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/CLMFieldMappings/GetData`,
            query: {
                'directionId': directionId,
                'contractType': contractType,
            },
        });
        return result.body;
    }

    /**
     * Saves the mapping.
     * @param request The request.
     * @returns Webcom_API_Admin_Providers_CLM_CLMFieldMappingResponse OK
     * @throws ApiError
     */
    public static async clmFieldMappingsSaveMapping(
        request: Webcom_API_Admin_Providers_CLM_CLMFieldMappingsRequest,
    ): Promise<Webcom_API_Admin_Providers_CLM_CLMFieldMappingResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/CLMFieldMappings/SaveMapping`,
            body: request,
        });
        return result.body;
    }

    /**
     * Deletes the mapping.
     * @param id The identifier.
     * @returns Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse OK
     * @throws ApiError
     */
    public static async clmFieldMappingsDeleteMapping(
        id: number,
    ): Promise<Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/CLMFieldMappings/DeleteMapping`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async clmFieldMappingsGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/CLMFieldMappings/GenerateSecretKey`,
        });
        return result.body;
    }

}