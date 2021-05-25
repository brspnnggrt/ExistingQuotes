/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM } from '../models/Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM';
import type { Webcom_Configurator_SetupSPA_Models_APIResponse } from '../models/Webcom_Configurator_SetupSPA_Models_APIResponse';
import type { Webcom_Configurator_Util_Pagination_PagedData } from '../models/Webcom_Configurator_Util_Pagination_PagedData';
import { request as __request } from '../core/request';

export class PartnerFunctionService {

    /**
     * Gets the partner function by the specified ID.
     * You can use the following request to retrieve a partner function specified by the ID.
     * @param id Target partner function id.
     * @returns Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM Partner Function with specified id
     * @throws ApiError
     */
    public static async partnerFunctionGetById(
        id: number,
    ): Promise<Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/businesspartner/v1/partnerfunction/${id}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Partner Function not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Updates the specified partner function.
     * You can use the following request to update the details of a specific partner function.
     * @param id Target partner function id.
     * @param partnerFunctionVm The partner function.
     * @returns any Updated Partner Functions with specified id
     * @throws ApiError
     */
    public static async partnerFunctionUpdate(
        id: number,
        partnerFunctionVm: Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/businesspartner/v1/partnerfunction/${id}`,
            body: partnerFunctionVm,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Partner Function not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Gets all partner functions.
     * You can use the following request to retrieve a list of partner functions that match the specified filter.This endpoint supports OData filtering. Example:                /api/businesspartner/v1/partnerfunction?$filter=key like 'sp'    /api/businesspartner/v1/partnerfunction?$filter=isMandatory eq 'false'    /api/businesspartner/v1/partnerfunction?$filter=validFrom ge '1/1/2020' The following attribute properties are available to OData, and have specific support for the $filter option.                  key - $filter eq,ne,like     name - $filter eq,ne,like     validFrom - $filter eq,ne,lt,gt,ge,le     validTo - $filter eq,ne,lt,gt,ge,le     isMandatory - $filter eq,ne,like     isUnique - $filter eq,ne,like            Additional OData options are available for these properties:               $orderby={properties name} {desc/asc}   $top={number, max 100}   $skip={number}   $expand=translations
     * @returns Webcom_Configurator_Util_Pagination_PagedData<Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM> List of all Partner Functions
     * @throws ApiError
     */
    public static async partnerFunctionGetAll(): Promise<Webcom_Configurator_Util_Pagination_PagedData> {
        const result = await __request({
            method: 'GET',
            path: `/api/businesspartner/v1/partnerfunction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Adds the specified partner function.
     * You can use the following request to create a new partner function.
     * @param partnerFunction The partner function.
     * @returns Webcom_Configurator_SetupSPA_Models_APIResponse Created specified Partner Function
     * @throws ApiError
     */
    public static async partnerFunctionAdd(
        partnerFunction: Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM,
    ): Promise<Webcom_Configurator_SetupSPA_Models_APIResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/businesspartner/v1/partnerfunction`,
            body: partnerFunction,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes a partner function specified by the key.
     * You can use the following request to delete a specific partner function identified by the partner function key.
     * @param key Target partner function key.
     * @returns void
     * @throws ApiError
     */
    public static async partnerFunctionDelete(
        key: string,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/businesspartner/v1/partnerfunction/${key}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Partner Function not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Save partner function translations.
     * You can use the following request to add translations provided in the request for the specified partner function.If the partner function already has some translations, they are completely replaced by the provided list of translations.
     * @param partnerFunctionVm Partner function
     * @returns any Saved Partner Function translations
     * @throws ApiError
     */
    public static async partnerFunctionSaveTranslations(
        partnerFunctionVm: Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/businesspartner/v1/partnerfunction/translations`,
            body: partnerFunctionVm,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Partner Function not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

}