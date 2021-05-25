/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Cart_CartApiRequest } from '../models/Webcom_API_Public_Cart_CartApiRequest';
import type { Webcom_API_Public_Cart_CartApiResponse } from '../models/Webcom_API_Public_Cart_CartApiResponse';
import { request as __request } from '../core/request';

export class CartApiService {

    /**
     * Creates the new cart.
     * @param request The request.
     * @returns Webcom_API_Public_Cart_CartApiResponse OK
     * @throws ApiError
     */
    public static async cartApiCreateNew(
        request: Webcom_API_Public_Cart_CartApiRequest,
    ): Promise<Webcom_API_Public_Cart_CartApiResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/CartApi/CreateNew`,
            body: request,
        });
        return result.body;
    }

}