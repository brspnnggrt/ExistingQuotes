/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_MathCellVM } from './Webcom_API_RD_Cart_MathCellVM';

export type Webcom_API_RD_Cart_VM_SubscriptionBilling_BaseChargeVM = {
    /**
     * Gets or sets identifier
     */
    Id?: number;
    /**
     * Gets or sets the Charges Type
     */
    Type?: string;
    /**
     * Gets or sets RatePlanElement
     */
    RatePlanElement?: string;
    /**
     * Gets or sets value of subscription parameter
     */
    ValueOfSubscriptionParameter?: Webcom_API_RD_Cart_MathCellVM;
}
