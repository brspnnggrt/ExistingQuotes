/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_Assets_AssetDefinitionResponse } from '../models/Webcom_API_Admin_Assets_AssetDefinitionResponse';
import type { Webcom_Configurator_Core_AssetFieldDefinition } from '../models/Webcom_Configurator_Core_AssetFieldDefinition';
import { request as __request } from '../core/request';

export class AssetDefinitionService {

    /**
     * Gets the initialize data.
     * @returns Webcom_API_Admin_Assets_AssetDefinitionResponse OK
     * @throws ApiError
     */
    public static async assetDefinitionGetInitData(): Promise<Webcom_API_Admin_Assets_AssetDefinitionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/AssetDefinition/GetInitData`,
        });
        return result.body;
    }

    /**
     * Saves the asset definition.
     * @param fields The fields.
     * @returns Webcom_API_Admin_Assets_AssetDefinitionResponse OK
     * @throws ApiError
     */
    public static async assetDefinitionSaveAssetDefinition(
        fields: Array<Webcom_Configurator_Core_AssetFieldDefinition>,
    ): Promise<Webcom_API_Admin_Assets_AssetDefinitionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/AssetDefinition/SaveAssetDefinition`,
            body: fields,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async assetDefinitionGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/AssetDefinition/GenerateSecretKey`,
        });
        return result.body;
    }

}