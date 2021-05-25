/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Lookup_VM_StateVM } from '../models/Webcom_API_SetupSPA_Lookup_VM_StateVM';
import { request as __request } from '../core/request';

export class LookupService {

    /**
     * Gets user lookups
     * @param query Query
     * @param id Id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetUserLookups(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/user`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets all user custom fields as attributes
     * @param query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetUserCustomFieldAttributes(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/userCustomFieldAttributes`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets customer lookups
     * @param query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetCustomerLookups(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/customer`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets all quote statuses
     * @param query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetQuoteStatuses(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/quoteStatuses`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets values for attribute user custom field
     * @param customFieldId
     * @param userId
     * @param query
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async lookupGetUserCustomFieldAttributeValues(
        customFieldId: number,
        userId: number,
        query?: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/userCustomFieldAttributes/${userId}/values/${customFieldId}`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Gets user type lookups
     * @param query Query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetUserTypeLookups(
        query: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/userTypes`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * @param query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetCompanyLookups(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/companies`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets tab lookups
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetTabs(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/tab`,
        });
        return result.body;
    }

    /**
     * @param query
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetStatusesLookups(
        query: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/status`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Gets Product Types (translated)
     * @param query Query (product type name)
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetProductTypes(
        query: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/productTypes`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Gets Product Categories (translated)
     * @param query Query (category name)
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetProductCategories(
        query: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/productCategories`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Gets Product Wizard Types (translated)
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async lookupGetProductWizardTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/productWizards`,
        });
        return result.body;
    }

    /**
     * Gets Product Attribute Display types
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetProductAttributeDisplayTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/productAttributeDisplayTypes`,
        });
        return result.body;
    }

    /**
     * Gets Product Attribute Tabs
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetProducAttributeTabs(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/productAttributeTabs`,
        });
        return result.body;
    }

    /**
     * All countries
     * @param abbreviationSize Abbreviation size param. Valid values are 0, 2 and 3.
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async lookupGetCountries(
        abbreviationSize?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/countries`,
            query: {
                'abbreviationSize': abbreviationSize,
            },
        });
        return result.body;
    }

    /**
     * Gets all states lookups for given country Name
     * @param countryName
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async lookupGetStates(
        countryName: string,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/states/${countryName}`,
        });
        return result.body;
    }

    /**
     * Gets all states with a country identifier
     * @param abbreviationSize Define size of country identifier. Valid values are 0, 2 and 3.
     * @returns Webcom_API_SetupSPA_Lookup_VM_StateVM OK
     * @throws ApiError
     */
    public static async lookupGetAllStates(
        abbreviationSize?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Lookup_VM_StateVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/states`,
            query: {
                'abbreviationSize': abbreviationSize,
            },
        });
        return result.body;
    }

    /**
     * Gets all dictionaries
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetDictionaries(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/dictionaries`,
        });
        return result.body;
    }

    /**
     * Gets default system dictionaries
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetDefaultDictionaries(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/defaultdictionaries`,
        });
        return result.body;
    }

    /**
     * Get custom tables
     * @param query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetCustomTables(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/customTables`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Get custom tables
     * @param query
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async lookupGetQuoteTables(
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/quoteTables`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Get attribute data types
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async lookupGetAttributeDataTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/attributesDataTypes`,
        });
        return result.body;
    }

    /**
     * @deprecated
     * Get all attributes from products that attribute contains
     * @param productIds Product Ids CSV
     * @param displayTypeId Attribute display type id
     * @param query Query for product attribute search
     * @param id Id of selected product attribute
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetContainerProductAttributes(
        productIds: string,
        displayTypeId: number,
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/attribute/products/${productIds}/attributes/${displayTypeId}`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Get all attributes from products that attribute contains.This should be used when productIds is longer then 260 characters
     * @param productIds List of Product Ids
     * @param displayTypeId Attribute display type id
     * @param query Query for product attribute search
     * @param id Id of selected product attribute
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetContainerProductAttributes1(
        productIds: Array<number>,
        displayTypeId: number,
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/lookups/attribute/products/attributes/${displayTypeId}`,
            query: {
                'query': query,
                'id': id,
            },
            body: productIds,
        });
        return result.body;
    }

    /**
     * Gets attributes lookup
     * @param displayTypeId display type
     * @param query search criteria
     * @param id
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async lookupGetContainerAttributes(
        displayTypeId: number,
        query?: string,
        id?: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/lookups/attributes/${displayTypeId}`,
            query: {
                'query': query,
                'id': id,
            },
        });
        return result.body;
    }

}