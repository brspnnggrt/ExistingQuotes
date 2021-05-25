/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemVM } from '../models/Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemVM';
import type { Webcom_API_Public_QuoteLayout_VM_QuoteLayoutVM } from '../models/Webcom_API_Public_QuoteLayout_VM_QuoteLayoutVM';
import { request as __request } from '../core/request';

export class QuoteLayoutService {

    /**
     * Gets quote layout items and permissions.
     * @returns Webcom_API_Public_QuoteLayout_VM_QuoteLayoutVM OK
     * @throws ApiError
     */
    public static async quoteLayoutGetQuoteLayout(): Promise<Webcom_API_Public_QuoteLayout_VM_QuoteLayoutVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/quote/v1/layout`,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication fails.`,
                403: `User does not have a permission to perform an action.`,
                500: `Error getting quote layout.`,
            },
        });
        return result.body;
    }

    /**
     * Updates selected quote layout items and permissions.
     * @param quoteLayout Quote layout settings including items and permissions.
     * @returns any Updated quote layout settings.
     * @throws ApiError
     */
    public static async quoteLayoutSaveQuoteLayout(
        quoteLayout: Webcom_API_Public_QuoteLayout_VM_QuoteLayoutVM,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/quote/v1/layout`,
            body: quoteLayout,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication failed.`,
                403: `User does not have a permission to perform an action.`,
                404: `Action or user type not found.`,
                500: `Error updating quote layout.`,
            },
        });
        return result.body;
    }

    /**
     * Gets available quote layout items.
     * This endpoint supports OData filtering. Example:    /api/quote/v1/layout/availableItems?$filter=name like 'ListPrice'The following quote layout item properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like                   type - $filter eq,lt,gt,ge,le             Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}       $skip={number}                               SAP CPQ quote layout API is using <a href=>oData convention</a>.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemVM> List of available quote layout items.
     * @throws ApiError
     */
    public static async quoteLayoutGetAvailableQuoteLayoutItems(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/quote/v1/layout/availableItems`,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication fails.`,
                403: `User does not have a permission to perform an action.`,
                500: `Error getting quote layout items.`,
            },
        });
        return result.body;
    }

}