/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ContentFileService {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async contentFileGet(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/ContentFile`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFilePut(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/ContentFile`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFilePost(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/files/ContentFile`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFileGet1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/ContentFile/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFilePut1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/ContentFile/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFileDelete(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/admin/files/ContentFile/${id}`,
        });
        return result.body;
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async contentFileGet2(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/ContentFile`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFilePut2(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/ContentFile`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFilePost1(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/files/ContentFile`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFileGet3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/ContentFile/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFilePut3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/ContentFile/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async contentFileDelete1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/files/ContentFile/${id}`,
        });
        return result.body;
    }

}