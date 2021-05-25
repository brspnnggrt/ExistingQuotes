/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM } from '../models/Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM';
import { request as __request } from '../core/request';

export class QuoteToOrderConditionMappingsService {

    /**
     * Get the pricing procedure conditions.
     * @param pricingProcedureId The unique identifier for the pricing procedure.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM OK
     * @throws ApiError
     */
    public static async quoteToOrderConditionMappingsGetPricingProcedureConditions(
        pricingProcedureId: number,
    ): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/quoteToOrderConditionMappings/procedures/${pricingProcedureId}/conditionMappings`,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                404: `Requested pricing procedure is not found.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Set pricing procedure conditions.
     * @param pricingProcedureId The unique identifier for the pricing procedure.
     * @param pricingProcedureConditions Pricing procedure conditions.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM OK
     * @throws ApiError
     */
    public static async quoteToOrderConditionMappingsUpsertPricingProcedureConditions(
        pricingProcedureId: number,
        pricingProcedureConditions: Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM>,
    ): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureConditionMappingVM>> {
        const result = await __request({
            method: 'PUT',
            path: `/api/pricingProcedure/v1/quoteToOrderConditionMappings/procedures/${pricingProcedureId}/conditionMappings`,
            body: pricingProcedureConditions,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                404: `Requested pricing procedure is not found.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

}