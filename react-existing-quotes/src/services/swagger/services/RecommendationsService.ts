/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Cart_AddProductRequestVM } from '../models/Webcom_API_RD_Cart_AddProductRequestVM';
import type { Webcom_API_RD_Cart_AddProductResponseVM } from '../models/Webcom_API_RD_Cart_AddProductResponseVM';
import type { Webcom_API_RD_Cart_ChangeDiscountRequestVM } from '../models/Webcom_API_RD_Cart_ChangeDiscountRequestVM';
import type { Webcom_API_RD_Cart_ChangeDiscountResponseVM } from '../models/Webcom_API_RD_Cart_ChangeDiscountResponseVM';
import type { Webcom_API_RD_Cart_RecommendationsResponse } from '../models/Webcom_API_RD_Cart_RecommendationsResponse';
import type { Webcom_Configurator_Predictive_DeclineRecommendationItem } from '../models/Webcom_Configurator_Predictive_DeclineRecommendationItem';
import { request as __request } from '../core/request';

export class RecommendationsService {

    /**
     * @param isInDisplayMode
     * @returns Webcom_API_RD_Cart_RecommendationsResponse OK
     * @throws ApiError
     */
    public static async recommendationsGetData(
        isInDisplayMode: boolean,
    ): Promise<Webcom_API_RD_Cart_RecommendationsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Recommendations/GetData`,
            query: {
                'isInDisplayMode': isInDisplayMode,
            },
        });
        return result.body;
    }

    /**
     * @param item
     * @returns void
     * @throws ApiError
     */
    public static async recommendationsDecline(
        item: Webcom_Configurator_Predictive_DeclineRecommendationItem,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Recommendations/Decline`,
            body: item,
        });
        return result.body;
    }

    /**
     * @param changeDiscountRequest
     * @returns Webcom_API_RD_Cart_ChangeDiscountResponseVM OK
     * @throws ApiError
     */
    public static async recommendationsChangeDiscount(
        changeDiscountRequest: Webcom_API_RD_Cart_ChangeDiscountRequestVM,
    ): Promise<Webcom_API_RD_Cart_ChangeDiscountResponseVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Recommendations/ChangeDiscount`,
            body: changeDiscountRequest,
        });
        return result.body;
    }

    /**
     * @param addProductRequest
     * @returns Webcom_API_RD_Cart_AddProductResponseVM OK
     * @throws ApiError
     */
    public static async recommendationsAddProduct(
        addProductRequest: Webcom_API_RD_Cart_AddProductRequestVM,
    ): Promise<Webcom_API_RD_Cart_AddProductResponseVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Recommendations/AddProduct`,
            body: addProductRequest,
        });
        return result.body;
    }

}