/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Table Selected Rows VM
 */
export type Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM = {
    /**
     * Table Name
     */
    TableName?: Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM.TableName;
    /**
     * Value indicating whether 'Select all' checkbox is checked
     */
    SelectAll?: boolean;
    /**
     * Selected Rows Ids
     */
    SelectedIds?: Array<string>;
    /**
     * Number of Records
     */
    NumberOfRecords?: number;
    /**
     * Selected Columns
     */
    SelectedColumns?: Array<number>;
}

export namespace Webcom_API_SetupSPA_ViewExportPII_VM_TableSelectedRowsVM {

    /**
     * Table Name
     */
    export enum TableName {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }


}
