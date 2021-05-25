/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Quote_QuoteVM } from '../models/Webcom_API_Public_Quote_QuoteVM';
import { request as __request } from '../core/request';

export class QuoteService {

    /**
     * Gets data for the active revision of a quote given by quote number or quote ID.
     * This API is only supported for Subscription Billing integration scenario and should not be used for any other purpose.
     * @param quoteNumber Quote composite number.
     * @param quoteId Quote ID.
     * @param includeTables Indicates whether quote tables should be included in response. True by default.
     * @param includeCustomers Indicates whether customers should be included in response. True by default.
     * @returns Webcom_API_Public_Quote_QuoteVM Quote payload.
     * @throws ApiError
     */
    public static async quoteGet(
        quoteNumber?: string,
        quoteId?: number,
        includeTables?: boolean,
        includeCustomers?: boolean,
    ): Promise<Webcom_API_Public_Quote_QuoteVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/Quote/Get`,
            query: {
                'quoteNumber': quoteNumber,
                'quoteId': quoteId,
                'includeTables': includeTables,
                'includeCustomers': includeCustomers,
            },
        });
        return result.body;
    }

}