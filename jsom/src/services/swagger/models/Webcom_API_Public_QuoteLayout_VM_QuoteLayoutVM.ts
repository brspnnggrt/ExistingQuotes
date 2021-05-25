/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemPermissionVM } from './Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemPermissionVM';

/**
 * Quote layout view-model
 */
export type Webcom_API_Public_QuoteLayout_VM_QuoteLayoutVM = {
    /**
     * Quote layout item ids
     */
    QuoteLayoutItemIds?: Array<number>;
    /**
     * List of PermissionId/QuoteLayoutItemId pairs
     */
    QuoteLayoutItemPermissions?: Array<Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemPermissionVM>;
}
