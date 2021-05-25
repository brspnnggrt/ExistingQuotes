/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse } from '../models/Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse';
import { request as __request } from '../core/request';

export class CartDocumentsService {

    /**
     * Gets the cart documents model initialize.
     * @param tabId The tab identifier.
     * @returns Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse OK
     * @throws ApiError
     */
    public static async cartDocumentsGetCartDocumentsModelInit(
        tabId: number,
    ): Promise<Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartDocuments/GetCartDocumentsModelInit`,
            query: {
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * Gets the cart document attachment model.
     * @param requestCurrentTable Gets or sets the current table.
     * @param requestCurrentPage Gets or sets the current page.
     * @param requestItemsPerPage Gets or sets the items per page.
     * @param requestSortMethod Gets or sets the sort method.
     * @param requestOrderByColumn Gets or sets the order by column.
     * @returns Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse OK
     * @throws ApiError
     */
    public static async cartDocumentsGetCartDocumentAttachmentModel(
        requestCurrentTable?: 0 | 1 | 2,
        requestCurrentPage?: number,
        requestItemsPerPage?: number,
        requestSortMethod?: string,
        requestOrderByColumn?: string,
    ): Promise<Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartDocuments/GetCartDocumentAttachmentModel`,
            query: {
                'request.currentTable': requestCurrentTable,
                'request.currentPage': requestCurrentPage,
                'request.itemsPerPage': requestItemsPerPage,
                'request.sortMethod': requestSortMethod,
                'request.orderByColumn': requestOrderByColumn,
            },
        });
        return result.body;
    }

    /**
     * Gets the cart document gen document model.
     * @param requestCurrentTable Gets or sets the current table.
     * @param requestCurrentPage Gets or sets the current page.
     * @param requestItemsPerPage Gets or sets the items per page.
     * @param requestSortMethod Gets or sets the sort method.
     * @param requestOrderByColumn Gets or sets the order by column.
     * @returns Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse OK
     * @throws ApiError
     */
    public static async cartDocumentsGetCartDocumentGenDocModel(
        requestCurrentTable?: 0 | 1 | 2,
        requestCurrentPage?: number,
        requestItemsPerPage?: number,
        requestSortMethod?: string,
        requestOrderByColumn?: string,
    ): Promise<Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartDocuments/GetCartDocumentGenDocModel`,
            query: {
                'request.currentTable': requestCurrentTable,
                'request.currentPage': requestCurrentPage,
                'request.itemsPerPage': requestItemsPerPage,
                'request.sortMethod': requestSortMethod,
                'request.orderByColumn': requestOrderByColumn,
            },
        });
        return result.body;
    }

    /**
     * Downloads the document.
     * @param documentId The document identifier.
     * @returns boolean OK
     * @throws ApiError
     */
    public static async cartDocumentsPrepareGeneratedDocumentForDownload(
        documentId: number,
    ): Promise<boolean> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartDocuments/PrepareGeneratedDocumentForDownload`,
            query: {
                'documentId': documentId,
            },
        });
        return result.body;
    }

    /**
     * Sets the send to customer.
     * @param id The identifier.
     * @param isChecked if set to true [is checked].
     * @returns void
     * @throws ApiError
     */
    public static async cartDocumentsSetSendToCustomer(
        id: number,
        isChecked: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartDocuments/SetSendToCustomer`,
            query: {
                'id': id,
                'isChecked': isChecked,
            },
        });
        return result.body;
    }

    /**
     * Sets the viewed by customer.
     * @param id The identifier.
     * @param isChecked if set to true [is checked].
     * @returns void
     * @throws ApiError
     */
    public static async cartDocumentsSetViewedByCustomer(
        id: number,
        isChecked: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartDocuments/SetViewedByCustomer`,
            query: {
                'id': id,
                'isChecked': isChecked,
            },
        });
        return result.body;
    }

    /**
     * Deletes the generated document.
     * @param id The identifier.
     * @returns void
     * @throws ApiError
     */
    public static async cartDocumentsDeleteGeneratedDocument(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartDocuments/DeleteGeneratedDocument`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Deletes the attachment.
     * @param id The identifier.
     * @returns void
     * @throws ApiError
     */
    public static async cartDocumentsDeleteAttachment(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartDocuments/DeleteAttachment`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Saves the quote revision description.
     * @param id The identifier.
     * @param description The description.
     * @returns void
     * @throws ApiError
     */
    public static async cartDocumentsSaveQuoteRevisionDescription(
        id: number,
        description: string,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CartDocuments/SaveQuoteRevisionDescription`,
            query: {
                'id': id,
                'description': description,
            },
        });
        return result.body;
    }

    /**
     * Views the cart attachment.
     * @param id The identifier.
     * @returns any OK
     * @throws ApiError
     */
    public static async cartDocumentsViewCartAttachment(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartDocuments/ViewCartAttachment`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Downloads the cart attachment.
     * @param id The identifier.
     * @returns any OK
     * @throws ApiError
     */
    public static async cartDocumentsDownloadCartAttachment(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CartDocuments/DownloadCartAttachment`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

}