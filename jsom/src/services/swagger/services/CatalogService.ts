/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Cart_VM_SubscriptionBilling_ProductRatePlanVM } from '../models/Webcom_API_RD_Cart_VM_SubscriptionBilling_ProductRatePlanVM';
import type { Webcom_API_RD_Catalog_AddToQuoteResponse } from '../models/Webcom_API_RD_Catalog_AddToQuoteResponse';
import type { Webcom_API_RD_Catalog_CatalogResponse } from '../models/Webcom_API_RD_Catalog_CatalogResponse';
import type { Webcom_API_RD_Catalog_CategoryVM } from '../models/Webcom_API_RD_Catalog_CategoryVM';
import type { Webcom_API_RD_Catalog_QuickAddResponse } from '../models/Webcom_API_RD_Catalog_QuickAddResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import type { Webcom_Configurator_Catalogue_CatalogueFilterOptions } from '../models/Webcom_Configurator_Catalogue_CatalogueFilterOptions';
import { request as __request } from '../core/request';

export class CatalogService {

    /**
     * Gets the initialize data.
     * @returns Webcom_API_RD_Catalog_CatalogResponse OK
     * @throws ApiError
     */
    public static async catalogGetInitData(): Promise<Webcom_API_RD_Catalog_CatalogResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetInitData`,
        });
        return result.body;
    }

    /**
     * Gets the categories data.
     * @returns Webcom_API_RD_Catalog_CategoryVM OK
     * @throws ApiError
     */
    public static async catalogGetCategoriesData(): Promise<Array<Webcom_API_RD_Catalog_CategoryVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetCategoriesData`,
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param filterInPromotion
     * @param filterSearch
     * @param filterCategoryId
     * @param filterName
     * @param filterDescription
     * @param filterPartNumber
     * @param filterType
     * @param filterLowerPrice
     * @param filterUpperPrice
     * @param filterProductIdCsv
     * @param filterPageNumber
     * @param filterPageSize
     * @param filterIsAttributeBasedSearch
     * @param filterSortOrderBy
     * @param filterIsSortAscending
     * @param filterSystemId
     * @param filterSystemIdCsv
     * @returns Webcom_API_RD_Catalog_CatalogResponse OK
     * @throws ApiError
     */
    public static async catalogGetData(
        filterInPromotion?: boolean,
        filterSearch?: string,
        filterCategoryId?: number,
        filterName?: string,
        filterDescription?: string,
        filterPartNumber?: string,
        filterType?: string,
        filterLowerPrice?: string,
        filterUpperPrice?: string,
        filterProductIdCsv?: string,
        filterPageNumber?: number,
        filterPageSize?: number,
        filterIsAttributeBasedSearch?: boolean,
        filterSortOrderBy?: 0 | 1 | 2 | 3 | 4 | 5,
        filterIsSortAscending?: boolean,
        filterSystemId?: string,
        filterSystemIdCsv?: string,
    ): Promise<Webcom_API_RD_Catalog_CatalogResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetData`,
            query: {
                'filter.inPromotion': filterInPromotion,
                'filter.search': filterSearch,
                'filter.categoryId': filterCategoryId,
                'filter.name': filterName,
                'filter.description': filterDescription,
                'filter.partNumber': filterPartNumber,
                'filter.type': filterType,
                'filter.lowerPrice': filterLowerPrice,
                'filter.upperPrice': filterUpperPrice,
                'filter.productIdCsv': filterProductIdCsv,
                'filter.pageNumber': filterPageNumber,
                'filter.pageSize': filterPageSize,
                'filter.isAttributeBasedSearch': filterIsAttributeBasedSearch,
                'filter.sortOrderBy': filterSortOrderBy,
                'filter.isSortAscending': filterIsSortAscending,
                'filter.systemId': filterSystemId,
                'filter.systemIdCsv': filterSystemIdCsv,
            },
        });
        return result.body;
    }

    /**
     * Gets the products count.
     * @param filterInPromotion
     * @param filterSearch
     * @param filterCategoryId
     * @param filterName
     * @param filterDescription
     * @param filterPartNumber
     * @param filterType
     * @param filterLowerPrice
     * @param filterUpperPrice
     * @param filterProductIdCsv
     * @param filterPageNumber
     * @param filterPageSize
     * @param filterIsAttributeBasedSearch
     * @param filterSortOrderBy
     * @param filterIsSortAscending
     * @param filterSystemId
     * @param filterSystemIdCsv
     * @returns number OK
     * @throws ApiError
     */
    public static async catalogGetProductsCount(
        filterInPromotion?: boolean,
        filterSearch?: string,
        filterCategoryId?: number,
        filterName?: string,
        filterDescription?: string,
        filterPartNumber?: string,
        filterType?: string,
        filterLowerPrice?: string,
        filterUpperPrice?: string,
        filterProductIdCsv?: string,
        filterPageNumber?: number,
        filterPageSize?: number,
        filterIsAttributeBasedSearch?: boolean,
        filterSortOrderBy?: 0 | 1 | 2 | 3 | 4 | 5,
        filterIsSortAscending?: boolean,
        filterSystemId?: string,
        filterSystemIdCsv?: string,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetProductsCount`,
            query: {
                'filter.inPromotion': filterInPromotion,
                'filter.search': filterSearch,
                'filter.categoryId': filterCategoryId,
                'filter.name': filterName,
                'filter.description': filterDescription,
                'filter.partNumber': filterPartNumber,
                'filter.type': filterType,
                'filter.lowerPrice': filterLowerPrice,
                'filter.upperPrice': filterUpperPrice,
                'filter.productIdCsv': filterProductIdCsv,
                'filter.pageNumber': filterPageNumber,
                'filter.pageSize': filterPageSize,
                'filter.isAttributeBasedSearch': filterIsAttributeBasedSearch,
                'filter.sortOrderBy': filterSortOrderBy,
                'filter.isSortAscending': filterIsSortAscending,
                'filter.systemId': filterSystemId,
                'filter.systemIdCsv': filterSystemIdCsv,
            },
        });
        return result.body;
    }

    /**
     * Gets the replace product identifier.
     * @param orginalProductId The orginal product identifier.
     * @returns number OK
     * @throws ApiError
     */
    public static async catalogGetReplaceProductId(
        orginalProductId: number,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetReplaceProductId`,
            query: {
                'orginalProductId': orginalProductId,
            },
        });
        return result.body;
    }

    /**
     * Gets the quikc add.
     * @param search The search.
     * @returns Webcom_API_RD_Catalog_QuickAddResponse OK
     * @throws ApiError
     */
    public static async catalogGetQuickAdd(
        search: string,
    ): Promise<Webcom_API_RD_Catalog_QuickAddResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetQuickAdd`,
            query: {
                'search': search,
            },
        });
        return result.body;
    }

    /**
     * Resets this instance.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async catalogReset(): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Catalog/Reset`,
        });
        return result.body;
    }

    /**
     * Clears the abs.
     * @param filter The filter.
     * @returns Webcom_API_RD_Catalog_CatalogResponse OK
     * @throws ApiError
     */
    public static async catalogClearAbs(
        filter: Webcom_Configurator_Catalogue_CatalogueFilterOptions,
    ): Promise<Webcom_API_RD_Catalog_CatalogResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Catalog/ClearAbs`,
            body: filter,
        });
        return result.body;
    }

    /**
     * Gets the search suggestions.
     * @param query The query.
     * @returns string OK
     * @throws ApiError
     */
    public static async catalogGetSearchSuggestions(
        query: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetSearchSuggestions`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Adds to quote.
     * @param productId The product identifier.
     * @param quantity The quantity.
     * @param section
     * @returns Webcom_API_RD_Catalog_AddToQuoteResponse OK
     * @throws ApiError
     */
    public static async catalogAddToQuote(
        productId: number,
        quantity: number,
        section?: string,
    ): Promise<Webcom_API_RD_Catalog_AddToQuoteResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Catalog/AddToQuote`,
            query: {
                'productId': productId,
                'quantity': quantity,
                'section': section,
            },
        });
        return result.body;
    }

    /**
     * This service will try to find product configuration based on catalog code.
     * @param catalogCode The catalog code.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async catalogQuickConfig(
        catalogCode: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Catalog/QuickConfig`,
            query: {
                'catalogCode': catalogCode,
            },
        });
        return result.body;
    }

    /**
     * Gets list of all product categories.
     * @returns Webcom_API_RD_Catalog_CategoryVM OK
     * @throws ApiError
     */
    public static async catalogGetCategories(): Promise<Array<Webcom_API_RD_Catalog_CategoryVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetCategories`,
        });
        return result.body;
    }

    /**
     * Gets SB product RatePlan
     * @param productId The catalog code.
     * @returns Webcom_API_RD_Cart_VM_SubscriptionBilling_ProductRatePlanVM OK
     * @throws ApiError
     */
    public static async catalogGetRatePlanForProductAndMarket(
        productId: number,
    ): Promise<Webcom_API_RD_Cart_VM_SubscriptionBilling_ProductRatePlanVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Catalog/GetRatePlanForProductAndMarket`,
            query: {
                'productId': productId,
            },
        });
        return result.body;
    }

}