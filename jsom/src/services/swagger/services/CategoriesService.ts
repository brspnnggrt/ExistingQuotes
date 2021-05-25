/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Categories_VM_CategoryTranslationVM } from '../models/Webcom_API_Public_Categories_VM_CategoryTranslationVM';
import type { Webcom_API_Public_Categories_VM_CategoryVM } from '../models/Webcom_API_Public_Categories_VM_CategoryVM';
import type { Webcom_Configurator_SetupSPA_Models_APIResponse } from '../models/Webcom_Configurator_SetupSPA_Models_APIResponse';
import type { Webcom_Configurator_Util_Pagination_PagedData } from '../models/Webcom_Configurator_Util_Pagination_PagedData';
import { request as __request } from '../core/request';

export class CategoriesService {

    /**
     * Get category by the category ID.
     * You can use the following request to retrieve details of a category specified by its ID.
     * @param id Target category Id
     * @returns Webcom_API_Public_Categories_VM_CategoryVM Category with specified identifier.
     * @throws ApiError
     */
    public static async categoriesGetByCategoryId(
        id: number,
    ): Promise<Webcom_API_Public_Categories_VM_CategoryVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/categories/${id}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Update a category.
     * You can use the following request to update details of a specific category.If the category in payload has VisibleToEveryone set to true then permissions are not updated.
     * @param id Target category Id
     * @param category Category
     * @returns any Updated Category with specified identifier.
     * @throws ApiError
     */
    public static async categoriesUpdate(
        id: number,
        category: Webcom_API_Public_Categories_VM_CategoryVM,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/products/v1/categories/${id}`,
            body: category,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Remove category.
     * You can use the following request to remove a category specified by its ID.
     * @param id Target category Id
     * @returns void
     * @throws ApiError
     */
    public static async categoriesRemove(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/products/v1/categories/${id}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Get all categories.
     * You can use the following request to retrieve categories that match the specified filters.This endpoint supports OData filtering. Example:                /api/products/v1/categories?$filter=name eq 'example'    /api/products/v1/categories?$filter=systemId ne 'example'    /api/products/v1/categories?$filter=active eq 'true'    /api/products/v1/categories?$filter=parentCategory eq '1'             The following attribute properties are available to OData, and they have a specific support for the $filter option.                 name - $filter eq, ne, like    systemId - $filter eq, ne, like    description - $filter eq, ne, like    active - $filter eq, ne, like    firmsOnly - $filter eq, ne, like    rank - $filter eq, ne, like    mainImage - $filter eq, ne, like    additionalImage1 - $filter eq, ne, like    additionalImage2 - $filter eq, ne, like    mobileImage - $filter eq, ne, like    imageAltText - $filter eq, ne, like    pluginRedirect - $filter eq, ne, like    startDate - $filter eq, ne, like, lt, gt, ge, le    endDate - $filter eq, ne, like, lt, gt, ge, le    defaultCatalogueViewId - $filter eq, ne, like, lt, gt, ge, le    propagateCatalogueView - $filter eq, ne, like    visibleToEveryone - $filter eq, ne, like    parentCategory - $filter eq, ne, like, lt, gt, ge, le            Additional OData options are available for these properties:               $orderby={properties name} {desc/asc}   $top={number, max 100}   $skip={number}   $expand=permissions
     * @returns Webcom_Configurator_Util_Pagination_PagedData<Webcom_API_Public_Categories_VM_CategoryVM> List of all Categories.
     * @throws ApiError
     */
    public static async categoriesGetAll(): Promise<Webcom_Configurator_Util_Pagination_PagedData> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/categories`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Add category.
     * You can use the following request to create a new category.If the category in payload has VisibleToEveryone set to true then permissions are not added.
     * @param category Category
     * @returns Webcom_Configurator_SetupSPA_Models_APIResponse Created specified Category.
     * @throws ApiError
     */
    public static async categoriesAdd(
        category: Webcom_API_Public_Categories_VM_CategoryVM,
    ): Promise<Webcom_Configurator_SetupSPA_Models_APIResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/products/v1/categories`,
            body: category,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Replaces permissions for category.
     * You can use the following request to replace permissions for the specified category with the permissions provided in the request.
     * @param id Target category Id
     * @param permissions List of selected permissions for category
     * @returns any Updated permissions for specified category.
     * @throws ApiError
     */
    public static async categoriesUpdatePermissions(
        id: number,
        permissions: Array<number>,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/products/v1/categories/${id}/permission`,
            body: permissions,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category/Permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Add permission for category.
     * You can use the following request to add a permission to an existing category.
     * @param id Target category Id
     * @param permissionId Category permission Id
     * @returns any Created new permission for specified category.
     * @throws ApiError
     */
    public static async categoriesAddPermission(
        id: number,
        permissionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/products/v1/categories/${id}/permission`,
            body: permissionId,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category/Permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Delete permission for category.
     * You can use the following request to remove a permission that is assigned to a specific category.
     * @param id Target category Id
     * @param permissionId Category permission Id
     * @returns void
     * @throws ApiError
     */
    public static async categoriesRemovePermission(
        id: number,
        permissionId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/products/v1/categories/${id}/permission/${permissionId}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category/Permission permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a unique System ID based on the provided category name.
     * You can use the following request to get a unique System ID for the provided name. The name is created by adding suffix cpq to the provided name.ExampleName -&gt; ExampleName_cpqIf the name is not unique, an integer is added to the suffix.ExampleName -&gt; ExampleName_1_cpqThis endpoint uses query parameter ?nameExample:    /api/products/v1/categories/systemId?name=ExampleName
     * @returns string OK
     * @throws ApiError
     */
    public static async categoriesGetSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/categories/systemId`,
            errors: {
                401: `Authentication failed.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the category translations.
     * You can use the following request to retrieve list of all translations for a category specified by its ID and dictionary ID.
     * @param id
     * @param dictionaryId
     * @returns Webcom_API_Public_Categories_VM_CategoryTranslationVM List of all translations for specified category and dictionary.
     * @throws ApiError
     */
    public static async categoriesGetCategoryTranslation(
        id: number,
        dictionaryId: number,
    ): Promise<Array<Webcom_API_Public_Categories_VM_CategoryTranslationVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/products/v1/categories/${id}/translation/${dictionaryId}`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Translations not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Replaces translations for specified category.
     * You can use the following request to replace translations for the specified category with the translations provided in the request.     FieldType     1 - Name     2 - Description                 Actual request body example    [        {                    }, ...............    ]            For every dictionary translation has both Name and Description, if one of them is not provided for dictionary, empty value will be saved instead.
     * @param id
     * @param attributeTranslations
     * @returns any Updated translations for specified category.
     * @throws ApiError
     */
    public static async categoriesSaveAttributeTranslations(
        id: number,
        attributeTranslations: Array<Webcom_API_Public_Categories_VM_CategoryTranslationVM>,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/products/v1/categories/${id}/translation`,
            body: attributeTranslations,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication failed.`,
                404: `Category/Permission not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

}