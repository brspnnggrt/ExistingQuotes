/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeRateVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeRateVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockRateVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockRateVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_FixedFeeVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_FixedFeeVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_FixedRateVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_FixedRateVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_PercentageRateVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_PercentageRateVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_TierRateVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_TierRateVM';

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_PriceModelVM = {
    FixedRate?: Webcom_API_SetupSPA_SubscriptionBilling_VM_FixedRateVM;
    FixedFee?: Webcom_API_SetupSPA_SubscriptionBilling_VM_FixedFeeVM;
    BlockRate?: Webcom_API_SetupSPA_SubscriptionBilling_VM_BlockRateVM;
    AllUnitVolumeRate?: Webcom_API_SetupSPA_SubscriptionBilling_VM_AllUnitVolumeRateVM;
    TierRate?: Webcom_API_SetupSPA_SubscriptionBilling_VM_TierRateVM;
    PercentageRate?: Webcom_API_SetupSPA_SubscriptionBilling_VM_PercentageRateVM;
}
