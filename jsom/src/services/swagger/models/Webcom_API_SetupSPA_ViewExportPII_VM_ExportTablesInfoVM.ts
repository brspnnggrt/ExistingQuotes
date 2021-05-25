/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM } from './Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM';

/**
 * Export Tables Info VM
 */
export type Webcom_API_SetupSPA_ViewExportPII_VM_ExportTablesInfoVM = {
    /**
     * Value indicating whether data is associated with user
     */
    IsUser?: boolean;
    /**
     * Person Id
     */
    PersonId?: number;
    /**
     * Export Option
     */
    ExportOption?: Webcom_API_SetupSPA_ViewExportPII_VM_ExportTablesInfoVM.ExportOption;
    /**
     * Quotes
     */
    Quotes?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
    /**
     * Custom Tables
     */
    CustomTables?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
    /**
     * Quote Tables
     */
    QuoteTables?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
    /**
     * Custom Fields
     */
    CustomFields?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
    /**
     * Quote Item Custom Fields
     */
    QuoteItemCustomFields?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
    /**
     * User Custom Fields
     */
    UserCustomFields?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
    /**
     * Customer Custom Fields
     */
    CustomerCustomFields?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM;
}

export namespace Webcom_API_SetupSPA_ViewExportPII_VM_ExportTablesInfoVM {

    /**
     * Export Option
     */
    export enum ExportOption {
        '_0' = 0,
        '_1' = 1,
    }


}
