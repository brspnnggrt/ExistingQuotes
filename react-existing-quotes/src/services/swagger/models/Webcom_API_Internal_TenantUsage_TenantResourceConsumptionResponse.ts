/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Internal_TenantUsage_UserActivityResponse } from './Webcom_API_Internal_TenantUsage_UserActivityResponse';
import type { Webcom_API_Internal_TenantUsage_VM_ResourceConsumptionVM } from './Webcom_API_Internal_TenantUsage_VM_ResourceConsumptionVM';
import type { Webcom_API_Internal_TenantUsage_VM_TenantHistoricalDataVM } from './Webcom_API_Internal_TenantUsage_VM_TenantHistoricalDataVM';

/**
 * Class TenantResourceConsumptionResponse
 */
export type Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse = {
    /**
     * Gets or sets the number of active users.
     */
    NumberOfActiveUsers?: number;
    /**
     * Gets or sets the number of unused users.
     */
    NumberOfUnusedUsers?: number;
    /**
     * Gets or sets the resource consumption.
     */
    ResourceConsumption?: Webcom_API_Internal_TenantUsage_VM_ResourceConsumptionVM;
    /**
     * Gets or sets the user activity response.
     */
    UserActivityResponse?: Webcom_API_Internal_TenantUsage_UserActivityResponse;
    /**
     * Gets or sets the tenant historical data.
     */
    TenantHistoricalData?: Array<Webcom_API_Internal_TenantUsage_VM_TenantHistoricalDataVM>;
}
