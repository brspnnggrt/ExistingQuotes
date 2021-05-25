/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm } from '../models/Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm';
import type { Webcom_API_Admin_SaveQuoteTableTranslationsRequest } from '../models/Webcom_API_Admin_SaveQuoteTableTranslationsRequest';
import type { Webcom_API_Admin_TablesOnQuotes_DefineColumnGroupsModelVm } from '../models/Webcom_API_Admin_TablesOnQuotes_DefineColumnGroupsModelVm';
import type { Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm } from '../models/Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm } from '../models/Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm } from '../models/Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTablePermissionResponse } from '../models/Webcom_API_Admin_TablesOnQuotes_QuoteTablePermissionResponse';
import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationsVM } from '../models/Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationsVM';
import type { Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableActionsRequest } from '../models/Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableActionsRequest';
import type { Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableDefinitionRequest } from '../models/Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableDefinitionRequest';
import type { Webcom_API_Admin_TablesOnQuotes_TablesOnQuotesResponse } from '../models/Webcom_API_Admin_TablesOnQuotes_TablesOnQuotesResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class TablesOnQuotesService {

    /**
     * Gets the initialize data.
     * @param tableId
     * @returns Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetQuoteTableInitData(
        tableId: number,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetQuoteTableInitData`,
            query: {
                'tableId': tableId,
            },
        });
        return result.body;
    }

    /**
     * Saves quote table model with permissions assigned to it
     * @param tableModel Quote table model
     * @returns Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesSaveQuoteTableModelWithPermissions(
        tableModel: Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableDefinitionRequest,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_QuoteTableDefinitionVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/SaveQuoteTableModelWithPermissions`,
            body: tableModel,
        });
        return result.body;
    }

    /**
     * Gets formated display text for permissions
     * @param item Quote table permission item representation
     * @returns string OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetFormatedPermsissionText(
        item: Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/GetFormatedPermsissionText`,
            body: item,
        });
        return result.body;
    }

    /**
     * Gets the list of quote table columns for table identifier
     * @param tableId Quote table id
     * @returns Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetQuoteTableColumnList(
        tableId: number,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetQuoteTableColumnList`,
            query: {
                'tableId': tableId,
            },
        });
        return result.body;
    }

    /**
     * Gets all cpq permissions and statuses .
     * @returns Webcom_API_Admin_TablesOnQuotes_QuoteTablePermissionResponse OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetAllPermissionsAndStatuses(): Promise<Webcom_API_Admin_TablesOnQuotes_QuoteTablePermissionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetAllPermissionsAndStatuses`,
        });
        return result.body;
    }

    /**
     * Gets quote table groups
     * @param tableId Quote table groups
     * @returns Webcom_API_Admin_TablesOnQuotes_DefineColumnGroupsModelVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetQuoteTableGroups(
        tableId: number,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_DefineColumnGroupsModelVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetQuoteTableGroups`,
            query: {
                'tableId': tableId,
            },
        });
        return result.body;
    }

    /**
     * Saves quote table columns
     * @param data Quote table columns
     * @returns Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesSaveQuoteTableColumns(
        data: Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_DefineColumnModelVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/SaveQuoteTableColumns`,
            body: data,
        });
        return result.body;
    }

    /**
     * Deletes the quote table permission with specified identifier.
     * @param permissionId The permission id.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesDeletePermission(
        permissionId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/DeletePermission`,
            query: {
                'permissionId': permissionId,
            },
        });
        return result.body;
    }

    /**
     * Gets the list of quote table definitions.
     * @returns Webcom_API_Admin_TablesOnQuotes_TablesOnQuotesResponse OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetListInitData(): Promise<Webcom_API_Admin_TablesOnQuotes_TablesOnQuotesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetListInitData`,
        });
        return result.body;
    }

    /**
     * Deletes the quote table with specified identifier.
     * @param tableId The permission id.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesDeleteQuoteTable(
        tableId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/DeleteQuoteTable`,
            query: {
                'tableId': tableId,
            },
        });
        return result.body;
    }

    /**
     * Gets the list of quote table translations.
     * @param tableId
     * @returns Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationsVM OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetQuoteTableTranslations(
        tableId: number,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetQuoteTableTranslations`,
            query: {
                'tableId': tableId,
            },
        });
        return result.body;
    }

    /**
     * Saves quote table translations
     * @param saveQuoteTableTranslationsRequest
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesSaveQuoteTableTranslations(
        saveQuoteTableTranslationsRequest: Webcom_API_Admin_SaveQuoteTableTranslationsRequest,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/SaveQuoteTableTranslations`,
            body: saveQuoteTableTranslationsRequest,
        });
        return result.body;
    }

    /**
     * Gets the initialize data for actions tab.
     * @param tableId The table identifier.
     * @returns Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGetInitDataForActionsTab(
        tableId: number,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GetInitDataForActionsTab`,
            query: {
                'tableId': tableId,
            },
        });
        return result.body;
    }

    /**
     * Saves the quote table actions.
     * @param request The request.
     * @returns Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm OK
     * @throws ApiError
     */
    public static async tablesOnQuotesSaveQuoteTableActions(
        request: Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableActionsRequest,
    ): Promise<Webcom_API_Admin_TablesOnQuotes_QuoteTableActionsDataVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/TablesOnQuotes/SaveQuoteTableActions`,
            body: request,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async tablesOnQuotesGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/TablesOnQuotes/GenerateSecretKey`,
        });
        return result.body;
    }

}