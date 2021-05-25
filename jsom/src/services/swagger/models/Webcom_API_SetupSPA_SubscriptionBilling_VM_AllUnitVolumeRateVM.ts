/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeTierVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeTierVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_MinimumBlocksParameterVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_MinimumBlocksParameterVM';

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeRateVM = {
    Id?: string;
    Tiers?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeTierVM>;
    BlockSize?: Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockSizeParameterVM;
    MinimumBlocks?: Webcom_API_SetupSPA_SubscriptionBilling_VM_MinimumBlocksParameterVM;
}
