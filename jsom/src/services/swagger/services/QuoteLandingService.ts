/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Landing_QuoteRedirectResponse } from '../models/Webcom_API_RD_Landing_QuoteRedirectResponse';
import { request as __request } from '../core/request';

export class QuoteLandingService {

    /**
     * @param quoteNumber
     * @returns Webcom_API_RD_Landing_QuoteRedirectResponse OK
     * @throws ApiError
     */
    public static async quoteLandingGuestView(
        quoteNumber: string,
    ): Promise<Webcom_API_RD_Landing_QuoteRedirectResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/QuoteLanding/GuestView`,
            query: {
                'quoteNumber': quoteNumber,
            },
        });
        return result.body;
    }

}