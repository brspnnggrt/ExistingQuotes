/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Approvals_ApprovalResponse } from '../models/Webcom_API_RD_Approvals_ApprovalResponse';
import type { Webcom_API_RD_Approvals_ApprovalsLandingResponse } from '../models/Webcom_API_RD_Approvals_ApprovalsLandingResponse';
import type { Webcom_API_RD_Approvals_ExecuteActionRequest } from '../models/Webcom_API_RD_Approvals_ExecuteActionRequest';
import { request as __request } from '../core/request';

export class ApprovalsService {

    /**
     * Gets the approval model.
     * @returns Webcom_API_RD_Approvals_ApprovalResponse OK
     * @throws ApiError
     */
    public static async approvalsGetApprovalModel(): Promise<Webcom_API_RD_Approvals_ApprovalResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Approvals/GetApprovalModel`,
        });
        return result.body;
    }

    /**
     * Gets the one click approval response.
     * @param ownerId The owner identifier.
     * @param cartId The cart identifier.
     * @param actionId The action identifier.
     * @returns Webcom_API_RD_Approvals_ApprovalsLandingResponse OK
     * @throws ApiError
     */
    public static async approvalsGetOneClickApprovalResponse(
        ownerId: number,
        cartId: number,
        actionId: number,
    ): Promise<Webcom_API_RD_Approvals_ApprovalsLandingResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Approvals/GetOneClickApprovalResponse`,
            query: {
                'ownerId': ownerId,
                'cartId': cartId,
                'actionId': actionId,
            },
        });
        return result.body;
    }

    /**
     * Executes the action.
     * @param data The data.
     * @returns Webcom_API_RD_Approvals_ApprovalResponse OK
     * @throws ApiError
     */
    public static async approvalsExecuteAction(
        data: Webcom_API_RD_Approvals_ExecuteActionRequest,
    ): Promise<Webcom_API_RD_Approvals_ApprovalResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Approvals/ExecuteAction`,
            body: data,
        });
        return result.body;
    }

    /**
     * Retract approval process action.
     * @param comment Retract explanation comment.
     * @returns Webcom_API_RD_Approvals_ApprovalResponse OK
     * @throws ApiError
     */
    public static async approvalsRetractApprovalProcess(
        comment: string,
    ): Promise<Webcom_API_RD_Approvals_ApprovalResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Approvals/RetractApprovalProcess`,
            query: {
                'comment': comment,
            },
        });
        return result.body;
    }

    /**
     * Retract expired approval rules - rules which are rejected and not violated anymore.
     * @returns Webcom_API_RD_Approvals_ApprovalResponse OK
     * @throws ApiError
     */
    public static async approvalsRetractExpiredApprovalRules(): Promise<Webcom_API_RD_Approvals_ApprovalResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Approvals/RetractExpiredApprovalRules`,
        });
        return result.body;
    }

}