/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_ProductDetails_ProductDetailsResponse } from '../models/Webcom_API_RD_ProductDetails_ProductDetailsResponse';
import { request as __request } from '../core/request';

export class ProductDetailsService {

    /**
     * Gets the initialize data.
     * @param productId
     * @returns Webcom_API_RD_ProductDetails_ProductDetailsResponse OK
     * @throws ApiError
     */
    public static async productDetailsGetInitData(
        productId: number,
    ): Promise<Webcom_API_RD_ProductDetails_ProductDetailsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/ProductDetails/GetInitData`,
            query: {
                'productId': productId,
            },
        });
        return result.body;
    }

}