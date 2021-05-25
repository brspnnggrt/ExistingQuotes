/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_CompareProducts_CompareProductsResponse } from '../models/Webcom_API_RD_CompareProducts_CompareProductsResponse';
import { request as __request } from '../core/request';

export class CompareProductsService {

    /**
     * Gets the initialize data.
     * @returns Webcom_API_RD_CompareProducts_CompareProductsResponse OK
     * @throws ApiError
     */
    public static async compareProductsGetInitData(): Promise<Webcom_API_RD_CompareProducts_CompareProductsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CompareProducts/GetInitData`,
        });
        return result.body;
    }

    /**
     * Adds the product to compare.
     * @param productId The product identifier.
     * @returns void
     * @throws ApiError
     */
    public static async compareProductsAddProductToCompare(
        productId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CompareProducts/AddProductToCompare`,
            query: {
                'productId': productId,
            },
        });
        return result.body;
    }

    /**
     * Removes the product from compare.
     * @param productId The product identifier.
     * @returns void
     * @throws ApiError
     */
    public static async compareProductsRemoveProductFromCompare(
        productId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CompareProducts/RemoveProductFromCompare`,
            query: {
                'productId': productId,
            },
        });
        return result.body;
    }

    /**
     * Removes the product from compare and reload.
     * @param productId The product identifier.
     * @returns Webcom_API_RD_CompareProducts_CompareProductsResponse OK
     * @throws ApiError
     */
    public static async compareProductsRemoveProductFromCompareAndReload(
        productId: number,
    ): Promise<Webcom_API_RD_CompareProducts_CompareProductsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CompareProducts/RemoveProductFromCompareAndReload`,
            query: {
                'productId': productId,
            },
        });
        return result.body;
    }

    /**
     * Clears the product comparison selection.
     * @returns void
     * @throws ApiError
     */
    public static async compareProductsClearProductComparisonSelection(): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CompareProducts/ClearProductComparisonSelection`,
        });
        return result.body;
    }

}