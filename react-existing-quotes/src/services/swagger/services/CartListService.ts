/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_IdNamePair } from '../models/Webcom_API_IdNamePair';
import type { Webcom_API_RD_CartList_CartListInitResponse } from '../models/Webcom_API_RD_CartList_CartListInitResponse';
import type { Webcom_API_RD_CartList_CartListResponse } from '../models/Webcom_API_RD_CartList_CartListResponse';
import type { Webcom_API_RD_CartList_ChangeStatusRequest } from '../models/Webcom_API_RD_CartList_ChangeStatusRequest';
import type { Webcom_API_RD_CartList_ExecuteActionRequest } from '../models/Webcom_API_RD_CartList_ExecuteActionRequest';
import type { Webcom_API_RD_CartList_GetDataByQuoteNumberResponse } from '../models/Webcom_API_RD_CartList_GetDataByQuoteNumberResponse';
import type { Webcom_API_RD_CartList_GetDataRequest } from '../models/Webcom_API_RD_CartList_GetDataRequest';
import type { Webcom_API_RD_CartList_SaveDataRequest } from '../models/Webcom_API_RD_CartList_SaveDataRequest';
import type { Webcom_API_RD_CartList_SaveScParamsResponse } from '../models/Webcom_API_RD_CartList_SaveScParamsResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class CartListService {

    /**
     * Changes the status.
     * @param request The request.
     * @returns Webcom_API_RD_CartList_CartListResponse OK
     * @throws ApiError
     */
    public static async cartListChangeStatus(
        request: Webcom_API_RD_CartList_ChangeStatusRequest,
    ): Promise<Webcom_API_RD_CartList_CartListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/ChangeStatus`,
            body: request,
        });
        return result.body;
    }

    /**
     * Executes the action.
     * @param request The request.
     * @returns Webcom_API_RD_CartList_CartListResponse OK
     * @throws ApiError
     */
    public static async cartListExecuteAction(
        request: Webcom_API_RD_CartList_ExecuteActionRequest,
    ): Promise<Webcom_API_RD_CartList_CartListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/ExecuteAction`,
            body: request,
        });
        return result.body;
    }

    /**
     * Retracts approval process.
     * @param request The request.
     * @returns Webcom_API_RD_CartList_CartListResponse OK
     * @throws ApiError
     */
    public static async cartListRetractApprovalProcess(
        request: Webcom_API_RD_CartList_ExecuteActionRequest,
    ): Promise<Webcom_API_RD_CartList_CartListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/RetractApprovalProcess`,
            body: request,
        });
        return result.body;
    }

    /**
     * Executes the approvals.
     * @param request The request.
     * @returns Webcom_API_RD_CartList_CartListResponse OK
     * @throws ApiError
     */
    public static async cartListExecuteApprovals(
        request: Webcom_API_RD_CartList_ExecuteActionRequest,
    ): Promise<Webcom_API_RD_CartList_CartListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/ExecuteApprovals`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param request The request.
     * @returns Webcom_API_RD_CartList_CartListResponse OK
     * @throws ApiError
     */
    public static async cartListGetData(
        request: Webcom_API_RD_CartList_GetDataRequest,
    ): Promise<Webcom_API_RD_CartList_CartListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/GetData`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the data by quote number.
     * @param quoteNumber The quote number.
     * @returns Webcom_API_RD_CartList_GetDataByQuoteNumberResponse OK
     * @throws ApiError
     */
    public static async cartListGetDataByQuoteNumber(
        quoteNumber?: string,
    ): Promise<Webcom_API_RD_CartList_GetDataByQuoteNumberResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartList/GetDataByQuoteNumber`,
            query: {
                'quoteNumber': quoteNumber,
            },
        });
        return result.body;
    }

    /**
     * Gets the initialize data.
     * @returns Webcom_API_RD_CartList_CartListInitResponse OK
     * @throws ApiError
     */
    public static async cartListGetInitData(): Promise<Webcom_API_RD_CartList_CartListInitResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartList/GetInitData`,
        });
        return result.body;
    }

    /**
     * Gets the user types for reassign.
     * @returns Webcom_API_IdNamePair OK
     * @throws ApiError
     */
    public static async cartListGetUserTypesForReassign(): Promise<Array<Webcom_API_IdNamePair>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/GetUserTypesForReassign`,
        });
        return result.body;
    }

    /**
     * Gets the users for reassign.
     * @param userTypeId The user type identifier.
     * @returns Webcom_API_IdNamePair OK
     * @throws ApiError
     */
    public static async cartListGetUsersForReassign(
        userTypeId: number,
    ): Promise<Array<Webcom_API_IdNamePair>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/GetUsersForReassign`,
            query: {
                'userTypeId': userTypeId,
            },
        });
        return result.body;
    }

    /**
     * Reassigns the specified new user identifier.
     * @param newUserId The new user identifier.
     * @param ownerId The owner identifier.
     * @param cartId The cart identifier.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartListReassign(
        newUserId: number,
        ownerId: number,
        cartId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/Reassign`,
            query: {
                'newUserId': newUserId,
                'ownerId': ownerId,
                'cartId': cartId,
            },
        });
        return result.body;
    }

    /**
     * Saves the data.
     * @param request The request.
     * @returns Webcom_API_RD_CartList_SaveScParamsResponse OK
     * @throws ApiError
     */
    public static async cartListSaveData(
        request: Array<Webcom_API_RD_CartList_SaveDataRequest>,
    ): Promise<Webcom_API_RD_CartList_SaveScParamsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/SaveData`,
            body: request,
        });
        return result.body;
    }

    /**
     * Saves the settings.
     * @param request The request.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartListSaveSettings(
        request: Webcom_API_RD_CartList_GetDataRequest,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartList/SaveSettings`,
            body: request,
        });
        return result.body;
    }

}