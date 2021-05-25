/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_SegregationOfDuties_VM_SetupLinksVisibilityVM } from '../models/Webcom_API_RD_SegregationOfDuties_VM_SetupLinksVisibilityVM';
import { request as __request } from '../core/request';

export class SegregationOfDutiesRdService {

    /**
     * Get visibility info for setup links on user side
     * @returns Webcom_API_RD_SegregationOfDuties_VM_SetupLinksVisibilityVM OK
     * @throws ApiError
     */
    public static async segregationOfDutiesRdGetSetupLinksVisibility(): Promise<Webcom_API_RD_SegregationOfDuties_VM_SetupLinksVisibilityVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/SegregationOfDutiesRD/GetSetupLinksVisibility`,
        });
        return result.body;
    }

}