/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_PageRecommendation_VM_PageRecommendationVM } from '../models/Webcom_API_SetupSPA_PageRecommendation_VM_PageRecommendationVM';
import { request as __request } from '../core/request';

export class PageRecommendationService {

    /**
     * Gets filtered, paged and sorted recommended pages with total number of pages.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_PageRecommendation_VM_PageRecommendationVM> OK
     * @throws ApiError
     */
    public static async pageRecommendationGetAllPages(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/pageRecommendations`,
        });
        return result.body;
    }

    /**
     * Gets landing page name based on User Type.
     * @param startPage
     * @param landingProductSystemId
     * @returns string OK
     * @throws ApiError
     */
    public static async pageRecommendationGetLandingPageName(
        startPage: string,
        landingProductSystemId: string,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/pageRecommendations/pages`,
            query: {
                'startPage': startPage,
                'landingProductSystemId': landingProductSystemId,
            },
        });
        return result.body;
    }

}