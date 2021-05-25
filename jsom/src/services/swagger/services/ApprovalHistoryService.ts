/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse } from '../models/Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse';
import { request as __request } from '../core/request';

export class ApprovalHistoryService {

    /**
     * Gets the initial approval history model.
     * @param rc The crypted cart id.
     * @param ro The crypted owner id.
     * @returns Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse OK
     * @throws ApiError
     */
    public static async approvalHistoryGetApprovalHistoryModelInit(
        rc: string,
        ro: string,
    ): Promise<Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/ApprovalHistory/GetApprovalHistoryModelInit`,
            query: {
                'rc': rc,
                'ro': ro,
            },
        });
        return result.body;
    }

    /**
     * Gets the initial approval history model.
     * @param quoteId The cart id.
     * @param ownerId The owner id.
     * @returns Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse OK
     * @throws ApiError
     */
    public static async approvalHistoryGetApprovalHistoryModelInitData(
        quoteId: number,
        ownerId: number,
    ): Promise<Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/ApprovalHistory/GetApprovalHistoryModelInitData`,
            query: {
                'quoteId': quoteId,
                'ownerId': ownerId,
            },
        });
        return result.body;
    }

    /**
     * Gets the approval history model.
     * @param filterCurrentPage Gets or sets the current page.
     * @param filterItemsPerPage Gets or sets the items per page.
     * @param filterSortMethod Gets or sets the sort method.
     * @param filterOrderByColumn Gets or sets the order by column.
     * @param filterSearch Gets or sets the search.
     * @returns Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse OK
     * @throws ApiError
     */
    public static async approvalHistoryGetApprovalHistoryModel(
        filterCurrentPage?: number,
        filterItemsPerPage?: number,
        filterSortMethod?: string,
        filterOrderByColumn?: string,
        filterSearch?: any,
    ): Promise<Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/ApprovalHistory/GetApprovalHistoryModel`,
            query: {
                'filter.currentPage': filterCurrentPage,
                'filter.itemsPerPage': filterItemsPerPage,
                'filter.sortMethod': filterSortMethod,
                'filter.orderByColumn': filterOrderByColumn,
                'filter.search': filterSearch,
            },
        });
        return result.body;
    }

}