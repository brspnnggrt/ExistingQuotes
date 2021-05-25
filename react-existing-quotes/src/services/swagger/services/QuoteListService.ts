/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments } from '../models/SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments';
import type { Webcom_API_IdNamePair } from '../models/Webcom_API_IdNamePair';
import type { Webcom_API_RD_QuoteList_ChangeStatusRequest } from '../models/Webcom_API_RD_QuoteList_ChangeStatusRequest';
import type { Webcom_API_RD_QuoteList_ExecuteActionRequest } from '../models/Webcom_API_RD_QuoteList_ExecuteActionRequest';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class QuoteListService {

    /**
     * Gets the metadata for the quote list.
     * @param tabId
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListGetInitData(
        tabId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/QuoteList/GetInitData`,
            query: {
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * Gets the filter suggestions.
     * @param requestSearchString
     * @param requestColumns
     * @param requestCriteria
     * @param requestSkip
     * @param requestTake
     * @param requestOrderBy
     * @param requestUsePaging
     * @param requestTabId
     * @param requestLoadDelegatedApproversQuotes
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListGetFilterSuggestions(
        requestSearchString?: string,
        requestColumns?: Array<string>,
        requestCriteria?: Array<any[]>,
        requestSkip?: number,
        requestTake?: number,
        requestOrderBy?: Array<string>,
        requestUsePaging?: boolean,
        requestTabId?: number,
        requestLoadDelegatedApproversQuotes?: boolean,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/QuoteList/GetFilterSuggestions`,
            query: {
                'request.searchString': requestSearchString,
                'request.columns': requestColumns,
                'request.criteria': requestCriteria,
                'request.skip': requestSkip,
                'request.take': requestTake,
                'request.orderBy': requestOrderBy,
                'request.usePaging': requestUsePaging,
                'request.tabId': requestTabId,
                'request.loadDelegatedApproversQuotes': requestLoadDelegatedApproversQuotes,
            },
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param requestSearchString
     * @param requestColumns
     * @param requestCriteria
     * @param requestSkip
     * @param requestTake
     * @param requestOrderBy
     * @param requestUsePaging
     * @param requestTabId
     * @param requestLoadDelegatedApproversQuotes
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListGetData(
        requestSearchString?: string,
        requestColumns?: Array<string>,
        requestCriteria?: Array<any[]>,
        requestSkip?: number,
        requestTake?: number,
        requestOrderBy?: Array<string>,
        requestUsePaging?: boolean,
        requestTabId?: number,
        requestLoadDelegatedApproversQuotes?: boolean,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/QuoteList/GetData`,
            query: {
                'request.searchString': requestSearchString,
                'request.columns': requestColumns,
                'request.criteria': requestCriteria,
                'request.skip': requestSkip,
                'request.take': requestTake,
                'request.orderBy': requestOrderBy,
                'request.usePaging': requestUsePaging,
                'request.tabId': requestTabId,
                'request.loadDelegatedApproversQuotes': requestLoadDelegatedApproversQuotes,
            },
        });
        return result.body;
    }

    /**
     * Changes the status.
     * @param request The request.
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListChangeStatus(
        request: Webcom_API_RD_QuoteList_ChangeStatusRequest,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/QuoteList/ChangeStatus`,
            body: request,
        });
        return result.body;
    }

    /**
     * Executes the action.
     * @param request The request.
     * @returns SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments OK
     * @throws ApiError
     */
    public static async quoteListExecuteAction(
        request: Webcom_API_RD_QuoteList_ExecuteActionRequest,
    ): Promise<SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/QuoteList/ExecuteAction`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the filter list object as serialized string.
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListLoadQuoteListFilters(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/QuoteList/LoadQuoteListFilters`,
        });
        return result.body;
    }

    /**
     * Saves the filter list object as serialized string.
     * @param filters Serialized filters.
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListSaveQuoteListFilters(
        filters: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/QuoteList/SaveQuoteListFilters`,
            body: filters,
        });
        return result.body;
    }

    /**
     * Returns min and max value for given column and tab.
     * @param column Column name.
     * @param tabId Id of tab.
     * @returns any OK
     * @throws ApiError
     */
    public static async quoteListGetMinAndMaxForColumn(
        column: string,
        tabId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/QuoteList/GetMinAndMaxForColumn`,
            query: {
                'column': column,
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * Gets the user types for reassign.
     * @returns Webcom_API_IdNamePair OK
     * @throws ApiError
     */
    public static async quoteListGetUserTypesForReassign(): Promise<Array<Webcom_API_IdNamePair>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/QuoteList/GetUserTypesForReassign`,
        });
        return result.body;
    }

    /**
     * Gets the users for reassign.
     * @param userTypeId The user type identifier.
     * @returns Webcom_API_IdNamePair OK
     * @throws ApiError
     */
    public static async quoteListGetUsersForReassign(
        userTypeId: number,
    ): Promise<Array<Webcom_API_IdNamePair>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/QuoteList/GetUsersForReassign`,
            query: {
                'userTypeId': userTypeId,
            },
        });
        return result.body;
    }

    /**
     * Reassigns the specified new user identifier.
     * @param newUserId The new user identifier.
     * @param cryptedOwnerId
     * @param cryptedCartId
     * @param selectedTab
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async quoteListReassign(
        newUserId: number,
        cryptedOwnerId: string,
        cryptedCartId: string,
        selectedTab: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/QuoteList/Reassign`,
            query: {
                'newUserId': newUserId,
                'cryptedOwnerId': cryptedOwnerId,
                'cryptedCartId': cryptedCartId,
                'selectedTab': selectedTab,
            },
        });
        return result.body;
    }

}