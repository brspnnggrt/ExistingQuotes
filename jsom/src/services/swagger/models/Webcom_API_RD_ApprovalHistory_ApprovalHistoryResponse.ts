/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Common_Models_PagerVM } from './Webcom_API_Common_Models_PagerVM';
import type { Webcom_API_NameValuePair } from './Webcom_API_NameValuePair';
import type { Webcom_API_RD_ApprovalHistory_DelegatedApproverVM } from './Webcom_API_RD_ApprovalHistory_DelegatedApproverVM';
import type { Webcom_API_RD_ApprovalHistory_ResponsibilityVM } from './Webcom_API_RD_ApprovalHistory_ResponsibilityVM';

/**
 * Class ApprovalHistoryResponse.
 */
export type Webcom_API_RD_ApprovalHistory_ApprovalHistoryResponse = {
    /**
     * Gets or sets the sort method.
     */
    SortMethod?: string;
    /**
     * Gets or sets the cart composite number.
     */
    CartCompositeNumber?: string;
    /**
     * Gets or sets the delegated approvers.
     */
    DelegatedApprovers?: Array<Webcom_API_RD_ApprovalHistory_DelegatedApproverVM>;
    /**
     * Gets or sets the columns list.
     */
    ColumnsList?: Array<Webcom_API_NameValuePair>;
    /**
     * Gets or sets the responsibilities.
     */
    Responsibilities?: Array<Webcom_API_RD_ApprovalHistory_ResponsibilityVM>;
    /**
     * Get or set if user has access to quote list
     */
    IsQuoteListAvailable?: boolean;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_Common_Models_PagerVM;
}
