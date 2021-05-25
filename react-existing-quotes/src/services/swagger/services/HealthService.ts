/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * Returns health status and found errors per each coponent.Requires authentication
     * @returns any OK
     * @throws ApiError
     */
    public static async healthDetails(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/Health/Details`,
        });
        return result.body;
    }

    /**
     * Returns health status per each component
     * @returns any OK
     * @throws ApiError
     */
    public static async healthStatus(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/Health/Status`,
        });
        return result.body;
    }

}