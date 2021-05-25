/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MarketsService {

    /**
     * Get markets
     * @param marketCode
     * @returns any OK
     * @throws ApiError
     */
    public static async marketsGet(
        marketCode?: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/markets`,
            query: {
                'marketCode': marketCode,
            },
        });
        return result.body;
    }

}