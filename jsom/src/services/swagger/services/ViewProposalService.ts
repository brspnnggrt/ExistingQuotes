/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class ViewProposalService {

    /**
     * Executes the view proposal action.
     * @param proposalKeyUrl The proposal key URL.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async viewProposalExecuteViewProposalAction(
        proposalKeyUrl: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/ViewProposal/ExecuteViewProposalAction`,
            query: {
                'proposalKeyUrl': proposalKeyUrl,
            },
        });
        return result.body;
    }

}