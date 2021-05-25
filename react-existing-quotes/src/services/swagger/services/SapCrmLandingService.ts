/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Landing_QuoteRedirectResponse } from '../models/Webcom_API_RD_Landing_QuoteRedirectResponse';
import { request as __request } from '../core/request';

export class SapCrmLandingService {

    /**
     * @param quoteId
     * @param opportunityId
     * @param accountId
     * @param destination
     * @param categoryId
     * @param productId
     * @param info
     * @returns Webcom_API_RD_Landing_QuoteRedirectResponse OK
     * @throws ApiError
     */
    public static async sapCrmLandingProceedToQuote(
        quoteId: string,
        opportunityId: string,
        accountId: string,
        destination: string,
        categoryId: string,
        productId: string,
        info: number,
    ): Promise<Webcom_API_RD_Landing_QuoteRedirectResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/SapCRMLanding/ProceedToQuote`,
            query: {
                'quoteId': quoteId,
                'opportunityId': opportunityId,
                'accountId': accountId,
                'destination': destination,
                'categoryId': categoryId,
                'productId': productId,
                'info': info,
            },
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_RD_Landing_QuoteRedirectResponse OK
     * @throws ApiError
     */
    public static async sapCrmLandingCheckLogin(): Promise<Webcom_API_RD_Landing_QuoteRedirectResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/SapCRMLanding/CheckLogin`,
        });
        return result.body;
    }

}