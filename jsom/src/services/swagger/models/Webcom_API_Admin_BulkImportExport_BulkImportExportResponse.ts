/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_BulkImportExport_BulkImportExportPermission } from './Webcom_API_Admin_BulkImportExport_BulkImportExportPermission';
import type { Webcom_API_Admin_BulkImportExport_VM_JobVM } from './Webcom_API_Admin_BulkImportExport_VM_JobVM';

/**
 * Class BulkImportExportResponse
 */
export type Webcom_API_Admin_BulkImportExport_BulkImportExportResponse = {
    /**
     * Gets or sets the list of jobs.
     */
    JobsList?: Array<Webcom_API_Admin_BulkImportExport_VM_JobVM>;
    /**
     * Gets or sets the total number of items.
     */
    TotalItems?: number;
    /**
     * Gets or sets the number of current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the number of items per page.
     */
    ItemsPerPage?: number;
    /**
     * Gets or sets the max request length in bytes.
     */
    MaxRequestLengthBytes?: number;
    /**
     * User permissions for bulk export/import
     */
    Permissions?: Webcom_API_Admin_BulkImportExport_BulkImportExportPermission;
    /**
     * Gets or sets flag indicating if VC integration is enabled or not
     */
    IsVCIntegrationEnabled?: boolean;
    /**
     * True if effective dates should be included in the pricebook
     */
    ShowEffectiveDates?: boolean;
    /**
     * True if Recurring Price Period and Recurring Cost Period should be included in the pricebook
     */
    UseRecurringPeriods?: boolean;
}
