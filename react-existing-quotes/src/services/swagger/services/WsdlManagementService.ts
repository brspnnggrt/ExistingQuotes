/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Wsdl_WsdlSettingsVM } from '../models/Webcom_API_SetupSPA_Wsdl_WsdlSettingsVM';
import type { Webcom_API_SetupSPA_WsdlManagement_VM_WsdlFileVM } from '../models/Webcom_API_SetupSPA_WsdlManagement_VM_WsdlFileVM';
import { request as __request } from '../core/request';

export class WsdlManagementService {

    /**
     * Gets the paged records of mapped WSDL settings.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Wsdl_WsdlSettingsVM> OK
     * @throws ApiError
     */
    public static async wsdlManagementGetPagedRecords(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/wsdlManagement`,
        });
        return result.body;
    }

    /**
     * Create new WSDL mapping, fails if there is already mapped url
     * @param wsdlSettings The WSDL settings.
     * @returns boolean OK
     * @throws ApiError
     */
    public static async wsdlManagementSave(
        wsdlSettings: Webcom_API_SetupSPA_Wsdl_WsdlSettingsVM,
    ): Promise<boolean> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/wsdlManagement`,
            body: wsdlSettings,
        });
        return result.body;
    }

    /**
     * Gets the mapped WSDL settings.
     * @param id The identifier.
     * @returns Webcom_API_SetupSPA_Wsdl_WsdlSettingsVM OK
     * @throws ApiError
     */
    public static async wsdlManagementGetWsdlSettings(
        id: number,
    ): Promise<Webcom_API_SetupSPA_Wsdl_WsdlSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/wsdlManagement/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes WSDL settings by id.
     * @param id The identifier.
     * @returns boolean OK
     * @throws ApiError
     */
    public static async wsdlManagementDelete(
        id: number,
    ): Promise<boolean> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/wsdlManagement/${id}`,
        });
        return result.body;
    }

    /**
     * Downloads WSDL file by settings id.
     * @param id The identifier.
     * @returns Webcom_API_SetupSPA_WsdlManagement_VM_WsdlFileVM OK
     * @throws ApiError
     */
    public static async wsdlManagementDownload(
        id: number,
    ): Promise<Webcom_API_SetupSPA_WsdlManagement_VM_WsdlFileVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/wsdlManagement/${id}/file`,
        });
        return result.body;
    }

}