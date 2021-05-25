/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_Configurator_Core_Clm_ClmStatusMapping } from '../models/Webcom_Configurator_Core_Clm_ClmStatusMapping';
import { request as __request } from '../core/request';

export class ClmStatusMappingsService {

    /**
     * Gets the initialize data.
     * @param contractType
     * @returns any OK
     * @throws ApiError
     */
    public static async clmStatusMappingsGetData(
        contractType: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/ClmStatusMappings/GetData`,
            query: {
                'contractType': contractType,
            },
        });
        return result.body;
    }

    /**
     * Saves the mapping.
     * @param status
     * @returns any OK
     * @throws ApiError
     */
    public static async clmStatusMappingsSaveMapping(
        status: Webcom_Configurator_Core_Clm_ClmStatusMapping,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/ClmStatusMappings/SaveMapping`,
            body: status,
        });
        return result.body;
    }

    /**
     * Deletes the mapping.
     * @param id The identifier.
     * @returns any OK
     * @throws ApiError
     */
    public static async clmStatusMappingsDeleteMapping(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/ClmStatusMappings/DeleteMapping`,
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
    public static async clmStatusMappingsGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/ClmStatusMappings/GenerateSecretKey`,
        });
        return result.body;
    }

}