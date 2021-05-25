/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Pricing_PricingProcedures_VM_CPSPricingConditionDefinitionVM } from '../models/Webcom_API_Public_Pricing_PricingProcedures_VM_CPSPricingConditionDefinitionVM';
import type { Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM } from '../models/Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM';
import { request as __request } from '../core/request';

export class ErpPricingProceduresService {

    /**
     * Get pricing procedures from back-end system.
     * Get a list of all the pricing procedures from back-end system which are not already mapped in SAP CPQ.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM OK
     * @throws ApiError
     */
    public static async erpPricingProceduresGetPricingProceduresFromCps(): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/erpProcedures`,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                500: `An error occurred in communication with SAP Variant Configuration and Pricing, or a server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Get a list of possible pricing conditions for a pricing procedure from back-end system.
     * Get a list of possible pricing conditions for a pricing procedure from back-end system.
     * @param pricingProcedureId
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_CPSPricingConditionDefinitionVM OK
     * @throws ApiError
     */
    public static async erpPricingProceduresGetListOfPossiblePricingConditionsFromCps(
        pricingProcedureId: number,
    ): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_CPSPricingConditionDefinitionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/erpProcedures/${pricingProcedureId}/pricingConditions`,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                500: `An error occurred in communication with SAP Variant Configuration and Pricing, or a server-specific error occurred.`,
            },
        });
        return result.body;
    }

}