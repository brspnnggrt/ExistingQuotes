/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Common_Models_PagerVM } from './Webcom_API_Common_Models_PagerVM';
import type { Webcom_API_Internal_TenantUsage_VM_BusinessPerformanceVM } from './Webcom_API_Internal_TenantUsage_VM_BusinessPerformanceVM';
import type { Webcom_API_Internal_TenantUsage_VM_TotalVM } from './Webcom_API_Internal_TenantUsage_VM_TotalVM';
import type { Webcom_API_NameValuePair } from './Webcom_API_NameValuePair';

/**
 * BusinessPerformanceResponse
 */
export type Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse = {
    /**
     * Gets or sets the total quotes.
     */
    TotalQuotes?: number;
    /**
     * Gets or sets the sort method.
     */
    SortMethod?: string;
    /**
     * Gets or sets the totals.
     */
    Totals?: Array<Webcom_API_Internal_TenantUsage_VM_TotalVM>;
    /**
     * Gets or sets the columns list.
     */
    ColumnsList?: Array<Webcom_API_NameValuePair>;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_Common_Models_PagerVM;
    /**
     * Gets or sets the business performance per user.
     */
    BusinessPerformancePerUser?: Array<Webcom_API_Internal_TenantUsage_VM_BusinessPerformanceVM>;
}
