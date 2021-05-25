/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class AttributeImageService {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async attributeImageGet(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/AttributeImage`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImagePut(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/AttributeImage`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImagePost(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/files/AttributeImage`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImageGet1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/AttributeImage/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImagePut1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/AttributeImage/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImageDelete(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/admin/files/AttributeImage/${id}`,
        });
        return result.body;
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async attributeImageGet2(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/AttributeImage`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImagePut2(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/AttributeImage`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImagePost1(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/files/AttributeImage`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImageGet3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/AttributeImage/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImagePut3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/AttributeImage/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async attributeImageDelete1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/files/AttributeImage/${id}`,
        });
        return result.body;
    }

}