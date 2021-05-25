/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Pricebook_VM_PricebookRowVM } from '../models/Webcom_API_SetupSPA_Pricebook_VM_PricebookRowVM';
import { request as __request } from '../core/request';

export class PricebookService {

    /**
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Pricebook_VM_PricebookRowVM> OK
     * @throws ApiError
     */
    public static async pricebookGetPricebookLookups(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/pricebook/lookup`,
        });
        return result.body;
    }

    /**
     * @param rows
     * @returns void
     * @throws ApiError
     */
    public static async pricebookSavePricebookLookups(
        rows: Array<Webcom_API_SetupSPA_Pricebook_VM_PricebookRowVM>,
    ): Promise<void> {
        const result = await __request({
            method: 'PUT',
            path: `/setup/api/v1/admin/pricebook/lookup`,
            body: rows,
        });
        return result.body;
    }

}