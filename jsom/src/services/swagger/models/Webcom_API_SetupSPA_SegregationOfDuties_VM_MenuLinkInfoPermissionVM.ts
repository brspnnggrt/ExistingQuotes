/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationOfDutiesPermissionVM } from './Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationOfDutiesPermissionVM';

/**
 * Contains information which <seealso cref= /> is allwed for requested permission group
 */
export type Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoPermissionVM = {
    /**
     * Menu Link Info Id
     */
    Id?: number;
    /**
     * Is it read only for group
     */
    ReadOnly?: boolean;
    /**
     * Are all related children visible
     */
    VisibleAll?: boolean;
    /**
     * SubItems permissions
     */
    Children?: Array<Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationOfDutiesPermissionVM>;
}
