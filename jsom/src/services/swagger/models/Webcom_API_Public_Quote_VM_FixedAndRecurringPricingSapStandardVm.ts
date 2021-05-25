/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_VM_PricingDetailsSapStandardVm } from './Webcom_API_Public_Quote_VM_PricingDetailsSapStandardVm';

/**
 * Composition of fixed and recurring pricing details
 */
export type Webcom_API_Public_Quote_VM_FixedAndRecurringPricingSapStandardVm = {
    /**
     * Get or set Fixed pricing
     */
    Fixed?: Webcom_API_Public_Quote_VM_PricingDetailsSapStandardVm;
    /**
     * Get or set Recurring pricing
     */
    Recurring?: Webcom_API_Public_Quote_VM_PricingDetailsSapStandardVm;
}
