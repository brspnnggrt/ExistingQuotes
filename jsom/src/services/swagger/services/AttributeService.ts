/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_Attributes_VM_AttributeUsageVM } from '../models/Webcom_API_Public_Attributes_VM_AttributeUsageVM';
import type { Webcom_API_Public_Attributes_VM_AttributeVM } from '../models/Webcom_API_Public_Attributes_VM_AttributeVM';
import type { Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM } from '../models/Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM';
import type { Webcom_API_Public_Attributes_VM_ContainerAttributeValueRowVM } from '../models/Webcom_API_Public_Attributes_VM_ContainerAttributeValueRowVM';
import type { Webcom_API_Public_Attributes_VM_TranslatedAttributeVM } from '../models/Webcom_API_Public_Attributes_VM_TranslatedAttributeVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_Configurator_SetupSPA_Models_APIResponse } from '../models/Webcom_Configurator_SetupSPA_Models_APIResponse';
import { request as __request } from '../core/request';

export class AttributeService {

    /**
     * Gets the attribute with the provided ID
     * Retrieves the attribute with the provided ID.
     * @param id Attribute identifier
     * @returns Webcom_API_Public_Attributes_VM_AttributeVM Attribute with the requested ID.
     * @throws ApiError
     */
    public static async attributeGet(
        id: number,
    ): Promise<Webcom_API_Public_Attributes_VM_AttributeVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}`,
            errors: {
                400: `Invalid ID value.`,
                401: `Authentication failed.`,
                404: `Attribute with the requested ID not found.`,
                500: `Error getting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Updates an attribute with the provided ID
     * AttributeVM needs to follow attribute validation rules.
     * @param attributeVm Attribute VM
     * @param id Attribute identifier
     * @returns any Updated attribute.
     * @throws ApiError
     */
    public static async attributeUpdate(
        attributeVm: Webcom_API_Public_Attributes_VM_AttributeVM,
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/products/v1/attributes/${id}`,
            body: attributeVm,
            errors: {
                400: `Invalid AttributeVM values.`,
                401: `Authentication failed.`,
                409: `The attributeID of AttributeVM doesn't match the ID from the route.`,
                500: `Error updating attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes an attribute
     * Deletes an attribute with the provided ID.
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async attributeDelete(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/products/v1/attributes/${id}`,
            errors: {
                400: `Attribute cannot be deleted.`,
                401: `Authentication failed.`,
                404: `Attribute with the requested ID not found.`,
                500: `Error deleting attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Gets attributes
     * This endpoint supports OData filtering. Example:    /api/products/v1/attributes?$filter=name like 'memory'The following attribute properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like     systemId - $filter eq,ne,like     type - $filter eq,ne,like     typeLabel - $filter eq,ne,like,     numberOfValues - $filter eq,lt,gt,ge,le     externalId - $filter eq,ne,like     modifiedBy - $filter eq,ne,like     modifiedOn - $filter eq,lt,gt,ge,le     containsPersonallyIdentifiableInformation - $filter eq,ne            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}   Additional query strings:      dictionaryId - translates attribute fields for the provided dictionary. If translation for a certain attribute field doesn't exist, it will return the value from the definition.    This query string needs to be an integer.            For more information look at OData syntax documentation: https://www.odata.org/documentation/odata-version-2-0/uri-conventions/
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Attributes_VM_AttributeVM> Attributes for request.
     * @throws ApiError
     */
    public static async attributeGet1(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes`,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication failed.`,
                500: `Error getting attributes.`,
            },
        });
        return result.body;
    }

    /**
     * Creates a new attribute
     * AttributeVM needs to follow attribute validation rules.
     * @param attributeVm Attribute VM
     * @returns Webcom_Configurator_SetupSPA_Models_APIResponse OK
     * @returns any Attribute is created. The route to the attribute can be found in response header's 'location' section.
     * @throws ApiError
     */
    public static async attributeSave(
        attributeVm: Webcom_API_Public_Attributes_VM_AttributeVM,
    ): Promise<Webcom_Configurator_SetupSPA_Models_APIResponse | any> {
        const result = await __request({
            method: 'POST',
            path: `/api/products/v1/attributes`,
            body: attributeVm,
            errors: {
                400: `Invalid AttributeVM values.`,
                401: `Authentication failed.`,
                500: `Error saving attribute.`,
            },
        });
        return result.body;
    }

    /**
     * Gets measurements
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned list of measurements.
     * @throws ApiError
     */
    public static async attributeGetAllMeasurements(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/measurements`,
            errors: {
                401: `Authentication failed.`,
                500: `Error getting measurements.`,
            },
        });
        return result.body;
    }

    /**
     * Get all attribute types
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> Returned list of all attribute types.
     * @throws ApiError
     */
    public static async attributeGetAttributeTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/types`,
            errors: {
                401: `Authentication failed.`,
                500: `Error getting attribute types.`,
            },
        });
        return result.body;
    }

    /**
     * Get a system ID of the attribute
     * Example:     api/products/v1/attributes/systemId?name='some attribute'
     * @returns string Returned newly generated system ID.
     * @throws ApiError
     */
    public static async attributeGetSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/systemId`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the system ID of the attribute value
     * Example:     api/products/v1/attributes/value/systemId?name='some attribute value'    segregationOfDuties
     * @returns string Returned newly generated system ID.
     * @throws ApiError
     */
    public static async attributeGetValueSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/value/systemId`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the maximum rank of attribute values for the provided attribute ID
     * @param id Attribute ID
     * @returns number Returned max attribute value rank.
     * @throws ApiError
     */
    public static async attributeGetMaxAttributeValueRank(
        id: number,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/values/maxRank`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the attribute values for the attribute with the provided ID
     * @param id Attribute ID
     * @returns number List of all values.
     * @throws ApiError
     */
    public static async attributeGetAttributeValues(
        id: number,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/values`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the container attribute values for the attribute with the provided ID
     * @param id Attribute ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_Attributes_VM_ContainerAttributeValueRowVM> Returned attribute values.
     * @throws ApiError
     */
    public static async attributeGetContainerAttributeValues(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/containerAttributeValues`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets billing periods
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned attribute value billing periods.
     * @throws ApiError
     */
    public static async attributeGetAttributeValuesBillingPeriods(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/values/billingPeriods`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets attribute value units
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned attribute value units.
     * @throws ApiError
     */
    public static async attributeGetAttributeValueUnits(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/values/units`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets new unique system IDs for all attribute values with the provided ID
     * @param id Attribute ID
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> Returned unique system IDs for attribute values with the provided ID.
     * @throws ApiError
     */
    public static async attributeGetNewAttribteValuesSystemIds(
        id: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/values/newSystemIds`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the translated attribute definition with values
     * @param id
     * @param dictionaryId
     * @returns Webcom_API_Public_Attributes_VM_TranslatedAttributeVM OK
     * @throws ApiError
     */
    public static async attributeGetAttributeTranslation(
        id: number,
        dictionaryId: number,
    ): Promise<Webcom_API_Public_Attributes_VM_TranslatedAttributeVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/translation/${dictionaryId}`,
        });
        return result.body;
    }

    /**
     * Gets all attribute translations for each dictionary for values, and for conatiners
     * @param attributeId AttributeId
     * @returns Webcom_API_Public_Attributes_VM_TranslatedAttributeVM OK
     * @throws ApiError
     */
    public static async attributeGetAllAttributeTranslations(
        attributeId: number,
    ): Promise<Array<Webcom_API_Public_Attributes_VM_TranslatedAttributeVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${attributeId}/translation`,
        });
        return result.body;
    }

    /**
     * Create new attribute translations if the translations don't exist.If translations exist, update them. Create new attribute translations for copy attribute
     * @param id AttributeId
     * @param attributeTranslations List of attribute translations for each dictionary
     * @param isCopy Is copy of attribute
     * @returns void
     * @throws ApiError
     */
    public static async attributeSaveAttributeTranslations(
        id: number,
        attributeTranslations: Array<Webcom_API_Public_Attributes_VM_TranslatedAttributeVM>,
        isCopy: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/products/v1/attributes/${id}/translation`,
            query: {
                'isCopy': isCopy,
            },
            body: attributeTranslations,
        });
        return result.body;
    }

    /**
     * Gets container column total types
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned container column total types.
     * @throws ApiError
     */
    public static async attributeGetContainerTotalTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/container/totalTypes`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets container column data types
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned container column data types.
     * @throws ApiError
     */
    public static async attributeGetContainerDataTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/container/dataTypes`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets container column display types
     * @param isProductPartNumber Is container column product part number
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned container column display types.
     * @throws ApiError
     */
    public static async attributeGetContainerDisplayTypes(
        isProductPartNumber?: boolean,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/container/column/displayTypes`,
            query: {
                'isProductPartNumber': isProductPartNumber,
            },
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets container column types
     * @param isProductContainer Is product container
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned container column types.
     * @throws ApiError
     */
    public static async attributeGetContainerColumnTypes(
        isProductContainer?: boolean,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/container/columnTypes`,
            query: {
                'isProductContainer': isProductContainer,
            },
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets container column display types for the attribute
     * @param id The attribute identifier.
     * @returns Webcom_API_SetupSPA_Common_LookupVM Returned container column display types for an attribute with the provided ID.
     * @throws ApiError
     */
    public static async attributeGetContainerDisplayTypesForAttribute(
        id: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/container/column/displayTypes/attribute/${id}`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the custom table columns
     * @param id The identifier.
     * @returns Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM Returned custom table columns.
     * @throws ApiError
     */
    public static async attributeGetCustomTableColumns(
        id: number,
    ): Promise<Array<Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/autocomplete/customtable/${id}`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the custom table name
     * @param id The identifier.
     * @returns string Returned the custom table name.
     * @throws ApiError
     */
    public static async attributeGetCustomTableName(
        id: number,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/autocomplete/customtable/${id}/name`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the quote table columns
     * @param id The identifier.
     * @returns Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM Returned quote table columns.
     * @throws ApiError
     */
    public static async attributeGetQuoteCustomTableColumns(
        id: number,
    ): Promise<Array<Webcom_API_Public_Attributes_VM_AutocompleteTableColumnVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/autocomplete/quotetable/${id}`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the quote table name
     * @param id The identifier.
     * @returns string Returned the quote table name.
     * @throws ApiError
     */
    public static async attributeGetQuoteTableName(
        id: number,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/autocomplete/quotetable/${id}/name`,
            errors: {
                401: `Authentication failed.`,
            },
        });
        return result.body;
    }

    /**
     * Returns the list of products in which this attribute value is used
     * @param id
     * @param valueId
     * @returns string OK
     * @throws ApiError
     */
    public static async attributeGetListOfProductWhereAttributeValueIsInUse(
        id: number,
        valueId: number,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/values/${valueId}/products`,
        });
        return result.body;
    }

    /**
     * Gets list of objects in which this attribute is used.
     * @param id The attribute identifier.
     * @returns Webcom_API_Public_Attributes_VM_AttributeUsageVM Attribute with the requested ID.
     * @throws ApiError
     */
    public static async attributeGetAttributeUsageInformation(
        id: number,
    ): Promise<Array<Webcom_API_Public_Attributes_VM_AttributeUsageVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/attributes/${id}/usage`,
            errors: {
                401: `Authentication failed.`,
                404: `Attribute with the requested ID not found.`,
            },
        });
        return result.body;
    }

}