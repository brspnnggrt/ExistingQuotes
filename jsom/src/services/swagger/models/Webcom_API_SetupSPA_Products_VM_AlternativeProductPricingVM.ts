/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_SetupSPA_Products_VM_AlternativeProductPricingVM = {
    PricingType?: Webcom_API_SetupSPA_Products_VM_AlternativeProductPricingVM.PricingType;
    Price?: number;
    CostBuilder?: string;
    RecurringCostFormula?: string;
    PriceBuilder?: string;
    BaseRecurringPrice?: number;
    RecurringPriceFormula?: string;
    PricingCode?: string;
    RecurringPricePeriodFormula?: string;
    RecurringCostPeriodFormula?: string;
}

export namespace Webcom_API_SetupSPA_Products_VM_AlternativeProductPricingVM {

    export enum PricingType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }


}
