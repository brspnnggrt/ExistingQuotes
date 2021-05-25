/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class CategoryImageService {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async categoryImageGet(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/CategoryImage`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImagePut(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/CategoryImage`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImagePost(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/files/CategoryImage`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImageGet1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/CategoryImage/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImagePut1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/CategoryImage/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImageDelete(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/admin/files/CategoryImage/${id}`,
        });
        return result.body;
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async categoryImageGet2(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/CategoryImage`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImagePut2(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/CategoryImage`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImagePost1(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/files/CategoryImage`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImageGet3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/CategoryImage/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImagePut3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/CategoryImage/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async categoryImageDelete1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/files/CategoryImage/${id}`,
        });
        return result.body;
    }

}