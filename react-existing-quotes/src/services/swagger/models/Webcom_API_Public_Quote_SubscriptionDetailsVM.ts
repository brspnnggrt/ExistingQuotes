/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_SubscriptionParameterVM } from './Webcom_API_Public_Quote_SubscriptionParameterVM';
import type { Webcom_API_Public_Quote_SubscriptionPricingVM } from './Webcom_API_Public_Quote_SubscriptionPricingVM';

/**
 * Subscription details data
 */
export type Webcom_API_Public_Quote_SubscriptionDetailsVM = {
    /**
     * Get or set Effective Date
     */
    EffectiveDate?: string;
    /**
     * Get or set Rate Plan ID
     */
    RatePlanId?: string;
    /**
     * Get or set Contract Start Date
     */
    ContractStartDate?: string;
    /**
     * Get or set Contract End Date
     */
    ContractEndDate?: string;
    /**
     * Get or set Contract Length
     */
    ContractLength?: string;
    /**
     * Get or set Minimum Contract End Date
     */
    MinimumContractEndDate?: string;
    /**
     * Get or set Minimum Contract Length
     */
    MinimumContractLength?: string;
    /**
     * Get or set Subscription Parameters
     */
    SubscriptionParameters?: Array<Webcom_API_Public_Quote_SubscriptionParameterVM>;
    /**
     * Get or set
     */
    Pricing?: Webcom_API_Public_Quote_SubscriptionPricingVM;
}
