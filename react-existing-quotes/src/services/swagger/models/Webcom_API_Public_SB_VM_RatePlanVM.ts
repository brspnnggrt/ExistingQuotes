/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_SB_VM_SnapshotVM } from './Webcom_API_Public_SB_VM_SnapshotVM';

export type Webcom_API_Public_SB_VM_RatePlanVM = {
    Id?: string;
    Code?: string;
    Description?: string;
    RatePlanTemplateId?: string;
    Snapshots?: Array<Webcom_API_Public_SB_VM_SnapshotVM>;
}
