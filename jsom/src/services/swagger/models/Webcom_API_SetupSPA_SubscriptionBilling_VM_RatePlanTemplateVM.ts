/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_ChargesVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_ChargesVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_CurrencyParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_CurrencyParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_PeriodicityParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_PeriodicityParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_PossibleMarketVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_PossibleMarketVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_SubscriptionParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_SubscriptionParameterVM';

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM = {
    Id?: string;
    Number?: number;
    Description?: string;
    Parameters?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateParameterVM>;
    Tags?: Array<string>;
    Currency?: Webcom_API_SetupSPA_SubscriptionBilling_VM_CurrencyParameterVM;
    Periodicity?: Webcom_API_SetupSPA_SubscriptionBilling_VM_PeriodicityParameterVM;
    Charges?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_ChargesVM>;
    PossibleMarkets?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_PossibleMarketVM>;
    MarketCurrencyMapping?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    SubscriptionParameters?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_SubscriptionParameterVM>;
    PercentageOperationLookups?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
}
