/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class CompanyLogoService {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async companyLogoGet(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/CompanyLogo`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoPut(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/CompanyLogo`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoPost(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/files/CompanyLogo`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoGet1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/files/CompanyLogo/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoPut1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/admin/files/CompanyLogo/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoDelete(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/admin/files/CompanyLogo/${id}`,
        });
        return result.body;
    }

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async companyLogoGet2(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/CompanyLogo`,
        });
        return result.body;
    }

    /**
     * Updates files
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoPut2(): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/CompanyLogo`,
        });
        return result.body;
    }

    /**
     * Creates new files
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoPost1(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/files/CompanyLogo`,
        });
        return result.body;
    }

    /**
     * Gets specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoGet3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/files/CompanyLogo/${id}`,
        });
        return result.body;
    }

    /**
     * Updates specified file
     * @param id Name of the file to update
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoPut3(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/files/CompanyLogo/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes specified file
     * @param id File name
     * @returns any OK
     * @throws ApiError
     */
    public static async companyLogoDelete1(
        id: string,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/files/CompanyLogo/${id}`,
        });
        return result.body;
    }

}