/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingQuoteFieldVM } from './Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingQuoteFieldVM';

/**
 * Pricing procedure condition mapping
 */
export type Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM = {
    /**
     * Id.
     */
    Id?: number;
    /**
     * Condition step.
     */
    Step: number;
    /**
     * Pricing condition.
     */
    PricingCondition?: string;
    /**
     * Name.
     */
    Name: string;
    /**
     * Product type.
     */
    VCProductType?: string;
    /**
     * Pricing frequency.
     */
    PricingFrequency?: string;
    /**
     * Rate/Value.
     */
    RateValue: string;
    /**
     * Quote item field.
     */
    QuoteItemField?: Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingQuoteFieldVM;
    /**
     * Quote header field.
     */
    QuoteHeaderField?: Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingQuoteFieldVM;
}
