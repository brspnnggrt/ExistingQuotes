/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Providers_SB_VM_SBProviderDetailsVM } from '../models/Webcom_API_SetupSPA_Providers_SB_VM_SBProviderDetailsVM';
import { request as __request } from '../core/request';

export class SbProviderService {

    /**
     * Web API GET - get details about SAP SB Subscription Billing Provider parameters
     * @returns Webcom_API_SetupSPA_Providers_SB_VM_SBProviderDetailsVM OK
     * @throws ApiError
     */
    public static async sbProviderGetProviderDetails(): Promise<Webcom_API_SetupSPA_Providers_SB_VM_SBProviderDetailsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/sbprovider`,
        });
        return result.body;
    }

    /**
     * Web API POST - set parameters through JSON file
     * @param sbDetails
     * @returns any OK
     * @throws ApiError
     */
    public static async sbProviderPostProviderDetails(
        sbDetails: Webcom_API_SetupSPA_Providers_SB_VM_SBProviderDetailsVM,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/sbprovider/save`,
            body: sbDetails,
        });
        return result.body;
    }

    /**
     * Web API PATCH - sets if the integration SAP Subscription Billing is enabled or disabled
     * @param state enable/disable
     * @returns any OK
     * @throws ApiError
     */
    public static async sbProviderPatchEnableIntegration(
        state: boolean,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/setup/api/v1/admin/sbprovider/integrationEnabled/${state}`,
        });
        return result.body;
    }

}