/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_PricingParameterVM } from './Webcom_API_Public_Quote_PricingParameterVM';

/**
 * Subcription pricing data
 */
export type Webcom_API_Public_Quote_SubscriptionPricingVM = {
    /**
     * Get or set Rate Plan Snapshot Effective Date
     */
    RatePlanSnapshotEffectiveDate?: string;
    /**
     * Get or set Pricing Parameters
     */
    PricingParameters?: Array<Webcom_API_Public_Quote_PricingParameterVM>;
}
