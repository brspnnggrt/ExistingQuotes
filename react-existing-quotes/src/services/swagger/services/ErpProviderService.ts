/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ErpProviderService {

    /**
     * Save ERPProviderConnectedParam.
     * @param isConnected New value
     * @returns void
     * @throws ApiError
     */
    public static async erpProviderSaveErpProviderConnectedParam(
        isConnected: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/erpProvider/${isConnected}`,
        });
        return result.body;
    }

    /**
     * ErpProvider Connected Param
     * @returns boolean OK
     * @throws ApiError
     */
    public static async erpProviderGetErpProviderConnectedParam(): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/erpProvider`,
        });
        return result.body;
    }

}