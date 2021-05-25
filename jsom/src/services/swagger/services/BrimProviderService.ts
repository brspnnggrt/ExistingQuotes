/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Providers_BRIM_VM_BrimContractDurationParametersVM } from '../models/Webcom_API_SetupSPA_Providers_BRIM_VM_BrimContractDurationParametersVM';
import { request as __request } from '../core/request';

export class BrimProviderService {

    /**
     * Save BRIM Provider Connected Param
     * @param isConnected IsConnected
     * @returns void
     * @throws ApiError
     */
    public static async brimProviderSaveBrimProviderConnectedParameter(
        isConnected: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/brimProvider/${isConnected}`,
        });
        return result.body;
    }

    /**
     * Get BRIM Provider Connected Parameter
     * @returns boolean OK
     * @throws ApiError
     */
    public static async brimProviderGetBrimProviderConnectedParameter(): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/brimProvider`,
        });
        return result.body;
    }

    /**
     * Get Contract Duration Default Parameters
     * @returns Webcom_API_SetupSPA_Providers_BRIM_VM_BrimContractDurationParametersVM OK
     * @throws ApiError
     */
    public static async brimProviderGetContractDurationDefaultParameters(): Promise<Webcom_API_SetupSPA_Providers_BRIM_VM_BrimContractDurationParametersVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/brimProvider/parameters`,
        });
        return result.body;
    }

    /**
     * Save Contract Duration Default Parameters
     * @param contractDurationParameters
     * @returns void
     * @throws ApiError
     */
    public static async brimProviderSaveContractDurationDefaultParameters(
        contractDurationParameters: Webcom_API_SetupSPA_Providers_BRIM_VM_BrimContractDurationParametersVM,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/brimProvider/parameters`,
            body: contractDurationParameters,
        });
        return result.body;
    }

}