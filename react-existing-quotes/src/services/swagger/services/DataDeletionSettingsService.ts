/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_DataDeletion_VM_DataDeletionSettingsVM } from '../models/Webcom_API_SetupSPA_DataDeletion_VM_DataDeletionSettingsVM';
import { request as __request } from '../core/request';

export class DataDeletionSettingsService {

    /**
     * Gets all data deletion settings
     * @returns Webcom_API_SetupSPA_DataDeletion_VM_DataDeletionSettingsVM OK
     * @throws ApiError
     */
    public static async dataDeletionSettingsGetDataDeletionSettings(): Promise<Webcom_API_SetupSPA_DataDeletion_VM_DataDeletionSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/dataDeletionSettings`,
        });
        return result.body;
    }

    /**
     * Saves defined data deletion settings
     * @param dataDeletionSettings Data deletion settings
     * @returns void
     * @throws ApiError
     */
    public static async dataDeletionSettingsSaveDataDeletionSettings(
        dataDeletionSettings: Webcom_API_SetupSPA_DataDeletion_VM_DataDeletionSettingsVM,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/dataDeletionSettings`,
            body: dataDeletionSettings,
        });
        return result.body;
    }

    /**
     * Gets quote lookups
     * @param query
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async dataDeletionSettingsGetQuoteLookups(
        query?: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/dataDeletionSettings/quote`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

}