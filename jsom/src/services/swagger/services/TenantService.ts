/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Tenant_VM_SystemDictionariesVM } from '../models/Webcom_API_SetupSPA_Tenant_VM_SystemDictionariesVM';
import type { Webcom_API_SetupSPA_Tenant_VM_TenantVM } from '../models/Webcom_API_SetupSPA_Tenant_VM_TenantVM';
import { request as __request } from '../core/request';

export class TenantService {

    /**
     * Gets infor about tenant settings
     * @returns Webcom_API_SetupSPA_Tenant_VM_TenantVM OK
     * @throws ApiError
     */
    public static async tenantGetTenantInfo(): Promise<Webcom_API_SetupSPA_Tenant_VM_TenantVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/tenant`,
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_SetupSPA_Tenant_VM_SystemDictionariesVM OK
     * @throws ApiError
     */
    public static async tenantGetDictionariesForDomain(): Promise<Webcom_API_SetupSPA_Tenant_VM_SystemDictionariesVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/tenant/systemDictionaries`,
        });
        return result.body;
    }

    /**
     * Gets time zones
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async tenantGetTimeZones(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/tenant/timezones`,
        });
        return result.body;
    }

}