/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SAP_CPQ_Quote_Common_DTO_QuoteTableCellRequest } from '../models/SAP_CPQ_Quote_Common_DTO_QuoteTableCellRequest';
import type { SAP_CPQ_Quote_Common_DTO_QuoteTableRowRequest } from '../models/SAP_CPQ_Quote_Common_DTO_QuoteTableRowRequest';
import type { SAP_CPQ_Quote_Common_DTO_RFQ_QuoteItemResponse } from '../models/SAP_CPQ_Quote_Common_DTO_RFQ_QuoteItemResponse';
import type { Webcom_API_Public_Quote_VM_AttachmentInfoVM } from '../models/Webcom_API_Public_Quote_VM_AttachmentInfoVM';
import type { Webcom_API_Public_Quote_VM_GeneratedDocumentInfoVM } from '../models/Webcom_API_Public_Quote_VM_GeneratedDocumentInfoVM';
import type { Webcom_API_Public_Quote_VM_InvolvedPartyVM } from '../models/Webcom_API_Public_Quote_VM_InvolvedPartyVM';
import type { Webcom_API_Public_Quote_VM_NewQuoteVMResponse } from '../models/Webcom_API_Public_Quote_VM_NewQuoteVMResponse';
import type { Webcom_API_Public_Quote_VM_PricingConditionVM } from '../models/Webcom_API_Public_Quote_VM_PricingConditionVM';
import type { Webcom_API_Public_Quote_VM_QuoteCommentVM } from '../models/Webcom_API_Public_Quote_VM_QuoteCommentVM';
import type { Webcom_API_Public_Quote_VM_QuoteItemRequestVM } from '../models/Webcom_API_Public_Quote_VM_QuoteItemRequestVM';
import type { Webcom_API_Public_Quote_VM_QuoteItemSapStandardVm } from '../models/Webcom_API_Public_Quote_VM_QuoteItemSapStandardVm';
import type { Webcom_API_Public_Quote_VM_QuoteRevisionVM } from '../models/Webcom_API_Public_Quote_VM_QuoteRevisionVM';
import type { Webcom_API_Public_Quote_VM_QuoteTableRowVM } from '../models/Webcom_API_Public_Quote_VM_QuoteTableRowVM';
import type { Webcom_API_Public_Quote_VM_QuoteVMRequest } from '../models/Webcom_API_Public_Quote_VM_QuoteVMRequest';
import type { Webcom_API_Public_Quote_VM_QuoteVMResponse } from '../models/Webcom_API_Public_Quote_VM_QuoteVMResponse';
import type { Webcom_API_Public_Quote_VM_SelectedAttributesVM } from '../models/Webcom_API_Public_Quote_VM_SelectedAttributesVM';
import type { Webcom_API_Public_Quote_VM_WorkflowActionVM } from '../models/Webcom_API_Public_Quote_VM_WorkflowActionVM';
import { request as __request } from '../core/request';

export class QuotesService {

    /**
     * Gets Quote's revisions
     * @param quoteId Quote ID
     * @returns Webcom_API_Public_Quote_VM_QuoteRevisionVM List of quote's revisions
     * @throws ApiError
     */
    public static async quotesGetQuoteRevisions(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_QuoteRevisionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/revisions`,
        });
        return result.body;
    }

    /**
     * Gets Quote's generated documents
     * @param quoteId Quote ID
     * @returns Webcom_API_Public_Quote_VM_GeneratedDocumentInfoVM List of generated documents
     * @throws ApiError
     */
    public static async quotesGetGeneratedDocuments(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_GeneratedDocumentInfoVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/documents`,
        });
        return result.body;
    }

    /**
     * Gets Quote's attachments
     * @param quoteId
     * @returns Webcom_API_Public_Quote_VM_AttachmentInfoVM List of Quote attachments.
     * @throws ApiError
     */
    public static async quotesGetQuoteAttachments(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_AttachmentInfoVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/attachments`,
        });
        return result.body;
    }

    /**
     * Gets prepeared attachment for download
     * @param quoteId Id of Quote where attachment is located
     * @param attachmentId Id of attachment
     * @returns any Download a generated file
     * @throws ApiError
     */
    public static async quotesDownloadAttachment(
        quoteId: number,
        attachmentId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/attachments/${attachmentId}`,
        });
        return result.body;
    }

    /**
     * Gets prepared document for download
     * @param quoteId Quote ID
     * @param documentId Document ID
     * @returns any Download a generated file
     * @throws ApiError
     */
    public static async quotesDownloadFile(
        quoteId: number,
        documentId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/documents/${documentId}/file`,
        });
        return result.body;
    }

    /**
     * Executes the action (either standard or custom, both are supported).
     * The following actions don’t need additional parameters: <b>New Active Revision</b>, <b>Set Active</b>, <b>Accept Proposal</b>, <b>Reject Proposal</b>, <b>Copy</b>, <b>Delete</b>, <b>Place Order</b>, <b>Create/Update Objects From Quote Items</b>, <b>Create Assets</b>, <b>Create Update SAP Sales Quote</b>, <b>Create/Update Opportunity</b>, <b>Create Custom Object From Quote</b>, <b>CreateQuoteInCRM</b>, <b>Detach From Opportunity</b>, <b>Upgrade to New Product Version</b>, <b>Post Quote Notes Into Account Chatter</b>, <b>Post Quote Notes Into Opportunity Chatter</b>, <b>Send Document to CRM</b>, <b>Update SAP Opportunity</b>, <b>Attach Document To SAP Opportunity</b>, <b>Attach Document To SAP Sales Quote</b>, <b>Attach Document To SAP Opportunity And Sales Quote</b>, <b>Place order to ERP</b>, <b>Update Sales Quote</b>, <b>Make Primary</b> and <b>Release Quote To SAP Commerce</b>.The following actions require additional parameters in the request body:- <b>New Active Revision</b> should contain the <b>NewRevisionName</b> parameter. This parameter is optional, and it contains the name of the newly created revision.- <b>Reassign</b> must contain the <b>NewUserId</b> parameter. This parameter is mandatory, and it contains the ID of the user to whom the quote should be assigned.- <b>Change Status</b> must contain the <b>NewStatusId</b> parameter. This parameter is mandatory, and it contains the ID of the new status of the quote.- <b>Order Status Update</b> must contain the <b>SalesOrderID</b> parameter. This parameter is mandatory, and it contains the ID of the sales order.- <b>Creating Order Failed</b> must contains these parameters: <b>SalesOrderID</b> parameter is mandatory, and it contains the ID of the sales order. <b>ErrorMessage</b> that is being logged after Creating Order Failed is triggered from Billing Revenue and Innovation Management.The message describes the issue that caused the quote synchronization to fail.- <b>Release Quote And Proposal To SAP Commerce</b> must contain the <b>ProposalMessage</b> parameter. This parameter is required, and it contains the message that will be sent with the quote and the proposal.- <b>Submit for Approval</b> must contain the list of approval rules. Each rule must contain these parameters: <b>Rule</b> contains the rule ID, <b>Approvers</b> contains the list of approvers (user IDs) and <b>Comment</b> contains the rule comment.
     * @param quoteId The quote identifier.
     * @param actionId The action identifier.
     * @param request The request
     * @returns Webcom_API_Public_Quote_VM_NewQuoteVMResponse New revision and New active revision actions return the NewQuoteId and other actions return an empty response.
     * @throws ApiError
     */
    public static async quotesExecuteAction(
        quoteId: number,
        actionId: number,
        request: any,
    ): Promise<Webcom_API_Public_Quote_VM_NewQuoteVMResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/actions/${actionId}/invoke`,
            body: request,
        });
        return result.body;
    }

    /**
     * Executes custom action.
     * @param quoteId The quote identifier.
     * @param tableName The request.
     * @param actionId The action identifier.
     * @param request The request
     * @returns any Execute Custom Action
     * @throws ApiError
     */
    public static async quotesExecuteCustomAction(
        quoteId: number,
        tableName: string,
        actionId: number,
        request: any,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/actions/${actionId}/invoke`,
            body: request,
        });
        return result.body;
    }

    /**
     * Get custom actions.
     * @param quoteId The quote identifier.
     * @param tableName The request.
     * @returns any Execute Custom Action
     * @throws ApiError
     */
    public static async quotesGetCustomActions(
        quoteId: number,
        tableName: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/actions`,
        });
        return result.body;
    }

    /**
     * Gets available standard and custom actions for the quote.
     * @param quoteId The quote identifier.
     * @returns Webcom_API_Public_Quote_VM_WorkflowActionVM List of available actions
     * @throws ApiError
     */
    public static async quotesGetAvailableActions(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_WorkflowActionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/actions`,
        });
        return result.body;
    }

    /**
     * Creates new quote.
     * If <b>MarketId</b> is not provided, the system will resolve MarketId based on provided <b>MarketCode</b> and <b>CurrencyCode</b>, if none are provided, the default market will be used for the logged in user.<b>CustomerId</b> takes priority over <b>CustomerCode</b> so if both are provided, the system disregards the <b>CustomerCode</b> and looks for the customer based on the <b>CustomerId</b>.Customer <b>RoleType</b> accepts <em>1</em> for billto customer, <em>2</em> for shipto customer, and <em>3</em> for enduser.<b>PricebookId</b> takes priority over <b>DistributionChannel</b> so if both are provided, the system disregards the <b>DistributionChannel</b> and looks for the pricebook based on the <b>PricebookId</b>.SAP CPQ looks for the pricebook with the respective <b>DistributionChannel</b> in the market provided in <b>MarketId</b>.
     * @param quoteVmRequest
     * @returns Webcom_API_Public_Quote_VM_QuoteVMResponse Id and Number of created quote
     * @throws ApiError
     */
    public static async quotesCreateNewQuote(
        quoteVmRequest: Webcom_API_Public_Quote_VM_QuoteVMRequest,
    ): Promise<Webcom_API_Public_Quote_VM_QuoteVMResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes`,
            body: quoteVmRequest,
        });
        return result.body;
    }

    /**
     * Get collaboration comments for the quote.
     * @param quoteId The quote identifier.
     * @returns Webcom_API_Public_Quote_VM_QuoteCommentVM List of quote's comments
     * @throws ApiError
     */
    public static async quotesGetQuoteCollaborationComments(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/comments`,
        });
        return result.body;
    }

    /**
     * Post collaboration comments for the quote.
     * @param quoteId The quote identifier.
     * @param comments List of quote comment objects
     * @returns any Save quote's collaboration comments
     * @throws ApiError
     */
    public static async quotesPostQuoteCollaborationComments(
        quoteId: number,
        comments: Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/comments`,
            body: comments,
        });
        return result.body;
    }

    /**
     * Gets the quote item comments.
     * @param quoteId The quote identifier.
     * @param itemId The item identifier.
     * @returns Webcom_API_Public_Quote_VM_QuoteCommentVM List of quote's item comments
     * @throws ApiError
     */
    public static async quotesGetQuoteItemComments(
        quoteId: number,
        itemId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}/comments`,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Posts quote item comments.
     * @param quoteId The quote identifier.
     * @param itemId The item identifier.
     * @param comments The list of comments.
     * @returns any Save quote's item comments
     * @throws ApiError
     */
    public static async quotesPostQuoteItemComments(
        quoteId: number,
        itemId: number,
        comments: Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}/comments`,
            body: comments,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the quote.
     * @param quoteId The quote identifier.
     * @returns Webcom_API_Public_Quote_VM_QuoteVMResponse Quote data
     * @throws ApiError
     */
    public static async quotesGetQuote(
        quoteId: number,
    ): Promise<Webcom_API_Public_Quote_VM_QuoteVMResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}`,
        });
        return result.body;
    }

    /**
     * Delete Quote
     * @param quoteId The quote identifier.
     * @returns any Delete quote
     * @throws ApiError
     */
    public static async quotesDeleteQuote(
        quoteId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/quotes/${quoteId}`,
        });
        return result.body;
    }

    /**
     * Patch Quote
     * @param quoteId The quote identifier.
     * @param quoteFields Quote fields (standard and/or custom) to patch
     * @returns any Update quote
     * @throws ApiError
     */
    public static async quotesUpdateQuote(
        quoteId: number,
        quoteFields: Record<string, any>,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/quotes/${quoteId}`,
            body: quoteFields,
        });
        return result.body;
    }

    /**
     * Patch Quote
     * @param quoteId The quote identifier.
     * @param roleId The role identifier.
     * @param customerFields Quote fields (standard and/or custom) to patch
     * @returns any Update customers on quote.
     * @throws ApiError
     */
    public static async quotesUpdateCustomers(
        quoteId: number,
        roleId: number,
        customerFields: Record<string, string>,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/quotes/${quoteId}/customers/${roleId}`,
            body: customerFields,
        });
        return result.body;
    }

    /**
     * Get the items from the quote.
     * The following query parameter is supported: $expand: use this parameter to specify the comma separated list of sub nodes which need to be included in the response.Possible values for $expand are: SelectedAttributes, PricingConditions, ExternalConfigurations.
     * @param quoteId The unique quote identifier.
     * @returns Webcom_API_Public_Quote_VM_QuoteItemSapStandardVm List of quote's items.
     * @throws ApiError
     */
    public static async quotesGetItems(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_QuoteItemSapStandardVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items`,
        });
        return result.body;
    }

    /**
     * Add items to quote
     * If both <b>PartNumber</b> and <b>ProductSystemId</b> are provided, the system disregards the <b>PartNumber</b> and looks for the item based on the <b>ProductSystemId</b> as this field takes priority.
     * @param quoteId The quote identifier.
     * @param items List of items.
     * @returns SAP_CPQ_Quote_Common_DTO_RFQ_QuoteItemResponse List of created quote's items
     * @throws ApiError
     */
    public static async quotesAddItemsToQuote(
        quoteId: number,
        items: Array<Webcom_API_Public_Quote_VM_QuoteItemRequestVM>,
    ): Promise<Array<SAP_CPQ_Quote_Common_DTO_RFQ_QuoteItemResponse>> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/items`,
            body: items,
        });
        return result.body;
    }

    /**
     * Get the specific item from the quote.
     * The following query parameter is supported: $expand: use this parameter to specify the comma separated list of sub nodes which need to be included in the response.Possible values for $expand are: SelectedAttributes, PricingConditions, ExternalConfigurations.
     * @param quoteId The unique quote identifier.
     * @param itemId The unique item identifier.
     * @returns Webcom_API_Public_Quote_VM_QuoteItemSapStandardVm Gets the specific quote's item.
     * @throws ApiError
     */
    public static async quotesGetItem(
        quoteId: number,
        itemId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_QuoteItemSapStandardVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}`,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Delete Quote Item
     * @param quoteId The quote identifier.
     * @param itemId The item identifier.
     * @returns any Delete quote's item
     * @throws ApiError
     */
    public static async quotesDeleteItem(
        quoteId: number,
        itemId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}`,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Update quote Item
     * @param quoteId The quote identifier.
     * @param itemId The item identifier.
     * @param itemFields Item fields
     * @returns any Update quote's item
     * @throws ApiError
     */
    public static async quotesUpdateItem(
        quoteId: number,
        itemId: number,
        itemFields: Record<string, string>,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}`,
            body: itemFields,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Gets product types
     * @param quoteId
     * @returns any Gets quote's product types
     * @throws ApiError
     */
    public static async quotesGetProductTypes(
        quoteId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/productTypes`,
        });
        return result.body;
    }

    /**
     * Gets product types count
     * @param quoteId
     * @returns any Gets quote's product types
     * @throws ApiError
     */
    public static async quotesGetProductTypesCount(
        quoteId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/productTypes/$count`,
        });
        return result.body;
    }

    /**
     * Get Quote Table
     * @param quoteId The quote identifier.
     * @param tableName The quote table name.
     * @returns Webcom_API_Public_Quote_VM_QuoteTableRowVM Get rows of quote table with pagination
     * @throws ApiError
     */
    public static async quotesGetQuoteTableRows(
        quoteId: number,
        tableName: string,
    ): Promise<Array<Webcom_API_Public_Quote_VM_QuoteTableRowVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/rows`,
        });
        return result.body;
    }

    /**
     * Inserts new row in quote table.
     * @param quoteId
     * @param tableName
     * @param quoteTableRows
     * @returns any OK
     * @throws ApiError
     */
    public static async quotesAddQuoteTableRows(
        quoteId: number,
        tableName: string,
        quoteTableRows: Array<SAP_CPQ_Quote_Common_DTO_QuoteTableRowRequest>,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/rows`,
            body: quoteTableRows,
        });
        return result.body;
    }

    /**
     * Delete Quote Table Row
     * @param quoteId The quote identifier.
     * @param tableName The quote table name.
     * @param rowId The row id
     * @returns any Delete Quote Table Row
     * @throws ApiError
     */
    public static async quotesDeleteQuoteTableRow(
        quoteId: number,
        tableName: string,
        rowId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/rows/${rowId}`,
        });
        return result.body;
    }

    /**
     * Updates single row in quote table.
     * @param quoteId
     * @param tableName
     * @param rowId
     * @param quoteTableCellRequestVm
     * @returns any OK
     * @throws ApiError
     */
    public static async quotesUpdateQuoteTableRows(
        quoteId: number,
        tableName: string,
        rowId: number,
        quoteTableCellRequestVm: Array<SAP_CPQ_Quote_Common_DTO_QuoteTableCellRequest>,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/rows/${rowId}`,
            body: quoteTableCellRequestVm,
        });
        return result.body;
    }

    /**
     * Get Quote Table
     * @param quoteId The quote identifier.
     * @param tableName The quote table name.
     * @returns number Get number of rows in quote table
     * @throws ApiError
     */
    public static async quotesGetQuoteTableTotalNumberOfRows(
        quoteId: number,
        tableName: string,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/quoteTables/${tableName}/rows/$count`,
        });
        return result.body;
    }

    /**
     * Get the items count from the quote.
     * @param quoteId The unique quote identifier.
     * @returns any Total numbers of quote's items.
     * @throws ApiError
     */
    public static async quotesGetItemsCount(
        quoteId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items/$count`,
        });
        return result.body;
    }

    /**
     * Get the selected attributes for the quote item.
     * Gets all attributes on an item, including those without a selected attribute value. The Values node is populated with the selected attribute values.
     * @param quoteId The unique quote identifier.
     * @param itemId The unique item identifier.
     * @returns Webcom_API_Public_Quote_VM_SelectedAttributesVM Selected attributes for the quote are retrieved successfully.
     * @throws ApiError
     */
    public static async quotesGetItemSelectedAttributes(
        quoteId: number,
        itemId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_SelectedAttributesVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}/selectedAttributes`,
            errors: {
                403: `The logged user doesn't have the rights to view the quote.`,
                404: `Quote or quote item not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Gets quote item pricing conditions.
     * An array of pricing conditions or empty array if quote item field to pricing condition mappings are not defined for quote pricing procedure.
     * @param quoteId The unique quote identifier.
     * @param itemId The unique item identifier.
     * @returns Webcom_API_Public_Quote_VM_PricingConditionVM Gets quote item pricing conditions.
     * @throws ApiError
     */
    public static async quotesGetItemPricingConditions(
        quoteId: number,
        itemId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_PricingConditionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}/pricingConditions`,
            errors: {
                400: `Occurs if non-numeric quote item field is mapped to a pricing condition rate or value.`,
                404: `Quote or quote item not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets quote header pricing conditions.
     * An array of pricing conditions or empty array if quote header field to pricing condition mappings are not defined for quote pricing procedure.
     * @param quoteId The unique quote identifier.
     * @returns Webcom_API_Public_Quote_VM_PricingConditionVM Gets quote item pricing conditions.
     * @throws ApiError
     */
    public static async quotesGetHeaderPricingConditions(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_PricingConditionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/pricingConditions`,
            errors: {
                400: `Occurs if non-numeric quote header field is mapped to a pricing condition rate or value.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the involved parties on the quote.
     * Gets the details of all involved parties on the quote (for example, partner function ID and key, partner function name, business partner ID, and so on).
     * @param quoteId The quote identifier.
     * @returns Webcom_API_Public_Quote_VM_InvolvedPartyVM Retrieves the list of involved parties by the quote ID.
     * @throws ApiError
     */
    public static async quotesGetInvolvedParties(
        quoteId: number,
    ): Promise<Array<Webcom_API_Public_Quote_VM_InvolvedPartyVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/involvedParties`,
            errors: {
                403: `The user doesn't have the rights to perform the action or the Business Partners feature is not enabled.`,
                404: `Quote not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes involved party.
     * Removes the involved party from the quote, while the business partner and the partner function remain unchanged in the Setup.
     * @param quoteId The quote identifier.
     * @param involvedPartyId The involved party identifier.
     * @returns any Involved party successfully deleted.
     * @throws ApiError
     */
    public static async quotesDeleteInvolvedParty(
        quoteId: number,
        involvedPartyId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/quotes/${quoteId}/involvedParties/${involvedPartyId}`,
            errors: {
                400: `Requested involved party does not exist.`,
                403: `The user doesn't have the rights to perform the action or the Business Partners feature is not enabled.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Updates involved party.
     * Updates the partner function and business partner details on the quote while they stay unchanged in the Setup. You can't create new business partners through this API, you can only update the existing ones.
     * @param quoteId The quote identifier.
     * @param involvedPartyId The involved party identifier.
     * @param involvedPartyRequest The involved party request.
     * @returns any Involved party successfully updated.
     * @throws ApiError
     */
    public static async quotesUpdateInvolvedParty(
        quoteId: number,
        involvedPartyId: number,
        involvedPartyRequest: Record<string, string>,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/quotes/${quoteId}/involvedParties/${involvedPartyId}`,
            body: involvedPartyRequest,
            errors: {
                400: `Requested involved party does not exist.`,
                403: `The user doesn't have the rights to perform the action or the Business Partners feature is not enabled.`,
                404: `Quote not found.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Adds the involved party to the specified quote.
     * If the partner function with the specified key exists in the <b>Setup</b>, the system searches for the business partner with the business partner ID specified in the body.If there is a business partner with that ID in the <b>Setup</b>, the system uses it to create the involved party. The details of the business partner defined in the <b>Setup</b> are overwritten on the quote with the details sent in the body. If there is no business partner with that ID in the <b>Setup</b>, there is a corresponding response.If the body of the request doesn’t contain the business partner ID, the system uses the external ID to find the business partner. If there is a business partner with the matching external ID in the <b>Setup</b>, the system uses it to create the involved party. The details of the business partner defined in the <b>Setup</b> are overwritten on the quote with the details sent in the body.If there is a matching business partner ID in the <b>Setup</b>, but the external ID from thebody doesn’t match any of the external IDs in the <b>Setup</b>, the system overwrites the external ID of the business partner with the ID from the body.If the request body doesn’t contain the business partner ID nor the external ID, the system creates a new business partner on the quote with the details sent in the body. This scenario is applicable only if the <b>Allow adding business partners on quotes without creating them first in Setup</b> parameter is enabled in the tenant.
     * @param quoteId The quote identifier.
     * @param partnerFunctionKey The partner function key.
     * @param involvedPartyVm The involved party view model.
     * @returns any Involved party successfully added.
     * @throws ApiError
     */
    public static async quotesAddInvolvedParty(
        quoteId: number,
        partnerFunctionKey: string,
        involvedPartyVm: Webcom_API_Public_Quote_VM_InvolvedPartyVM,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/involvedParties/${partnerFunctionKey}`,
            body: involvedPartyVm,
            errors: {
                400: `Invalid request body.`,
                403: `The user doesn't have the rights to perform the action or the Business Partners feature is not enabled.`,
                404: `Requested partner function does not exist.`,
                500: `Internal Server Error.`,
            },
        });
        return result.body;
    }

    /**
     * Gets available actions for quote item.
     * @param quoteId The unique quote identifier.
     * @param itemId The unique item identifier.
     * @returns any OK
     * @throws ApiError
     */
    public static async quotesGetQuoteItemActions(
        quoteId: number,
        itemId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}/actions`,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Invokes selected actions on quote item
     * @param quoteId The unique quote identifier.
     * @param itemId The unique item identifier.
     * @param actionId The unique action identifier.
     * @returns any OK
     * @throws ApiError
     */
    public static async quotesExecuteQuoteItemAction(
        quoteId: number,
        itemId: number,
        actionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/quotes/${quoteId}/items/${itemId}/actions/${actionId}/invoke`,
            errors: {
                404: `Quote or quote item not found.`,
            },
        });
        return result.body;
    }

    /**
     * Get quote approvals history
     * @param quoteId The unique quote identifier.
     * @returns any OK
     * @throws ApiError
     */
    public static async quotesGetApprovalsHistory(
        quoteId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/approvals/history`,
        });
        return result.body;
    }

    /**
     * @param quoteId
     * @returns any OK
     * @throws ApiError
     */
    public static async quotesGetApprovals(
        quoteId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/quotes/${quoteId}/approvals`,
        });
        return result.body;
    }

}