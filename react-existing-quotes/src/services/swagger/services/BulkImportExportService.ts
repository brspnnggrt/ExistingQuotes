/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_BulkImportExport_BulkImportExportResponse } from '../models/Webcom_API_Admin_BulkImportExport_BulkImportExportResponse';
import type { Webcom_API_Admin_BulkImportExport_PricebookExportRequest } from '../models/Webcom_API_Admin_BulkImportExport_PricebookExportRequest';
import type { Webcom_API_Admin_BulkImportExport_ProductExportRequest } from '../models/Webcom_API_Admin_BulkImportExport_ProductExportRequest';
import type { Webcom_API_Admin_BulkImportExport_UserExportRequest } from '../models/Webcom_API_Admin_BulkImportExport_UserExportRequest';
import type { Webcom_API_Admin_BulkImportExport_UserExportResponse } from '../models/Webcom_API_Admin_BulkImportExport_UserExportResponse';
import type { Webcom_API_Admin_BulkImportExport_VM_CategoryVM } from '../models/Webcom_API_Admin_BulkImportExport_VM_CategoryVM';
import type { Webcom_API_Admin_BulkImportExport_VM_PermissionVm } from '../models/Webcom_API_Admin_BulkImportExport_VM_PermissionVm';
import type { Webcom_API_Admin_BulkImportExport_VM_PricinigMechanismVM } from '../models/Webcom_API_Admin_BulkImportExport_VM_PricinigMechanismVM';
import { request as __request } from '../core/request';

export class BulkImportExportService {

    /**
     * Exports the users.
     * @param request The request.
     * @returns string OK
     * @throws ApiError
     */
    public static async bulkImportExportExportUsers(
        request: Webcom_API_Admin_BulkImportExport_UserExportRequest,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/BulkImportExport/ExportUsers`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the user export initialize data.
     * @returns Webcom_API_Admin_BulkImportExport_UserExportResponse OK
     * @throws ApiError
     */
    public static async bulkImportExportGetUserExportInitData(): Promise<Webcom_API_Admin_BulkImportExport_UserExportResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/BulkImportExport/GetUserExportInitData`,
        });
        return result.body;
    }

    /**
     * Exports the pricebook entries.
     * @param pricebookCode
     * @param request
     * @returns string OK
     * @throws ApiError
     */
    public static async bulkImportExportExportPricebook(
        pricebookCode: string,
        request: Webcom_API_Admin_BulkImportExport_PricebookExportRequest,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/BulkImportExport/ExportPricebook`,
            query: {
                'pricebookCode': pricebookCode,
            },
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param currentPage The current page number.
     * @param itemsPerPage The number of items per page
     * @returns Webcom_API_Admin_BulkImportExport_BulkImportExportResponse OK
     * @throws ApiError
     */
    public static async bulkImportExportGetData(
        currentPage?: number,
        itemsPerPage?: number,
    ): Promise<Webcom_API_Admin_BulkImportExport_BulkImportExportResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/BulkImportExport/GetData`,
            query: {
                'currentPage': currentPage,
                'itemsPerPage': itemsPerPage,
            },
        });
        return result.body;
    }

    /**
     * Cancels the job.
     * @param jobId The id of job that should be canceled.
     * @returns void
     * @throws ApiError
     */
    public static async bulkImportExportCancelJob(
        jobId: string,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/BulkImportExport/CancelJob`,
            query: {
                'jobId': jobId,
            },
        });
        return result.body;
    }

    /**
     * Changes the request email.
     * @param jobId The job identifier.
     * @param requestEmail if set to true [request email].
     * @returns void
     * @throws ApiError
     */
    public static async bulkImportExportChangeRequestEmail(
        jobId: string,
        requestEmail: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/BulkImportExport/ChangeRequestEmail`,
            query: {
                'jobId': jobId,
                'requestEmail': requestEmail,
            },
        });
        return result.body;
    }

    /**
     * Exports the products.
     * @param request The ProductExportRequest request.
     * @returns string OK
     * @throws ApiError
     */
    public static async bulkImportExportExportProducts(
        request: Webcom_API_Admin_BulkImportExport_ProductExportRequest,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/BulkImportExport/ExportProducts`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the categories for filter.
     * @returns Webcom_API_Admin_BulkImportExport_VM_CategoryVM OK
     * @throws ApiError
     */
    public static async bulkImportExportGetCategories(): Promise<Array<Webcom_API_Admin_BulkImportExport_VM_CategoryVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/BulkImportExport/GetCategories`,
        });
        return result.body;
    }

    /**
     * Gets the pricing mechanisms.
     * @returns Webcom_API_Admin_BulkImportExport_VM_PricinigMechanismVM OK
     * @throws ApiError
     */
    public static async bulkImportExportGetPricingMechanisms(): Promise<Array<Webcom_API_Admin_BulkImportExport_VM_PricinigMechanismVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/BulkImportExport/GetPricingMechanisms`,
        });
        return result.body;
    }

    /**
     * Gets the CPQ permissions from filter.
     * @returns Webcom_API_Admin_BulkImportExport_VM_PermissionVm OK
     * @throws ApiError
     */
    public static async bulkImportExportGetPermissions(): Promise<Array<Webcom_API_Admin_BulkImportExport_VM_PermissionVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/BulkImportExport/GetPermissions`,
        });
        return result.body;
    }

}