/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SAP_CPQ_Quote_Common_DTO_QuoteTableRequest } from './SAP_CPQ_Quote_Common_DTO_QuoteTableRequest';
import type { Webcom_API_Public_Quote_CustomerRequestVM } from './Webcom_API_Public_Quote_CustomerRequestVM';
import type { Webcom_API_Public_Quote_CustomFieldVM } from './Webcom_API_Public_Quote_CustomFieldVM';
import type { Webcom_API_Public_Quote_VM_InvolvedPartyVM } from './Webcom_API_Public_Quote_VM_InvolvedPartyVM';
import type { Webcom_API_Public_Quote_VM_QuoteCommentRequestVM } from './Webcom_API_Public_Quote_VM_QuoteCommentRequestVM';
import type { Webcom_API_Public_Quote_VM_QuoteItemRequestVM } from './Webcom_API_Public_Quote_VM_QuoteItemRequestVM';

/**
 * The Quote Request
 */
export type Webcom_API_Public_Quote_VM_QuoteVMRequest = {
    /**
     * Get or set external id.
     */
    ExternalId?: string;
    /**
     * Get or set external system id.
     */
    ExternalSystemId?: string;
    /**
     * Get or set market id.
     */
    MarketId?: number;
    /**
     * Gets or sets market code.
     */
    MarketCode?: string;
    /**
     * Gets or sets Currency Code
     */
    CurrencyCode?: string;
    /**
     * Get or sets pricebook id.
     */
    PricebookId?: number;
    /**
     * Get or set distribution channel.
     */
    DistributionChannel?: string;
    /**
     * Get or set global comment.
     */
    GlobalComment?: string;
    /**
     * Get or set origin.
     */
    Origin?: string;
    /**
     * Get or set opportunity identifier
     */
    OpportunityId?: string;
    /**
     * Get or set opportunity name
     */
    OpportunityName?: string;
    /**
     * Get or set opportunity to be primary
     */
    IsPrimary?: boolean;
    /**
     * Get or set error message
     */
    ErrorMessage?: string;
    /**
     * List of collaboration comments.
     */
    Comments?: Array<Webcom_API_Public_Quote_VM_QuoteCommentRequestVM>;
    /**
     * List of customers.
     */
    Customers?: Array<Webcom_API_Public_Quote_CustomerRequestVM>;
    /**
     * List of custom fields.
     */
    CustomFields?: Array<Webcom_API_Public_Quote_CustomFieldVM>;
    /**
     * List of quote's items.
     */
    Items?: Array<Webcom_API_Public_Quote_VM_QuoteItemRequestVM>;
    /**
     * Gets or sets the involved parties.
     */
    InvolvedParties?: Array<Webcom_API_Public_Quote_VM_InvolvedPartyVM>;
    /**
     * Gets or sets the quote tables.
     */
    QuoteTables?: Array<SAP_CPQ_Quote_Common_DTO_QuoteTableRequest>;
}
