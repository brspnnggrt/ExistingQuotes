/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class XsltService {

    /**
     * @param type
     * @returns string OK
     * @throws ApiError
     */
    public static async xsltGet(
        type: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/Xslt`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltPut(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/Xslt`,
        });
        return result.body;
    }

    /**
     * @param type
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltPost(
        type: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/files/Xslt`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * @param type
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltGet1(
        type: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/Xslt/${id}`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltPut1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/Xslt/${id}`,
        });
        return result.body;
    }

    /**
     * @param type
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltDelete(
        type: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/admin/files/Xslt/${id}`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * @param type
     * @returns string OK
     * @throws ApiError
     */
    public static async xsltGet2(
        type: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/Xslt`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltPut2(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/Xslt`,
        });
        return result.body;
    }

    /**
     * @param type
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltPost1(
        type: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/files/Xslt`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * @param type
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltGet3(
        type: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/Xslt/${id}`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltPut3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/Xslt/${id}`,
        });
        return result.body;
    }

    /**
     * @param type
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static async xsltDelete1(
        type: string,
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/files/Xslt/${id}`,
            query: {
                'type': type,
            },
        });
        return result.body;
    }

}