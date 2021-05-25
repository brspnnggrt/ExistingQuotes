/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM } from '../models/Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM } from '../models/Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM';
import type { Webcom_Configurator_SetupSPA_Models_APIResponse } from '../models/Webcom_Configurator_SetupSPA_Models_APIResponse';
import { request as __request } from '../core/request';

export class GuidedSellingService {

    /**
     * Gets Guided Sellings
     * This endpoint supports OData filtering. Example:    /api/products/v1/guidedSelling?$filter=name like 'memory'The following Guided Selling properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like      systemId - $filter eq,ne,like      createdOn - $filter eq,lt,gt,ge,le,     createdBy - $filter eq,ne,like,     modifiedBy - $filter eq,ne,like     modifiedOn - $filter eq,lt,gt,ge,le     isActive - $filter eq,ne,     startDate - $filter eq,lt,gt,ge,le     endDate - $filter eq,lt,gt,ge,le            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}            For more information look at OData syntax documentation: https://www.odata.org/documentation/odata-version-2-0/uri-conventions/
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM> Guided Selling for request.
     * @throws ApiError
     */
    public static async guidedSellingGet(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling`,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication failed.`,
                500: `Error getting attributes.`,
            },
        });
        return result.body;
    }

    /**
     * Adds new guided selling
     * @param guidedSelling Guided selling View Model
     * @returns Webcom_Configurator_SetupSPA_Models_APIResponse OK
     * @throws ApiError
     */
    public static async guidedSellingAdd(
        guidedSelling: Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM,
    ): Promise<Webcom_Configurator_SetupSPA_Models_APIResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/products/v1/guidedSelling`,
            body: guidedSelling,
            errors: {
                400: `Guided Selling cannot be deleted.`,
                401: `Authentication failed.`,
                500: `Error deleting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the Guided Selling with the provided ID
     * Retrieves the Guided Selling with the provided ID.
     * @param id Guided Selling identifier
     * @returns Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM Guided Selling with the requested ID.
     * @throws ApiError
     */
    public static async guidedSellingGet1(
        id: number,
    ): Promise<Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/${id}`,
            errors: {
                400: `Invalid ID value.`,
                401: `Authentication failed.`,
                404: `Guided Selling with the requested ID not found.`,
                500: `Error getting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Updates the existing guided selling
     * @param id
     * @param guidedSelling
     * @returns void
     * @throws ApiError
     */
    public static async guidedSellingUpdate(
        id: number,
        guidedSelling: Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM,
    ): Promise<void> {
        const result = await __request({
            method: 'PUT',
            path: `/api/products/v1/guidedSelling/${id}`,
            body: guidedSelling,
            errors: {
                400: `Guided Selling cannot be deleted.`,
                401: `Authentication failed.`,
                404: `Guided Selling with the requested ID not found.`,
                409: `The id of GuidedSellingVM doesn't match the id from the route.`,
                500: `Error deleting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Deleted Guided Selling
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async guidedSellingDelete(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/products/v1/guidedSelling/${id}`,
            errors: {
                400: `Guided Selling cannot be deleted.`,
                401: `Authentication failed.`,
                404: `Guided Selling with the requested ID not found.`,
                500: `Error deleting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Gets available guided selling attributes for provided guided selling.If Guided selling id is 0 it will return all available attributes.
     * This endpoint supports OData filtering. Example:    /api/products/v1/guidedSelling/0/attributes/available?$filter=name like 'memory'The following Guided Selling attribute properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like      definitionId - $filter eq,lt,gt,ge,le,in,nin     definitionTypeLabel - $filter eq,ne,like             Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}            For more information look at OData syntax documentation: https://www.odata.org/documentation/odata-version-2-0/uri-conventions/
     * @param guidedSellingId Guided selling id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM> Guided Selling attributes with requested attribute definition ids.
     * @throws ApiError
     */
    public static async guidedSellingGetAvailableAttributes(
        guidedSellingId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/${guidedSellingId}/attributes/available`,
            errors: {
                400: `Guided Selling can not be deleted.`,
                401: `Authentication failed.`,
                404: `Guided Selling with the requested ID not found.`,
                500: `Error deleting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Gets all attribute display as types
     * @returns any List of Guided Selling attribute display as types.
     * @throws ApiError
     */
    public static async guidedSellingGetAttributeDisplayAsTypes(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/attributes/displayAsTypes`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets all attribute custom control types
     * @returns any List of Guided Selling attribute custom control types.
     * @throws ApiError
     */
    public static async guidedSellingGetAttributeCustomControlTypes(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/attributes/customControlTypes`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets allowed attribute display as types for provided attribute defintiion
     * @param definitionId Attribute definition id
     * @returns any List of Guided Selling attribute display as types.
     * @throws ApiError
     */
    public static async guidedSellingGetAllowedAttributeDisplayAsTypes(
        definitionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/attributes/${definitionId}/allowedDisplayAsTypes`,
            errors: {
                400: `Attribute definition with provided with provided id does not exist.`,
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Checks whether attribute with provided definition id is used in rules on guided selling with provided id.
     * @param guidedSellingId Guided selling id
     * @param definitionId Attribute definition id
     * @returns any Whether attribute is used in rules.
     * @throws ApiError
     */
    public static async guidedSellingIsAttributeUsedInRules(
        guidedSellingId: number,
        definitionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/${guidedSellingId}/attributes/${definitionId}/usedInRules`,
            errors: {
                400: `Guided selling and/or attribute definition with provided id does not exist.`,
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Checks whether guided selling attribute values with provided ids are used in rules on guided selling with provided id.
     * @param guidedSellingId Guided selling id
     * @param attributeValueIdsCsv Attribute value ids csv
     * @returns any Whether attribute values are used in rules.
     * @throws ApiError
     */
    public static async guidedSellingAreAttributeValuesUsedInRules(
        guidedSellingId: number,
        attributeValueIdsCsv: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/guidedSelling/${guidedSellingId}/attributes/values/${attributeValueIdsCsv}/usedInRules`,
            errors: {
                400: `Guided selling and/or attribute values with provided ids don't exist.`,
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

}