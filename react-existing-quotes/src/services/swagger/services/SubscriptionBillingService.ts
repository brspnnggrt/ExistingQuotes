/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_MarketRatePlanVM } from '../models/Webcom_API_SetupSPA_SubscriptionBilling_VM_MarketRatePlanVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM } from '../models/Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM } from '../models/Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM';
import { request as __request } from '../core/request';

export class SubscriptionBillingService {

    /**
     * Gets filtered, paged and sorted products with total number of products
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM> OK
     * @throws ApiError
     */
    public static async subscriptionBillingGetRatePlanTemplates(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/subscriptionBilling/ratePlanTemplates`,
        });
        return result.body;
    }

    /**
     * Gets rate plan template details
     * @param uuid
     * @returns Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM OK
     * @throws ApiError
     */
    public static async subscriptionBillingGetRatePlanTemplateDetails(
        uuid: string,
    ): Promise<Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/subscriptionBilling/ratePlanTemplate/${uuid}`,
        });
        return result.body;
    }

    /**
     * Gets rate plan details for product
     * @param productId
     * @returns Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM OK
     * @throws ApiError
     */
    public static async subscriptionBillingGetRatePlanTemplate(
        productId: number,
    ): Promise<Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/subscriptionBilling/ratePlanTemplateByProduct/${productId}`,
        });
        return result.body;
    }

    /**
     * Gets rate plan details
     * @param productId
     * @param marketId
     * @returns Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM OK
     * @throws ApiError
     */
    public static async subscriptionBillingGetRatePlan(
        productId: number,
        marketId: number,
    ): Promise<Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/subscriptionBilling/ratePlan/${productId}/${marketId}`,
        });
        return result.body;
    }

    /**
     * Gets the market rate plans.
     * @param productId The product identifier.
     * @returns Webcom_API_SetupSPA_SubscriptionBilling_VM_MarketRatePlanVM OK
     * @throws ApiError
     */
    public static async subscriptionBillingGetMarketRatePlans(
        productId: number,
    ): Promise<Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_MarketRatePlanVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/subscriptionBilling/ratePlans/${productId}`,
        });
        return result.body;
    }

}