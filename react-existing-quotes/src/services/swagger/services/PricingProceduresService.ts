/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM } from '../models/Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM';
import type { Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM } from '../models/Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM';
import type { Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedurePossibleFieldsForMappingLookupVM } from '../models/Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedurePossibleFieldsForMappingLookupVM';
import type { Webcom_Configurator_Util_Pagination_PagedData } from '../models/Webcom_Configurator_Util_Pagination_PagedData';
import { request as __request } from '../core/request';

export class PricingProceduresService {

    /**
     * Gets pricing procedures header details.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM OK
     * @throws ApiError
     */
    public static async pricingProceduresGetPricingProcedureHeadersList(): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/procedures`,
            errors: {
                401: `Authentication fails.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Updates the header details of pricing procedures.
     * Call to this enpoint is valid only if the back-end system is not connected.
     * @param pricingProceduresHeader Pricing procedure header.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM OK
     * @throws ApiError
     */
    public static async pricingProceduresUpdatePricingProceduresHeader(
        pricingProceduresHeader: Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM,
    ): Promise<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM> {
        const result = await __request({
            method: 'PUT',
            path: `/api/pricingProcedure/v1/procedures`,
            body: pricingProceduresHeader,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                404: `Requested pricing procedure is not found in the system.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Creates pricing procedures with header details.
     * This is the bulk insert method for pricing procedures. If back-end system is connected, then determinations for pricing procedure are synchronized automatically. If the request is not valid or a condition is not satisfied, all pricing procedures are rejected and an error response is displayed.Conditions for the insert method are the following:            1. There is no ID, or the ID for the pricing procedure is 0.        2. The pricing procedure name is unique.
     * @param pricingProceduresHeaders A list of pricing procedure headers to insert.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM OK
     * @throws ApiError
     */
    public static async pricingProceduresInsertPricingProceduresHeaders(
        pricingProceduresHeaders: Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM>,
    ): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/pricingProcedure/v1/procedures`,
            body: pricingProceduresHeaders,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                404: `Requested pricing procedure is not found in the back-end system.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Get the header details of the pricing procedure with the specified ID.
     * @param pricingProcedureId The unique identifier of the pricing procedure.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM OK
     * @throws ApiError
     */
    public static async pricingProceduresGetPricingProcedureHeader(
        pricingProcedureId: number,
    ): Promise<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureHeaderVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/procedures/${pricingProcedureId}`,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes the pricing procedure with the specified ID.
     * Delete the pricing procedure header details with all determinations and the pricing conditions.
     * @param pricingProcedureId The unique identifier of the pricing procedure.
     * @returns void
     * @throws ApiError
     */
    public static async pricingProceduresDelete(
        pricingProcedureId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/pricingProcedure/v1/procedures/${pricingProcedureId}`,
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
     * Get quote item fileds for mapping.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedurePossibleFieldsForMappingLookupVM OK
     * @throws ApiError
     */
    public static async pricingProceduresGetQuoteItemColumnsForMapping(): Promise<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedurePossibleFieldsForMappingLookupVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/procedures/quoteFields`,
            errors: {
                401: `Authentication fails.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the determinations of the pricing procedure with the specified ID.
     * This endpoint supports OData filtering.  Example:    /api/pricingProcedure/v1/procedures/{pricingProcedureId}/determinations?$filter=salesOrganization eq 'example'    /api/pricingProcedure/v1/procedures/{pricingProcedureId}/determinations?$filter=salesOrganization ne 'example'    /api/pricingProcedure/v1/procedures/{pricingProcedureId}/determinations?$filter=documentPricingProcedure like 'example'    /api/pricingProcedure/v1/procedures/{pricingProcedureId}/determinations?$filter=salesOrganization eq '0001' and distributionChannel ne '01' and division like '01'The following pricing procedure properties are available via OData, and specifically support the $filter option.      salesOrganization - $filter eq,ne,like     distributionChannel - $filter eq,ne,like     division - $filter eq,ne,like,     documentPricingProcedure - $filter eq,ne,like,     customerPricingProcedure - $filter eq,ne,likeFurthermore, an additional OData option is available for the properties above:    $orderby={properties name} {desc/asc}   $top={number, max 100}   $skip={number}   For more information, please refer to the OData syntax documentation: https://www.odata.org/documentation/odata-version-2-0/uri-conventions/
     * @param pricingProcedureId The unique identifier of the pricing procedure.
     * @returns Webcom_Configurator_Util_Pagination_PagedData<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM> OK
     * @throws ApiError
     */
    public static async pricingProceduresGetPricingProcedureDeterminations(
        pricingProcedureId: number,
    ): Promise<Webcom_Configurator_Util_Pagination_PagedData> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/procedures/${pricingProcedureId}/determinations`,
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
     * Updates the determinations of the pricing procedure with the specified ID.
     * Call to this enpoint is valid only if the back-end system is not connected.
     * @param pricingProcedureId The unique identifier of the pricing procedure.
     * @param pricingProcedureDeterminations Pricing procedure determinations.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM OK
     * @throws ApiError
     */
    public static async pricingProceduresUpdatePricingProcedureDeterminations(
        pricingProcedureId: number,
        pricingProcedureDeterminations: Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM>,
    ): Promise<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM> {
        const result = await __request({
            method: 'PUT',
            path: `/api/pricingProcedure/v1/procedures/${pricingProcedureId}/determinations`,
            body: pricingProcedureDeterminations,
            errors: {
                400: `Invalid request parameters.`,
                401: `Authentication fails.`,
                404: `Requested pricing procedure is not found in the system.`,
                500: `Server-specific error occurred.`,
            },
        });
        return result.body;
    }

    /**
     * Gets all pricing procedure determinations that are stored in SAP CPQ.
     * This endpoint returns all pricing procedure determinations which are stored in SAP CPQ.
     * @param pricingProcedureId The unique identifier of the pricing procedure.
     * @returns Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM OK
     * @throws ApiError
     */
    public static async pricingProceduresGetAllPricingProcedureDeterminations(
        pricingProcedureId: number,
    ): Promise<Array<Webcom_API_Public_Pricing_PricingProcedures_VM_PricingProcedureDeterminationVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricingProcedure/v1/procedures/${pricingProcedureId}/determinations/all`,
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