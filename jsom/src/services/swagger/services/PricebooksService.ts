/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_Pricebooks_History_FilterDataRequest } from '../models/Webcom_API_Admin_Pricebooks_History_FilterDataRequest';
import type { Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse } from '../models/Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse';
import type { Webcom_API_Admin_Pricebooks_PricebookDefinitionResponse } from '../models/Webcom_API_Admin_Pricebooks_PricebookDefinitionResponse';
import type { Webcom_API_Admin_Pricebooks_PricebookDefinitionVM } from '../models/Webcom_API_Admin_Pricebooks_PricebookDefinitionVM';
import type { Webcom_API_Admin_Pricebooks_PricebookEntriesResponse } from '../models/Webcom_API_Admin_Pricebooks_PricebookEntriesResponse';
import type { Webcom_API_Admin_Pricebooks_PricebookEntryVM } from '../models/Webcom_API_Admin_Pricebooks_PricebookEntryVM';
import type { Webcom_API_Admin_Pricebooks_PricebookSettingsVM } from '../models/Webcom_API_Admin_Pricebooks_PricebookSettingsVM';
import type { Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse } from '../models/Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse';
import type { Webcom_API_Admin_Pricebooks_PricebooksResponse } from '../models/Webcom_API_Admin_Pricebooks_PricebooksResponse';
import type { Webcom_API_Admin_Pricebooks_PricebookTableVM } from '../models/Webcom_API_Admin_Pricebooks_PricebookTableVM';
import type { Webcom_API_Admin_Pricebooks_SavePricebookDefinitionResponse } from '../models/Webcom_API_Admin_Pricebooks_SavePricebookDefinitionResponse';
import type { Webcom_API_Admin_Pricebooks_SavePricebookEntryResponse } from '../models/Webcom_API_Admin_Pricebooks_SavePricebookEntryResponse';
import type { Webcom_API_IdNamePair } from '../models/Webcom_API_IdNamePair';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class PricebooksService {

    /**
     * Gets market selection data.
     * @returns Webcom_API_Admin_Pricebooks_PricebooksResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetMarketSelectionInitData(): Promise<Webcom_API_Admin_Pricebooks_PricebooksResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetMarketSelectionInitData`,
        });
        return result.body;
    }

    /**
     * Sets market filter to current session.
     * @param filter Filter
     * @returns void
     * @throws ApiError
     */
    public static async pricebooksSetMarketFilter(
        filter: string,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/SetMarketFilter`,
            query: {
                'filter': filter,
            },
        });
        return result.body;
    }

    /**
     * Gets pricebook settings data.
     * @returns Webcom_API_Admin_Pricebooks_PricebookSettingsVM OK
     * @throws ApiError
     */
    public static async pricebooksGetPricebookSettingsInitData(): Promise<Webcom_API_Admin_Pricebooks_PricebookSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetPricebookSettingsInitData`,
        });
        return result.body;
    }

    /**
     * Gets all pricebooks in particular market
     * @param marketId market id as in database
     * @returns Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetPricebooksPerMarketInitData(
        marketId: number,
    ): Promise<Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetPricebooksPerMarketInitData`,
            query: {
                'marketId': marketId,
            },
        });
        return result.body;
    }

    /**
     * Gets all pricebooks in particular market
     * @param marketId market id as in database
     * @returns Webcom_API_Admin_Pricebooks_PricebookTableVM OK
     * @throws ApiError
     */
    public static async pricebooksGetAllPricebooksPerMarket(
        marketId: number,
    ): Promise<Array<Webcom_API_Admin_Pricebooks_PricebookTableVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetAllPricebooksPerMarket`,
            query: {
                'marketId': marketId,
            },
        });
        return result.body;
    }

    /**
     * Gets filtered and sorted pricebooks in particular market.
     * @param marketId Market Id.
     * @param filter Filtering and sorting criteria.
     * @returns Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetFilteredPricebooksPerMarket(
        marketId: number,
        filter: Webcom_API_Admin_Pricebooks_History_FilterDataRequest,
    ): Promise<Webcom_API_Admin_Pricebooks_PricebooksPerMarketResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/GetFilteredPricebooksPerMarket`,
            query: {
                'marketId': marketId,
            },
            body: filter,
        });
        return result.body;
    }

    /**
     * Deletes pricebook by id.
     * @param id Pricebook id.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async pricebooksDeletePricebook(
        id: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/DeletePricebook`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets the first page of pricebook entries for the specified pricebook.
     * @param pricebookId Pricebook id.
     * @returns Webcom_API_Admin_Pricebooks_PricebookEntriesResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetPricebookEntriesInitData(
        pricebookId: number,
    ): Promise<Webcom_API_Admin_Pricebooks_PricebookEntriesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetPricebookEntriesInitData`,
            query: {
                'pricebookId': pricebookId,
            },
        });
        return result.body;
    }

    /**
     * Gets pricebook entries for the specified pricebook which satisfy filtering, paging and sorting criteria.
     * @param pricebookId Pricebook id.
     * @param filter Filter - contains filtering, sorting and paging parameters.
     * @returns Webcom_API_Admin_Pricebooks_PricebookEntriesResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetFilteredPricebookEntries(
        pricebookId: number,
        filter: Webcom_API_Admin_Pricebooks_History_FilterDataRequest,
    ): Promise<Webcom_API_Admin_Pricebooks_PricebookEntriesResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/GetFilteredPricebookEntries`,
            query: {
                'pricebookId': pricebookId,
            },
            body: filter,
        });
        return result.body;
    }

    /**
     * Saves pricebook settings
     * @param pricebookSettings Pricebook settings
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async pricebooksSavePricebookSettings(
        pricebookSettings: Webcom_API_Admin_Pricebooks_PricebookSettingsVM,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/SavePricebookSettings`,
            body: pricebookSettings,
        });
        return result.body;
    }

    /**
     * Gets the history data.
     * @param filter The filter.
     * @returns Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetHistoryData(
        filter: Webcom_API_Admin_Pricebooks_History_FilterDataRequest,
    ): Promise<Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/GetHistoryData`,
            body: filter,
        });
        return result.body;
    }

    /**
     * Gets the initialize history data.
     * @returns Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetHistoryInitData(): Promise<Webcom_API_Admin_Pricebooks_History_PricebookHistoryResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetHistoryInitData`,
        });
        return result.body;
    }

    /**
     * Gets the definition of pricebook with specified id.
     * @param marketId The market id.
     * @param pricebookId The pricebook id.
     * @returns Webcom_API_Admin_Pricebooks_PricebookDefinitionResponse OK
     * @throws ApiError
     */
    public static async pricebooksGetPricebookDefinitionInitData(
        marketId: number,
        pricebookId: number,
    ): Promise<Webcom_API_Admin_Pricebooks_PricebookDefinitionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetPricebookDefinitionInitData`,
            query: {
                'marketId': marketId,
                'pricebookId': pricebookId,
            },
        });
        return result.body;
    }

    /**
     * Saves pricebook definition
     * @param pricebookDefinitionVm Pricebook definition VM
     * @returns Webcom_API_Admin_Pricebooks_SavePricebookDefinitionResponse OK
     * @throws ApiError
     */
    public static async pricebooksSavePricebookDefinition(
        pricebookDefinitionVm: Webcom_API_Admin_Pricebooks_PricebookDefinitionVM,
    ): Promise<Webcom_API_Admin_Pricebooks_SavePricebookDefinitionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/SavePricebookDefinition`,
            body: pricebookDefinitionVm,
        });
        return result.body;
    }

    /**
     * Saves or edits pricebook entry.
     * @param pricebookId Pricebook Id.
     * @param pricebookEntryVm Pricebook entry data.
     * @returns Webcom_API_Admin_Pricebooks_SavePricebookEntryResponse OK
     * @throws ApiError
     */
    public static async pricebooksSavePricebookEntry(
        pricebookId: number,
        pricebookEntryVm: Webcom_API_Admin_Pricebooks_PricebookEntryVM,
    ): Promise<Webcom_API_Admin_Pricebooks_SavePricebookEntryResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/SavePricebookEntry`,
            query: {
                'pricebookId': pricebookId,
            },
            body: pricebookEntryVm,
        });
        return result.body;
    }

    /**
     * Deletes pricebook entry specified by entryId from pricebook specified by pricebook Id.
     * @param pricebookId Pricebook id.
     * @param entryId Entry id.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async pricebooksDeletePricebookEntry(
        pricebookId: number,
        entryId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/DeletePricebookEntry`,
            query: {
                'pricebookId': pricebookId,
                'entryId': entryId,
            },
        });
        return result.body;
    }

    /**
     * Gets custom fields for provided field type id
     * @param fieldTypeId Field type id (user,billTo,shipTo,endUser)
     * @returns Webcom_API_IdNamePair OK
     * @throws ApiError
     */
    public static async pricebooksGetCustomFields(
        fieldTypeId: number,
    ): Promise<Array<Webcom_API_IdNamePair>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GetCustomFields`,
            query: {
                'fieldTypeId': fieldTypeId,
            },
        });
        return result.body;
    }

    /**
     * @param pricebookId
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async pricebooksDeleteAllEntries(
        pricebookId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Pricebooks/DeleteAllEntries`,
            query: {
                'pricebookId': pricebookId,
            },
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async pricebooksGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Pricebooks/GenerateSecretKey`,
        });
        return result.body;
    }

}