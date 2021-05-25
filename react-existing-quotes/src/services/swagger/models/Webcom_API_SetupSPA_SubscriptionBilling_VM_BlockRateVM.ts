/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_AmountParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_AmountParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_IncludedQuantityParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_IncludedQuantityParameterVM';

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockRateVM = {
    Id?: string;
    IncludedQuantity?: Webcom_API_SetupSPA_SubscriptionBilling_VM_IncludedQuantityParameterVM;
    BlockSize?: Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM;
    PricePerBlock?: Webcom_API_SetupSPA_SubscriptionBilling_VM_AmountParameterVM;
}
