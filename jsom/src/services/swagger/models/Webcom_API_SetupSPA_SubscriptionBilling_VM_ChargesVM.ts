/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_BillingVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_BillingVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_MetricVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_MetricVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_PriceModelVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_PriceModelVM';

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_ChargesVM = {
    Id?: string;
    ChargeType?: string;
    RatingType?: string;
    Metric?: Webcom_API_SetupSPA_SubscriptionBilling_VM_MetricVM;
    Billing?: Webcom_API_SetupSPA_SubscriptionBilling_VM_BillingVM;
    CustomAmountCode?: string;
    PriceModel?: Webcom_API_SetupSPA_SubscriptionBilling_VM_PriceModelVM;
}
