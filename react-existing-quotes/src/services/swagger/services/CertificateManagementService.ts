/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { System_Collections_Generic_KeyValuePair } from '../models/System_Collections_Generic_KeyValuePair';
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_CertificateManagement_VM_ClientCertificatesEntryDialogVM } from '../models/Webcom_API_SetupSPA_CertificateManagement_VM_ClientCertificatesEntryDialogVM';
import type { Webcom_API_SetupSPA_CertificateManagement_VM_ClientCertificatesTableRowVM } from '../models/Webcom_API_SetupSPA_CertificateManagement_VM_ClientCertificatesTableRowVM';
import type { Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM } from '../models/Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM';
import type { Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM } from '../models/Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import { request as __request } from '../core/request';

export class CertificateManagementService {

    /**
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM> OK
     * @throws ApiError
     */
    public static async certificateManagementGetSystemCertificatesSettings(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement`,
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM> OK
     * @throws ApiError
     */
    public static async certificateManagementGetDkimSettings(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/dkim`,
        });
        return result.body;
    }

    /**
     * @param id
     * @param isActive
     * @returns void
     * @throws ApiError
     */
    public static async certificateManagementSetDkimCertificateManagementSettingStatus(
        id: number,
        isActive: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/dkim/${id}/status/${isActive}`,
        });
        return result.body;
    }

    /**
     * @param id
     * @param isActive
     * @returns void
     * @throws ApiError
     */
    public static async certificateManagementSetCertificateManagementSettingStatus(
        id: number,
        isActive: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/${id}/status/${isActive}`,
        });
        return result.body;
    }

    /**
     * @param entryId
     * @returns string OK
     * @throws ApiError
     */
    public static async certificateManagementGetDkimCertificateKeyAsString(
        entryId: number,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/dkim/getKeyString`,
            query: {
                'entryId': entryId,
            },
        });
        return result.body;
    }

    /**
     * @param entryId
     * @returns string OK
     * @throws ApiError
     */
    public static async certificateManagementGetCertificateKeyAsString(
        entryId: number,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/getKeyString`,
            query: {
                'entryId': entryId,
            },
        });
        return result.body;
    }

    /**
     * Gets all tenants with their HF Url
     * @param id
     * @returns System_Collections_Generic_KeyValuePair<System_String_System_String> OK
     * @throws ApiError
     */
    public static async certificateManagementGetCertificateDetails(
        id: number,
    ): Promise<Array<System_Collections_Generic_KeyValuePair>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/details/${id}`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async certificateManagementDeleteDkimSetting(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/certificateManagement/dkim/${id}`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async certificateManagementDeleteSetting(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/certificateManagement/${id}`,
        });
        return result.body;
    }

    /**
     * Gets data types lookup
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async certificateManagementGetPurposes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/purposes`,
        });
        return result.body;
    }

    /**
     * @param enabledState
     * @returns boolean OK
     * @throws ApiError
     */
    public static async certificateManagementSetEnabledStatus(
        enabledState: boolean,
    ): Promise<boolean> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/enabled/${enabledState}`,
        });
        return result.body;
    }

    /**
     * @returns boolean OK
     * @throws ApiError
     */
    public static async certificateManagementGetEnabledStatus(): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/enabled`,
        });
        return result.body;
    }

    /**
     * @param entry
     * @returns number OK
     * @throws ApiError
     */
    public static async certificateManagementSaveCertificateSettingEntry(
        entry: Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/save`,
            body: entry,
        });
        return result.body;
    }

    /**
     * @param entry
     * @returns number OK
     * @throws ApiError
     */
    public static async certificateManagementSaveDkimSettingEntry(
        entry: Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/dkim/save`,
            body: entry,
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_CertificateManagement_VM_ClientCertificatesTableRowVM> OK
     * @throws ApiError
     */
    public static async certificateManagementGetPagedClientCertificates(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async certificateManagementDeleteClientCertificate(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/${id}`,
        });
        return result.body;
    }

    /**
     * @param clientCertificateMapping
     * @returns number OK
     * @throws ApiError
     */
    public static async certificateManagementSaveClientCertificateSettingMapping(
        clientCertificateMapping: Webcom_API_SetupSPA_CertificateManagement_VM_ClientCertificatesEntryDialogVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/save`,
            body: clientCertificateMapping,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static async certificateManagementSetClientCertificateMappingStatus(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/${id}/status`,
        });
        return result.body;
    }

    /**
     * Gets all tenants with their HF Url
     * @param id
     * @returns System_Collections_Generic_KeyValuePair<System_String_System_String> OK
     * @throws ApiError
     */
    public static async certificateManagementGetClientCertificateDetails(
        id: number,
    ): Promise<Array<System_Collections_Generic_KeyValuePair>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/details/${id}`,
        });
        return result.body;
    }

    /**
     * @param userId
     * @returns boolean OK
     * @throws ApiError
     */
    public static async certificateManagementCheckIfUserHasCertificateMapped(
        userId: number,
    ): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/usermapped/${userId}`,
        });
        return result.body;
    }

    /**
     * Gets enabled status for client certiicate authentication
     * @returns boolean OK
     * @throws ApiError
     */
    public static async certificateManagementClientCertificateAuthenticationEnabled(): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/enabled`,
        });
        return result.body;
    }

    /**
     * Sets enabled status for client certificate authentication
     * @param enabledState
     * @returns boolean OK
     * @throws ApiError
     */
    public static async certificateManagementSetClientCertificateAuthenticationEnabledStatus(
        enabledState: boolean,
    ): Promise<boolean> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/certificateManagement/client-certificates/enabled/${enabledState}`,
        });
        return result.body;
    }

}