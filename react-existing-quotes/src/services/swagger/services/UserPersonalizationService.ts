/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_IdNamePair } from '../models/Webcom_API_IdNamePair';
import type { Webcom_API_NameValuePair } from '../models/Webcom_API_NameValuePair';
import type { Webcom_API_RD_UserPersonalization_ChangedDateFormatRequest } from '../models/Webcom_API_RD_UserPersonalization_ChangedDateFormatRequest';
import type { Webcom_API_RD_UserPersonalization_GetStatesRequest } from '../models/Webcom_API_RD_UserPersonalization_GetStatesRequest';
import type { Webcom_API_RD_UserPersonalization_ModifyDetailsInitVM } from '../models/Webcom_API_RD_UserPersonalization_ModifyDetailsInitVM';
import type { Webcom_API_RD_UserPersonalization_ModifyPasswordInitVM } from '../models/Webcom_API_RD_UserPersonalization_ModifyPasswordInitVM';
import type { Webcom_API_RD_UserPersonalization_SaveChangedPasswordRequest } from '../models/Webcom_API_RD_UserPersonalization_SaveChangedPasswordRequest';
import type { Webcom_API_RD_UserPersonalization_SaveChangedPasswordResponse } from '../models/Webcom_API_RD_UserPersonalization_SaveChangedPasswordResponse';
import type { Webcom_API_RD_UserPersonalization_SaveDetailsRequest } from '../models/Webcom_API_RD_UserPersonalization_SaveDetailsRequest';
import type { Webcom_API_RD_UserPersonalization_SaveDetailsResponse } from '../models/Webcom_API_RD_UserPersonalization_SaveDetailsResponse';
import type { Webcom_API_RD_UserPersonalization_SavePersonalizationRequest } from '../models/Webcom_API_RD_UserPersonalization_SavePersonalizationRequest';
import type { Webcom_API_RD_UserPersonalization_SavePersonalizationResponse } from '../models/Webcom_API_RD_UserPersonalization_SavePersonalizationResponse';
import type { Webcom_API_RD_UserPersonalization_UserPersonalizationVM } from '../models/Webcom_API_RD_UserPersonalization_UserPersonalizationVM';
import type { Webcom_API_RD_UserPersonalization_VM_UserVM } from '../models/Webcom_API_RD_UserPersonalization_VM_UserVM';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class UserPersonalizationService {

    /**
     * Gets inital view model in JSON format
     * @returns Webcom_API_RD_UserPersonalization_UserPersonalizationVM OK
     * @throws ApiError
     */
    public static async userPersonalizationGetInitData(): Promise<Webcom_API_RD_UserPersonalization_UserPersonalizationVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/UserPersonalization/GetInitData`,
        });
        return result.body;
    }

    /**
     * Gets the users.
     * @param query The query.
     * @param includeCurrentUser if set to true [include current user].
     * @returns Webcom_API_RD_UserPersonalization_VM_UserVM OK
     * @throws ApiError
     */
    public static async userPersonalizationGetUsers(
        query: string,
        includeCurrentUser?: boolean,
    ): Promise<Array<Webcom_API_RD_UserPersonalization_VM_UserVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/UserPersonalization/GetUsers`,
            query: {
                'query': query,
                'includeCurrentUser': includeCurrentUser,
            },
        });
        return result.body;
    }

    /**
     * Gets init view model for modify password scenario
     * @returns Webcom_API_RD_UserPersonalization_ModifyPasswordInitVM OK
     * @throws ApiError
     */
    public static async userPersonalizationGetModifyPasswordInitData(): Promise<Webcom_API_RD_UserPersonalization_ModifyPasswordInitVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/UserPersonalization/GetModifyPasswordInitData`,
        });
        return result.body;
    }

    /**
     * Gets init view model for modify password scenario
     * @returns Webcom_API_RD_UserPersonalization_ModifyDetailsInitVM OK
     * @throws ApiError
     */
    public static async userPersonalizationGetModifyPersonalInitData(): Promise<Webcom_API_RD_UserPersonalization_ModifyDetailsInitVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/UserPersonalization/GetModifyPersonalInitData`,
        });
        return result.body;
    }

    /**
     * Handles on date format change eventsby formatting effective date, date for grant access to admin and support
     * @param request Format change request
     * @returns string OK
     * @throws ApiError
     */
    public static async userPersonalizationChangedDateFormat(
        request: Webcom_API_RD_UserPersonalization_ChangedDateFormatRequest,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/UserPersonalization/ChangedDateFormat`,
            body: request,
        });
        return result.body;
    }

    /**
     * Handles on selected country changed events
     * @param request Get states for selected country request
     * @returns Webcom_API_NameValuePair OK
     * @throws ApiError
     */
    public static async userPersonalizationChangedSelectedCountry(
        request: Webcom_API_RD_UserPersonalization_GetStatesRequest,
    ): Promise<Array<Webcom_API_NameValuePair>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/UserPersonalization/ChangedSelectedCountry`,
            body: request,
        });
        return result.body;
    }

    /**
     * Saves user personalization details and return result
     * @param data Data to be saved
     * @returns Webcom_API_RD_UserPersonalization_SavePersonalizationResponse OK
     * @throws ApiError
     */
    public static async userPersonalizationSaveUserPersonalization(
        data: Webcom_API_RD_UserPersonalization_SavePersonalizationRequest,
    ): Promise<Webcom_API_RD_UserPersonalization_SavePersonalizationResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/UserPersonalization/SaveUserPersonalization`,
            body: data,
        });
        return result.body;
    }

    /**
     * Saving user's new password
     * @param request Save new password request
     * @returns Webcom_API_RD_UserPersonalization_SaveChangedPasswordResponse OK
     * @throws ApiError
     */
    public static async userPersonalizationSaveChangedPassword(
        request: Webcom_API_RD_UserPersonalization_SaveChangedPasswordRequest,
    ): Promise<Webcom_API_RD_UserPersonalization_SaveChangedPasswordResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/UserPersonalization/SaveChangedPassword`,
            body: request,
        });
        return result.body;
    }

    /**
     * Saves user personal details changes
     * @param requrest User details to be changed
     * @returns Webcom_API_RD_UserPersonalization_SaveDetailsResponse OK
     * @throws ApiError
     */
    public static async userPersonalizationSaveDetails(
        requrest: Webcom_API_RD_UserPersonalization_SaveDetailsRequest,
    ): Promise<Webcom_API_RD_UserPersonalization_SaveDetailsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/UserPersonalization/SaveDetails`,
            body: requrest,
        });
        return result.body;
    }

    /**
     * Toggles the responsive design.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async userPersonalizationToggleResponsiveDesign(): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/UserPersonalization/ToggleResponsiveDesign`,
        });
        return result.body;
    }

    /**
     * Gets visible pricebooks of the provided market
     * @param marketId Market id
     * @returns Webcom_API_IdNamePair OK
     * @throws ApiError
     */
    public static async userPersonalizationGetMarketPricebooks(
        marketId: number,
    ): Promise<Array<Webcom_API_IdNamePair>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/UserPersonalization/GetMarketPricebooks`,
            query: {
                'marketId': marketId,
            },
        });
        return result.body;
    }

}