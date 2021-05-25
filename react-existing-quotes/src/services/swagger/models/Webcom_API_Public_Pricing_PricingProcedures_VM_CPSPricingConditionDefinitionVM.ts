/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CPS pricing procedure condition definition.
 */
export type Webcom_API_Public_Pricing_PricingProcedures_VM_CPSPricingConditionDefinitionVM = {
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
     * Calculation type.
     */
    CalculationType?: string;
    /**
     * Pricing frequency.
     */
    PricingFrequency: string;
    /**
     * Product type.
     */
    VCProductType: string;
    /**
     * Manual entry flag.
     */
    ManualEntryFlag?: string;
    /**
     * Condition class.
     */
    ConditionClass?: string;
    /**
     * Sign.
     */
    Sign?: string;
    /**
     * Change of rate allowed.
     */
    ChangeOfRateAllowed?: boolean;
    /**
     * Change of value allowed.
     */
    ChangeOfValueAllowed?: boolean;
    /**
     * Is header condition.
     */
    IsHeaderCondition?: boolean;
    /**
     * Is item condition.
     */
    IsItemCondition?: boolean;
    /**
     * Is group condition.
     */
    IsGroupCondition?: boolean;
    /**
     * Data source.
     */
    DataSource?: string;
    /**
     * Mandatory flag.
     */
    Mandatory?: boolean;
}
