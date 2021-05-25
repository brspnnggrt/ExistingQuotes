/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_Pricing_Discount_VM_DiscountVM } from '../models/Webcom_API_Public_Pricing_Discount_VM_DiscountVM';
import type { Webcom_Configurator_SetupSPA_Models_APIResponse } from '../models/Webcom_Configurator_SetupSPA_Models_APIResponse';
import { request as __request } from '../core/request';

export class DiscountService {

    /**
     * Gets multipliers discount
     * This endpoint supports OData filtering. Example:    /api/pricing/v1/multipliers/discount?$filter=multiplierMax like '55'The following discount properties are available to OData, and have specific support for $filter option:                  condition - $filter eq,ne,like     override - $filter eq,ne     multiplierDefault - $filter eq,ne,like     multiplierMinimum - $filter eq,ne,like     multiplierMaximum - $filter eq,ne,like                 discountDefault - $filter eq,ne,like     discountMaximum - $filter eq,ne,like     discountMinimum - $filter eq,ne,like                 recurringMultiplierDefault - $filter eq,ne,like     recurringMultiplierMaximum - $filter eq,ne,like     recurringMultiplierMinimum - $filter eq,ne,like                 recurringDiscountDefault - $filter eq,ne,like     recurringDiscountMaximum - $filter eq,ne,like     recurringDiscountMinimum - $filter eq,ne,like     quickFilter - $filter eq,ne,like - filters on all multipliers and discount values            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}                        For more information look at OData syntax documentation: https://www.odata.org/documentation/odata-version-2-0/uri-conventions/
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Pricing_Discount_VM_DiscountVM> Discounts for request.
     * @throws ApiError
     */
    public static async discountGet(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricing/v1/multipliers/discount`,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication failed.`,
                500: `Error getting discounts.`,
            },
        });
        return result.body;
    }

    /**
     * Creates a new discount
     * DiscountVm needs to follow discount validation rules.
     * @param discountVm Discount VM
     * @returns Webcom_Configurator_SetupSPA_Models_APIResponse OK
     * @returns any Discount is created. The route to the discount can be found in response header's 'location' section.
     * @throws ApiError
     */
    public static async discountSave(
        discountVm: Webcom_API_Public_Pricing_Discount_VM_DiscountVM,
    ): Promise<Webcom_Configurator_SetupSPA_Models_APIResponse | any> {
        const result = await __request({
            method: 'POST',
            path: `/api/pricing/v1/multipliers/discount`,
            body: discountVm,
            errors: {
                400: `Invalid DiscountVm values.`,
                401: `Authentication failed.`,
                500: `Error saving discount.`,
            },
        });
        return result.body;
    }

    /**
     * Get Discount by Id
     * @param id
     * @returns Webcom_API_Public_Pricing_Discount_VM_DiscountVM Discount with the requested Id.
     * @throws ApiError
     */
    public static async discountGet1(
        id: number,
    ): Promise<Webcom_API_Public_Pricing_Discount_VM_DiscountVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/pricing/v1/multipliers/discount/${id}`,
            errors: {
                400: `Invalid ID value.`,
                401: `Authentication failed.`,
                404: `Discount with the requested ID not found.`,
                500: `Error getting discount.`,
            },
        });
        return result.body;
    }

    /**
     * Creates a new discount
     * DiscountVm needs to follow discount validation rules.
     * @param discountVm Discount VM
     * @param id Discount id
     * @returns any Updated discount.
     * @throws ApiError
     */
    public static async discountUpdate(
        discountVm: Webcom_API_Public_Pricing_Discount_VM_DiscountVM,
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/pricing/v1/multipliers/discount/${id}`,
            body: discountVm,
            errors: {
                400: `Invalid discountVM values.`,
                401: `Authentication failed.`,
                409: `The discountId of discountVM doesn't match the ID from the route.`,
                500: `Error updating discount.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes an discount
     * Deletes an discount with the provided ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async discountDelete(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/pricing/v1/multipliers/discount/${id}`,
            errors: {
                400: `discount cannot be deleted.`,
                401: `Authentication failed.`,
                404: `discount with the requested ID not found.`,
                500: `Error deleting discount.`,
            },
        });
        return result.body;
    }

}