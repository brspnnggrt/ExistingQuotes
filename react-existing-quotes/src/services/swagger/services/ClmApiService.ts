/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Clm_ClmMappingsResponse } from '../models/Webcom_API_Public_Clm_ClmMappingsResponse';
import type { Webcom_API_Public_Clm_QuoteCommentResponse } from '../models/Webcom_API_Public_Clm_QuoteCommentResponse';
import { request as __request } from '../core/request';

export class ClmApiService {

    /**
     * Gets the CLM to CPQ mappings.
     * @param contractType Type of the contract.
     * @returns Webcom_API_Public_Clm_ClmMappingsResponse OK
     * @throws ApiError
     */
    public static async clmApiGetClmToCpqMappings(
        contractType: string,
    ): Promise<Webcom_API_Public_Clm_ClmMappingsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/ClmApi/GetClmToCpqMappings`,
            query: {
                'contractType': contractType,
            },
        });
        return result.body;
    }

    /**
     * @param cartCompositeNumber
     * @param cartRevisionNumber
     * @returns Webcom_API_Public_Clm_QuoteCommentResponse OK
     * @throws ApiError
     */
    public static async clmApiGetQuoteComments(
        cartCompositeNumber: string,
        cartRevisionNumber?: number,
    ): Promise<Webcom_API_Public_Clm_QuoteCommentResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/ClmApi/GetQuoteComments`,
            query: {
                'cartCompositeNumber': cartCompositeNumber,
                'cartRevisionNumber': cartRevisionNumber,
            },
        });
        return result.body;
    }

    /**
     * @param contractTypeId
     * @param clmStatusId
     * @returns any OK
     * @throws ApiError
     */
    public static async clmApiCheckIfMappingExists(
        contractTypeId: number,
        clmStatusId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/ClmApi/CheckIfMappingExists`,
            query: {
                'contractTypeId': contractTypeId,
                'clmStatusId': clmStatusId,
            },
        });
        return result.body;
    }

}