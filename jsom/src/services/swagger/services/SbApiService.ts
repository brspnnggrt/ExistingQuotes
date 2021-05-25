/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_SB_VM_RatePlanVM } from '../models/Webcom_API_Public_SB_VM_RatePlanVM';
import { request as __request } from '../core/request';

export class SbApiService {

    /**
     * Get all rate plans by product ID
     * @param id
     * @returns Webcom_API_Public_SB_VM_RatePlanVM OK
     * @throws ApiError
     */
    public static async sbApiGetRatePlansByProduct(
        id: number,
    ): Promise<Array<Webcom_API_Public_SB_VM_RatePlanVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/sb/ratePlansByProduct`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

}