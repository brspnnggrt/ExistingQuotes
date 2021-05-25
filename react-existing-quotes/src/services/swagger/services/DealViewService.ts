/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SAP_CPQ_Quote_Core_Models_DealStructureModel } from '../models/SAP_CPQ_Quote_Core_Models_DealStructureModel';
import type { SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField } from '../models/SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField';
import type { SAP_CPQ_Quote_Interfaces_IDealStructureModel } from '../models/SAP_CPQ_Quote_Interfaces_IDealStructureModel';
import type { Webcom_API_RD_Cart_CartResponse } from '../models/Webcom_API_RD_Cart_CartResponse';
import type { Webcom_API_RD_Cart_DealViewResponse } from '../models/Webcom_API_RD_Cart_DealViewResponse';
import type { Webcom_API_RD_Cart_VM_DistinctValuesVM } from '../models/Webcom_API_RD_Cart_VM_DistinctValuesVM';
import type { Webcom_API_RD_Cart_VM_FilterMetadataVM } from '../models/Webcom_API_RD_Cart_VM_FilterMetadataVM';
import type { Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM } from '../models/Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM';
import type { Webcom_API_RD_Cart_VM_Sections_SectionDistributionRequest } from '../models/Webcom_API_RD_Cart_VM_Sections_SectionDistributionRequest';
import type { Webcom_API_RD_Cart_VM_Sections_SectionTotalsRequest } from '../models/Webcom_API_RD_Cart_VM_Sections_SectionTotalsRequest';
import type { Webcom_API_RD_Cart_VM_Sections_SectionTotalsVM } from '../models/Webcom_API_RD_Cart_VM_Sections_SectionTotalsVM';
import type { Webcom_API_RD_DealStructureModelVM } from '../models/Webcom_API_RD_DealStructureModelVM';
import type { Webcom_Configurator_Core_IdNamePair } from '../models/Webcom_Configurator_Core_IdNamePair';
import { request as __request } from '../core/request';

export class DealViewService {

    /**
     * @param tabId
     * @returns Webcom_API_RD_Cart_DealViewResponse OK
     * @throws ApiError
     */
    public static async dealViewGetDealViewInitData(
        tabId: number,
    ): Promise<Webcom_API_RD_Cart_DealViewResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetDealViewInitData`,
            query: {
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * @param quoteId
     * @param dealStructure
     * @returns void
     * @throws ApiError
     */
    public static async dealViewBulkUpdateDealStructure(
        quoteId: number,
        dealStructure: Array<Webcom_API_RD_DealStructureModelVM>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/DealView/BulkUpdateDealStructure`,
            query: {
                'quoteId': quoteId,
            },
            body: dealStructure,
        });
        return result.body;
    }

    /**
     * @param itemId
     * @param sectionPath
     * @returns void
     * @throws ApiError
     */
    public static async dealViewMoveItemToSection(
        itemId: number,
        sectionPath: string,
    ): Promise<void> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/MoveItemToSection`,
            query: {
                'itemId': itemId,
                'sectionPath': sectionPath,
            },
        });
        return result.body;
    }

    /**
     * @param sectionPath
     * @returns SAP_CPQ_Quote_Interfaces_IDealStructureModel OK
     * @throws ApiError
     */
    public static async dealViewGetDealSectionByPath(
        sectionPath: string,
    ): Promise<SAP_CPQ_Quote_Interfaces_IDealStructureModel> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetDealSectionByPath`,
            query: {
                'sectionPath': sectionPath,
            },
        });
        return result.body;
    }

    /**
     * Sets the active editable group.
     * @param editableGroup The editable group.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async dealViewSetActiveEditableGroup(
        editableGroup: number,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/DealView/SetActiveEditableGroup`,
            query: {
                'editableGroup': editableGroup,
            },
        });
        return result.body;
    }

    /**
     * Sets the active editable group.
     * @param searchString The editable group.
     * @returns SAP_CPQ_Quote_Core_Models_DealStructureModel OK
     * @throws ApiError
     */
    public static async dealViewSearchSectionsByName(
        searchString: string,
    ): Promise<Array<SAP_CPQ_Quote_Core_Models_DealStructureModel>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/SearchSectionsByName`,
            query: {
                'searchString': searchString,
            },
        });
        return result.body;
    }

    /**
     * Gets deal structure models count for current quote.
     * @returns number OK
     * @throws ApiError
     */
    public static async dealViewDealStructureModelsCount(): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/DealStructureModelsCount`,
        });
        return result.body;
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static async dealViewDownloadSectionsTemplate(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/DownloadSectionsTemplate`,
        });
        return result.body;
    }

    /**
     * @param filterQuery
     * @returns any OK
     * @throws ApiError
     */
    public static async dealViewExportDealStructure(
        filterQuery: Array<string>,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/ExportDealStructure`,
            query: {
                'filterQuery': filterQuery,
            },
        });
        return result.body;
    }

    /**
     * Gets filterable standard and item custom fields.
     * @returns SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField OK
     * @throws ApiError
     */
    public static async dealViewGetFilterableItemColumns(): Promise<Array<SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetFilterableItemColumns`,
        });
        return result.body;
    }

    /**
     * Get min and max values for given quote item custom field.
     * @param column Custom field name
     * @returns Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM OK
     * @throws ApiError
     */
    public static async dealViewGetMinAndMaxForColumn(
        column: string,
    ): Promise<Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetMinAndMaxForColumn`,
            query: {
                'column': column,
            },
        });
        return result.body;
    }

    /**
     * Get list of custom field available values for given quote custom field based on search string.
     * @param column Custom field name
     * @param searchString Search string
     * @returns string OK
     * @throws ApiError
     */
    public static async dealViewGetCustomFieldAutocomplete(
        column: string,
        searchString: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetCustomFieldAutocomplete`,
            query: {
                'column': column,
                'searchString': searchString,
            },
        });
        return result.body;
    }

    /**
     * Get list of distinct values if there are fewer than 10.
     * @param column Custom field name
     * @returns Webcom_API_RD_Cart_VM_DistinctValuesVM OK
     * @throws ApiError
     */
    public static async dealViewGetFieldDistinctValues(
        column: string,
    ): Promise<Webcom_API_RD_Cart_VM_DistinctValuesVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetFieldDistinctValues`,
            query: {
                'column': column,
            },
        });
        return result.body;
    }

    /**
     * Get list of distinct section paths if there are fewer than 10.
     * @returns Webcom_API_RD_Cart_VM_DistinctValuesVM OK
     * @throws ApiError
     */
    public static async dealViewGetSectionsDistinctPaths(): Promise<Webcom_API_RD_Cart_VM_DistinctValuesVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetSectionsDistinctPaths`,
        });
        return result.body;
    }

    /**
     * Get list of attribute custom field available values for given quote custom field based on search string.
     * @param column Custom field name
     * @param searchString Custom field id
     * @returns Webcom_Configurator_Core_IdNamePair OK
     * @throws ApiError
     */
    public static async dealViewGetCustomFieldAutocompleteAttribute(
        column: string,
        searchString: string,
    ): Promise<Array<Webcom_Configurator_Core_IdNamePair>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetCustomFieldAutocompleteAttribute`,
            query: {
                'column': column,
                'searchString': searchString,
            },
        });
        return result.body;
    }

    /**
     * Get medatata for filterable columns.
     * @returns Webcom_API_RD_Cart_VM_FilterMetadataVM OK
     * @throws ApiError
     */
    public static async dealViewGetFiltersMetadata(): Promise<Webcom_API_RD_Cart_VM_FilterMetadataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetFiltersMetadata`,
        });
        return result.body;
    }

    /**
     * Get list of section paths for given quote custom field based on search string.
     * @param searchString Search string
     * @returns string OK
     * @throws ApiError
     */
    public static async dealViewGetSectionPaths(
        searchString: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetSectionPaths`,
            query: {
                'searchString': searchString,
            },
        });
        return result.body;
    }

    /**
     * @param filterQuery
     * @returns number OK
     * @throws ApiError
     */
    public static async dealViewGetFilteredDealStructure(
        filterQuery: Array<any[]>,
    ): Promise<Array<number>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/GetFilteredDealStructure`,
            query: {
                'filterQuery': filterQuery,
            },
        });
        return result.body;
    }

    /**
     * Distribute sections
     * @param request
     * @returns void
     * @throws ApiError
     */
    public static async dealViewDistributeSections(
        request: Webcom_API_RD_Cart_VM_Sections_SectionDistributionRequest,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/DealView/DistributeSections`,
            body: request,
        });
        return result.body;
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public static async dealViewRedistribute(): Promise<void> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/DealView/Redistribute`,
        });
        return result.body;
    }

    /**
     * Retract distribution
     * @param request
     * @returns void
     * @throws ApiError
     */
    public static async dealViewRetractDistribution(
        request: Webcom_API_RD_Cart_VM_Sections_SectionDistributionRequest,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/DealView/RetractDistribution`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the section totals.
     * @param request The request.
     * @returns Webcom_API_RD_Cart_VM_Sections_SectionTotalsVM OK
     * @throws ApiError
     */
    public static async dealViewGetSectionTotals(
        request: Webcom_API_RD_Cart_VM_Sections_SectionTotalsRequest,
    ): Promise<Array<Webcom_API_RD_Cart_VM_Sections_SectionTotalsVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/DealView/GetSectionTotals`,
            body: request,
        });
        return result.body;
    }

}