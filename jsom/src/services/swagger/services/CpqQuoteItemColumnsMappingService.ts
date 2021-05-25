/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_Providers_CLM_ClmQuoteItemColumnMapping } from '../models/Webcom_API_Admin_Providers_CLM_ClmQuoteItemColumnMapping';
import { request as __request } from '../core/request';

export class CpqQuoteItemColumnsMappingService {

    /**
     * @param templateId
     * @returns any OK
     * @throws ApiError
     */
    public static async cpqQuoteItemColumnsMappingGetData(
        templateId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/CpqQuoteItemColumnsMapping/GetData`,
            query: {
                'templateId': templateId,
            },
        });
        return result.body;
    }

    /**
     * @param quoteItemColumnMapping
     * @returns any OK
     * @throws ApiError
     */
    public static async cpqQuoteItemColumnsMappingSaveMapping(
        quoteItemColumnMapping: Webcom_API_Admin_Providers_CLM_ClmQuoteItemColumnMapping,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/CpqQuoteItemColumnsMapping/SaveMapping`,
            body: quoteItemColumnMapping,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async cpqQuoteItemColumnsMappingGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/CpqQuoteItemColumnsMapping/GenerateSecretKey`,
        });
        return result.body;
    }

}