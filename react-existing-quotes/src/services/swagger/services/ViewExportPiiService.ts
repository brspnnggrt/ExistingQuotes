/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_CustomerCustomFieldPIIVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_CustomerCustomFieldPIIVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_CustomTableRecordVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_CustomTableRecordVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_ExportTablesInfoVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_ExportTablesInfoVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_QuoteCustomFieldVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_QuoteCustomFieldVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_QuoteItemCustomFieldVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_QuoteItemCustomFieldVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_QuoteTableVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_QuoteTableVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_QuoteVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_QuoteVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_SubjectBeingSearchedForVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_SubjectBeingSearchedForVM';
import type { Webcom_API_SetupSPA_ViewExportPII_VM_UserCustomFieldPIIVM } from '../models/Webcom_API_SetupSPA_ViewExportPII_VM_UserCustomFieldPIIVM';
import { request as __request } from '../core/request';

export class ViewExportPiiService {

    /**
     * Gets paged quotes linked with user, with provided id
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuotesForUserPaged(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/quotes`,
        });
        return result.body;
    }

    /**
     * Gets quotes linked with customer, with provided id
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuotesForCustomer(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/quotes`,
        });
        return result.body;
    }

    /**
     * Gets paged attributes linked with user, with provided id
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteCustomFieldVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuoteCustomFieldsForUser(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/quoteCustomFields`,
        });
        return result.body;
    }

    /**
     * Gets attributes linked with customer, with provided id
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteCustomFieldVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuoteCustomFieldsForCustomer(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/quoteCustomFields`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_CustomTableRecordVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetCustomTablesForUser(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/customTables`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_CustomTableRecordVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetCustomTablesForCustomers(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/customTables`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteTableVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuoteTablesForUser(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/quoteTables`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteTableVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuoteTablesForCustomer(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/quoteTables`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteItemCustomFieldVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuoteItemCustomFieldTablesForUser(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/quoteItemCustomFieldTables`,
        });
        return result.body;
    }

    /**
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_QuoteItemCustomFieldVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetQuoteItemCustomFieldTablesForCustomer(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/quoteItemCustomFieldTables`,
        });
        return result.body;
    }

    /**
     * User custom fields on another users
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_UserCustomFieldPIIVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetUserCustomFieldsForUser(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/userCustomFields`,
        });
        return result.body;
    }

    /**
     * User custom fields for customer
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_UserCustomFieldPIIVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetUserCustomFieldsForCustomer(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/userCustomFields`,
        });
        return result.body;
    }

    /**
     * Customer custom fields on another users
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_CustomerCustomFieldPIIVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetCustomerCustomFieldsForUser(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/users/${id}/customerCustomFields`,
        });
        return result.body;
    }

    /**
     * User custom fields for customer
     * @param id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ViewExportPII_VM_CustomerCustomFieldPIIVM> OK
     * @throws ApiError
     */
    public static async viewExportPiiGetCustomerCustomFieldsForCustomer(
        id: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/viewExportPII/customers/${id}/customerCustomFields`,
        });
        return result.body;
    }

    /**
     * Logs PII search in admin audit trail
     * @param person
     * @returns void
     * @throws ApiError
     */
    public static async viewExportPiiLogSearch(
        person: Webcom_API_SetupSPA_ViewExportPII_VM_SubjectBeingSearchedForVM,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/viewExportPII/log`,
            body: person,
        });
        return result.body;
    }

    /**
     * Gets file for download
     * @param exportInfo
     * @returns any OK
     * @throws ApiError
     */
    public static async viewExportPiiExportDataTables(
        exportInfo: Webcom_API_SetupSPA_ViewExportPII_VM_ExportTablesInfoVM,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/viewExportPII/exportData`,
            body: exportInfo,
        });
        return result.body;
    }

}