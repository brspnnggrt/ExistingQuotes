/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_DataProtection_VM_DataProtectionLogVM } from '../models/Webcom_API_SetupSPA_DataProtection_VM_DataProtectionLogVM';
import { request as __request } from '../core/request';

export class DataProtectionLogService {

    /**
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_DataProtection_VM_DataProtectionLogVM> OK
     * @throws ApiError
     */
    public static async dataProtectionLogGetDataProtectionLog(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/dataProtectionLog`,
        });
        return result.body;
    }

}