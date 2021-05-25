/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_PricingDetailsVM } from './Webcom_API_Public_Quote_PricingDetailsVM';

/**
 * Composition of fixed and recurring pricing details
 */
export type Webcom_API_Public_Quote_FixedAndRecurringPricingVM = {
    /**
     * Get or set Fixed pricing
     */
    Fixed?: Webcom_API_Public_Quote_PricingDetailsVM;
    /**
     * Get or set Recurring pricing
     */
    Recurring?: Webcom_API_Public_Quote_PricingDetailsVM;
}
