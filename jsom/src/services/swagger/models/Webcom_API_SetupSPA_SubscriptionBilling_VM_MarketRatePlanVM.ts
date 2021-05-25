/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM';

/**
 * VM that contains RatePlan mapping and MarketId
 */
export type Webcom_API_SetupSPA_SubscriptionBilling_VM_MarketRatePlanVM = {
    /**
     * Market for selected rate plan
     */
    MarketId?: number;
    /**
     * MarketCode for selected rate plan
     */
    MarketCode?: string;
    /**
     * Rate plan VM mapping
     */
    RatePlan?: Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM;
}
