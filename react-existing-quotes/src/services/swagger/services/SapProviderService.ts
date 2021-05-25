/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_Providers_CommerceUserVM } from '../models/Webcom_API_Admin_Providers_CommerceUserVM';
import type { Webcom_API_Admin_Providers_SAPC4CSettingsVM } from '../models/Webcom_API_Admin_Providers_SAPC4CSettingsVM';
import type { Webcom_API_Admin_Providers_SAPCommerceSettingsVM } from '../models/Webcom_API_Admin_Providers_SAPCommerceSettingsVM';
import type { Webcom_API_Admin_Providers_SAPCommonSettingsVM } from '../models/Webcom_API_Admin_Providers_SAPCommonSettingsVM';
import type { Webcom_API_Admin_Providers_SAPProviderVM } from '../models/Webcom_API_Admin_Providers_SAPProviderVM';
import type { Webcom_API_Admin_Providers_SAPS4SettingsVM } from '../models/Webcom_API_Admin_Providers_SAPS4SettingsVM';
import type { Webcom_API_Admin_Providers_SaveCommerceSettingsVM } from '../models/Webcom_API_Admin_Providers_SaveCommerceSettingsVM';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class SapProviderService {

    /**
     * Gets SAP commerce details
     * @returns Webcom_API_Admin_Providers_SAPCommerceSettingsVM OK
     * @throws ApiError
     */
    public static async sapProviderGetCommerceSettings(): Promise<Webcom_API_Admin_Providers_SAPCommerceSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetCommerceSettings`,
        });
        return result.body;
    }

    /**
     * Gets the users.
     * @param query The query.
     * @returns Webcom_API_Admin_Providers_CommerceUserVM OK
     * @throws ApiError
     */
    public static async sapProviderGetUsers(
        query: string,
    ): Promise<Array<Webcom_API_Admin_Providers_CommerceUserVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetUsers`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Gets SAP general settings details
     * @returns Webcom_API_Admin_Providers_SAPCommonSettingsVM OK
     * @throws ApiError
     */
    public static async sapProviderGetCommonSettings(): Promise<Webcom_API_Admin_Providers_SAPCommonSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetCommonSettings`,
        });
        return result.body;
    }

    /**
     * Gets C4C specific settings
     * @returns Webcom_API_Admin_Providers_SAPC4CSettingsVM OK
     * @throws ApiError
     */
    public static async sapProviderGetC4CSettings(): Promise<Webcom_API_Admin_Providers_SAPC4CSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetC4CSettings`,
        });
        return result.body;
    }

    /**
     * Gets C4C obsolete specific settings
     * @returns Webcom_API_Admin_Providers_SAPC4CSettingsVM OK
     * @throws ApiError
     */
    public static async sapProviderGetC4CObsoleteSettings(): Promise<Webcom_API_Admin_Providers_SAPC4CSettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetC4CObsoleteSettings`,
        });
        return result.body;
    }

    /**
     * Gets S/4 specific settings
     * @returns Webcom_API_Admin_Providers_SAPS4SettingsVM OK
     * @throws ApiError
     */
    public static async sapProviderGetS4Settings(): Promise<Webcom_API_Admin_Providers_SAPS4SettingsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetS4Settings`,
        });
        return result.body;
    }

    /**
     * Save commerce settings
     * @param data SAP commerce settings to be saved
     * @returns Webcom_API_Admin_Providers_SaveCommerceSettingsVM OK
     * @throws ApiError
     */
    public static async sapProviderSaveCommerceSettings(
        data: Webcom_API_Admin_Providers_SAPCommerceSettingsVM,
    ): Promise<Webcom_API_Admin_Providers_SaveCommerceSettingsVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/SAPProvider/SaveCommerceSettings`,
            body: data,
        });
        return result.body;
    }

    /**
     * Save SAP general settings details
     * @param data SAP general settings to be saved.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sapProviderSaveCommonSettings(
        data: Webcom_API_Admin_Providers_SAPCommonSettingsVM,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/SAPProvider/SaveCommonSettings`,
            body: data,
        });
        return result.body;
    }

    /**
     * Saves SAP C4C specific settings
     * @param data SAP C4C specific settings to be saved.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sapProviderSaveC4CSettings(
        data: Webcom_API_Admin_Providers_SAPC4CSettingsVM,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/SAPProvider/SaveC4CSettings`,
            body: data,
        });
        return result.body;
    }

    /**
     * Saves SAP C4C obsolete specific settings
     * @param data SAP C4C obsolete specific settings to be saved.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sapProviderSaveC4CObsoleteSettings(
        data: Webcom_API_Admin_Providers_SAPC4CSettingsVM,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/SAPProvider/SaveC4CObsoleteSettings`,
            body: data,
        });
        return result.body;
    }

    /**
     * Saves SAP S/4 specific settings
     * @param data SAP S/4 specific settings to be saved.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async sapProviderSaveS4Settings(
        data: Webcom_API_Admin_Providers_SAPS4SettingsVM,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/SAPProvider/SaveS4Settings`,
            body: data,
        });
        return result.body;
    }

    /**
     * Gets initialized data for sap provider page
     * @returns Webcom_API_Admin_Providers_SAPProviderVM OK
     * @throws ApiError
     */
    public static async sapProviderGetInitData(): Promise<Webcom_API_Admin_Providers_SAPProviderVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GetInitData`,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async sapProviderGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/SAPProvider/GenerateSecretKey`,
        });
        return result.body;
    }

}