/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ProductTemplatesService {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async productTemplatesGet(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/ProductTemplates`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesPut(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/ProductTemplates`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesPost(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/files/ProductTemplates`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesGet1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/ProductTemplates/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesPut1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/ProductTemplates/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesDelete(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/admin/files/ProductTemplates/${id}`,
        });
        return result.body;
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async productTemplatesGet2(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/ProductTemplates`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesPut2(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/ProductTemplates`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesPost1(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/files/ProductTemplates`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesGet3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/ProductTemplates/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesPut3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/ProductTemplates/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async productTemplatesDelete1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/files/ProductTemplates/${id}`,
        });
        return result.body;
    }

}