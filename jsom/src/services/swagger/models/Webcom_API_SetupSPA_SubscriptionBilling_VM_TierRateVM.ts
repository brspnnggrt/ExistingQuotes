/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_MinimumBlocksParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_MinimumBlocksParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_TierVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_TierVM';

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_TierRateVM = {
    Id?: string;
    BlockSize?: Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM;
    MinimumBlocks?: Webcom_API_SetupSPA_SubscriptionBilling_VM_MinimumBlocksParameterVM;
    Tiers?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_TierVM>;
}
