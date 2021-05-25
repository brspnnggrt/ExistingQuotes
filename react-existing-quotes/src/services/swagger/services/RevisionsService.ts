/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments } from '../models/SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments';
import type { Webcom_API_RD_Revisions_ExecuteActionRequest } from '../models/Webcom_API_RD_Revisions_ExecuteActionRequest';
import type { Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevision } from '../models/Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevision';
import { request as __request } from '../core/request';

export class RevisionsService {

    /**
     * Gets the revisions init data.
     * @param cryptedOwnerId Encrypted owner id.
     * @param cryptedQuoteId Encrypted quote id.
     * @returns any OK
     * @throws ApiError
     */
    public static async revisionsGetInitData(
        cryptedOwnerId: string,
        cryptedQuoteId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Revisions/GetInitData`,
            query: {
                'cryptedOwnerId': cryptedOwnerId,
                'cryptedQuoteId': cryptedQuoteId,
            },
        });
        return result.body;
    }

    /**
     * Gets the revisions list.
     * @param cryptedOwnerId Encrypted owner id.
     * @param cryptedQuoteId Encrypted quote id.
     * @returns any OK
     * @throws ApiError
     */
    public static async revisionsGetRevisions(
        cryptedOwnerId: string,
        cryptedQuoteId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Revisions/GetRevisions`,
            query: {
                'cryptedOwnerId': cryptedOwnerId,
                'cryptedQuoteId': cryptedQuoteId,
            },
        });
        return result.body;
    }

    /**
     * Executes the action.
     * @param request The request.
     * @returns SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments OK
     * @throws ApiError
     */
    public static async revisionsExecuteAction(
        request: Webcom_API_RD_Revisions_ExecuteActionRequest,
    ): Promise<SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Revisions/ExecuteAction`,
            body: request,
        });
        return result.body;
    }

    /**
     * Updates list of revisions in database.
     * @param revisions List of revisions to be updated.
     * @param cryptedOwnerId Encrypted owner id.
     * @param cryptedQuoteId Encrypted quote id.
     * @returns any OK
     * @throws ApiError
     */
    public static async revisionsUpdateRevisions(
        revisions: Array<Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevision>,
        cryptedOwnerId: string,
        cryptedQuoteId: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Revisions/UpdateRevisions`,
            query: {
                'cryptedOwnerId': cryptedOwnerId,
                'cryptedQuoteId': cryptedQuoteId,
            },
            body: revisions,
        });
        return result.body;
    }

    /**
     * Gets current revision object.
     * @returns any OK
     * @throws ApiError
     */
    public static async revisionsGetCurrentRevision(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Revisions/GetCurrentRevision`,
        });
        return result.body;
    }

    /**
     * Updates name of revision in database.
     * @param cryptedOwnerId Encrypted owner id.
     * @param cryptedQuoteId Encrypted quote id.
     * @param newName New name of reivision.
     * @returns any OK
     * @throws ApiError
     */
    public static async revisionsRenameRevision(
        cryptedOwnerId: string,
        cryptedQuoteId: string,
        newName: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Revisions/RenameRevision`,
            query: {
                'cryptedOwnerId': cryptedOwnerId,
                'cryptedQuoteId': cryptedQuoteId,
                'newName': newName,
            },
        });
        return result.body;
    }

}