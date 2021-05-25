/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM';
import type { Webcom_API_SetupSPA_SubscriptionBilling_VM_SnapshotVM } from './Webcom_API_SetupSPA_SubscriptionBilling_VM_SnapshotVM';

/**
 * RatePlan view model extented from SB RatePlan
 */
export type Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanVM = {
    /**
     * RatePlanTemplate for this RatePlan
     */
    RatePlanTemplate?: Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanTemplateVM;
    /**
     * RatePlan ID
     */
    Id?: string;
    /**
     * RatePlan Code
     */
    Code?: string;
    /**
     * RatePlan Description
     */
    Description?: string;
    /**
     * List of Snapshots
     */
    Snapshots?: Array<Webcom_API_SetupSPA_SubscriptionBilling_VM_SnapshotVM>;
    /**
     * List of Tags
     */
    Tags?: Array<string>;
    /**
     * Gets or sets the market id.
     */
    MarketId?: number;
    /**
     * Gets or sets the market code.
     */
    MarketCode?: string;
}
