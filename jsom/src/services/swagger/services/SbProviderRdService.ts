/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_SBProviderRD_VM_SBProviderDetailsVM } from '../models/Webcom_API_RD_SBProviderRD_VM_SBProviderDetailsVM';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class SbProviderRdService {

    /**
     * Gets provider details.
     * @returns Webcom_API_RD_SBProviderRD_VM_SBProviderDetailsVM OK
     * @throws ApiError
     */
    public static async sbProviderRdGetProviderDetails(): Promise<Webcom_API_RD_SBProviderRD_VM_SBProviderDetailsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/SBProviderRD/GetProviderDetails`,
        });
        return result.body;
    }

    /**
     * Saves provider settings.
     * @param sbDetails
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sbProviderRdUpdateProviderDetails(
        sbDetails: Webcom_API_RD_SBProviderRD_VM_SBProviderDetailsVM,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/SBProviderRD/UpdateProviderDetails`,
            body: sbDetails,
        });
        return result.body;
    }

    /**
     * Tests if credentials are working
     * @param authenticationUrl
     * @param clientId
     * @param clientSecret
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sbProviderRdTestAuthenticationSettings(
        authenticationUrl: string,
        clientId: string,
        clientSecret: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/SBProviderRD/TestAuthenticationSettings`,
            query: {
                'authenticationUrl': authenticationUrl,
                'clientId': clientId,
                'clientSecret': clientSecret,
            },
        });
        return result.body;
    }

    /**
     * Tests if rate plan template endpoint connection is valid
     * @param baseUrl
     * @param ratePlanTemplateEndpoint
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sbProviderRdTestRatePlanTemplateEndpoint(
        baseUrl: string,
        ratePlanTemplateEndpoint: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/SBProviderRD/TestRatePlanTemplateEndpoint`,
            query: {
                'baseUrl': baseUrl,
                'ratePlanTemplateEndpoint': ratePlanTemplateEndpoint,
            },
        });
        return result.body;
    }

}