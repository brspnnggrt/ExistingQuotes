/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Cart_CustomerFeedback_CustomerFeedbackComment } from '../models/Webcom_API_RD_Cart_CustomerFeedback_CustomerFeedbackComment';
import type { Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM } from '../models/Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM';
import { request as __request } from '../core/request';

export class CustomerFeedbackService {

    /**
     * @returns Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM OK
     * @throws ApiError
     */
    public static async customerFeedbackGetData(): Promise<Array<Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CustomerFeedback/GetData`,
        });
        return result.body;
    }

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static async customerFeedbackGetUnreadCount(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/CustomerFeedback/GetUnreadCount`,
        });
        return result.body;
    }

    /**
     * @param customerFeedbackComment
     * @returns Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM OK
     * @throws ApiError
     */
    public static async customerFeedbackSaveComment(
        customerFeedbackComment: Webcom_API_RD_Cart_CustomerFeedback_CustomerFeedbackComment,
    ): Promise<Array<Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CustomerFeedback/SaveComment`,
            body: customerFeedbackComment,
        });
        return result.body;
    }

    /**
     * Deletes comment
     * @param id Comment id
     * @returns Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM OK
     * @throws ApiError
     */
    public static async customerFeedbackDeleteComment(
        id: number,
    ): Promise<Array<Webcom_API_RD_Cart_CustomerFeedback_VM_CustomerFeedbackVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/CustomerFeedback/DeleteComment`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

}