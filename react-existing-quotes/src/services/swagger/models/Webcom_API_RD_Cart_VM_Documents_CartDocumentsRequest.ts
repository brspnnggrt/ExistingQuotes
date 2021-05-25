/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CartDocumentsRequest class
 */
export type Webcom_API_RD_Cart_VM_Documents_CartDocumentsRequest = {
    /**
     * Gets or sets the current table.
     */
    CurrentTable?: Webcom_API_RD_Cart_VM_Documents_CartDocumentsRequest.CurrentTable;
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the items per page.
     */
    ItemsPerPage?: number;
    /**
     * Gets or sets the sort method.
     */
    SortMethod?: string;
    /**
     * Gets or sets the order by column.
     */
    OrderByColumn?: string;
}

export namespace Webcom_API_RD_Cart_VM_Documents_CartDocumentsRequest {

    /**
     * Gets or sets the current table.
     */
    export enum CurrentTable {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
