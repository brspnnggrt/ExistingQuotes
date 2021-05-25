/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM } from '../models/Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_Configurator_SetupSPA_Models_APIResponse } from '../models/Webcom_Configurator_SetupSPA_Models_APIResponse';
import type { Webcom_Configurator_Util_Pagination_PagedData } from '../models/Webcom_Configurator_Util_Pagination_PagedData';
import { request as __request } from '../core/request';

export class BusinessPartnerService {

    /**
     * Get business partner by the business partner ID.
     * You can use the following request to retrieve details of a business partner specified by its ID.
     * @param id Target business partner Id
     * @returns Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM Business Partner with specified identifier
     * @throws ApiError
     */
    public static async businessPartnerGetByPartnerId(
        id: number,
    ): Promise<Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/businesspartner/v1/businesspartner/${id}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Business Partner not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Update a business partner.
     * You can use the following request to update details of a specific business partner.
     * @param id Target business partner Id
     * @param businessPartner Business partner
     * @returns any Updated Business Partner with specified identifier
     * @throws ApiError
     */
    public static async businessPartnerUpdate(
        id: number,
        businessPartner: Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/businesspartner/v1/businesspartner/${id}`,
            body: businessPartner,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Business Partner not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Remove business partner.
     * You can use the following request to remove a business partner specified by its ID.
     * @param id Target business partner Id
     * @returns void
     * @throws ApiError
     */
    public static async businessPartnerRemove(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/businesspartner/v1/businesspartner/${id}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Business Partner not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Get all business partners.
     * You can use the following request to retrieve business partners that match the specified filters.This endpoint supports OData filtering. Example:                 /api/businesspartner/v1/businesspartner?$filter=name eq 'example'     /api/businesspartner/v1/businesspartner?$filter=systemid ne 'example'     /api/businesspartner/v1/businesspartner?$filter=address.physicalAddress.country eq 'USA' All fields, nested included, except id can be used with OData $filter eq,ne,like            Additional OData options are available for these properties:               $orderby={properties name} {desc/asc}   $top={number, max 100}   $skip={number}   $expand=permissions
     * @returns Webcom_Configurator_Util_Pagination_PagedData<Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM> List of all Business Partners
     * @throws ApiError
     */
    public static async businessPartnerLoadAll(): Promise<Webcom_Configurator_Util_Pagination_PagedData> {
        const result = await __request({
            method: 'GET',
            path: `/api/businesspartner/v1/businesspartner`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Add business partner.
     * You can use the following request to create a new business partner.
     * @param businessPartner Business partner
     * @returns Webcom_Configurator_SetupSPA_Models_APIResponse Created specified Business Partner
     * @throws ApiError
     */
    public static async businessPartnerAdd(
        businessPartner: Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM,
    ): Promise<Webcom_Configurator_SetupSPA_Models_APIResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/businesspartner/v1/businesspartner`,
            body: businessPartner,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Replaces permissions for business partner.
     * You can use the following request to replace permissions for the specified business partner with the permissions provided in the request.
     * @param id Target business partner Id
     * @param permissions List of selected permissions for business partner
     * @returns any Updated permissions for specified Business Partner
     * @throws ApiError
     */
    public static async businessPartnerUpdatePermissions(
        id: number,
        permissions: Array<number>,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/businesspartner/v1/businesspartner/${id}/permission`,
            body: permissions,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Business Partner permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Add permission for business partner.
     * You can use the following request to add a single permission to a specific business partner.
     * @param id Target business partner Id
     * @param permissionId Business partner permission
     * @returns any Created new Permission for specified Business Partner
     * @throws ApiError
     */
    public static async businessPartnerAddPermission(
        id: number,
        permissionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/businesspartner/v1/businesspartner/${id}/permission`,
            body: permissionId,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Business Partner permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Delete permission for business partner.
     * You can use the following request to remove a permission that is assigned to a specific business partner.
     * @param id Target business partner Id
     * @param permissionId Target permission Id
     * @returns any Deleted Permission for specified Business Partner
     * @throws ApiError
     */
    public static async businessPartnerRemovePermission(
        id: number,
        permissionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/businesspartner/v1/businesspartner/${id}/permission/${permissionId}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Business Partner permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the available business partner types.
     * You can use the following request to retrieve a list of available business partner types.
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async businessPartnerGetAttributeValueUnits(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/businesspartner/v1/businesspartner/lookups/businesspartnertype`,
            errors: {
                403: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a unique System ID based on the provided business partner name.
     * You can use the following request to get a unique System ID for the provided name. The name is created by adding suffix cpq to the provided name.ExampleName -&gt; ExampleName_cpqIf the name is not unique, an integer is added to the suffix.ExampleName -&gt; ExampleName_1_cpqThis endpoint uses query parameter ?nameExample:                /api/businesspartner/v1/businesspartner/systemId?name=ExampleName
     * @returns string OK
     * @throws ApiError
     */
    public static async businessPartnerGetSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/businesspartner/v1/businesspartner/systemId`,
            errors: {
                401: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

}