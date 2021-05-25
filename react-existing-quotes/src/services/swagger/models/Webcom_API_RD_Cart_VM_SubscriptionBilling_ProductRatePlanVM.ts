/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_SubscriptionBilling_BaseChargeVM } from './Webcom_API_RD_Cart_VM_SubscriptionBilling_BaseChargeVM';

export type Webcom_API_RD_Cart_VM_SubscriptionBilling_ProductRatePlanVM = {
    /**
     * Gets or sets the CurrencySign for Rateplan
     */
    CurrencySign?: string;
    /**
     * Gets or sets the ContractTermLength for Rateplan
     */
    ContractTermLength?: number;
    /**
     * Gets or sets the MinimumContractTermLength for Rateplan
     */
    MinimumContractTermLength?: number;
    /**
     * Gets or sets Charges in RatePlan for certain product
     */
    Charges?: Array<Webcom_API_RD_Cart_VM_SubscriptionBilling_BaseChargeVM>;
}
