/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_RD_Approvals_ConditionVM } from './Webcom_API_RD_Approvals_ConditionVM';
import type { Webcom_API_RD_Approvals_ResponsibilityVM } from './Webcom_API_RD_Approvals_ResponsibilityVM';

/**
 * Class ApprovalResponse.
 */
export type Webcom_API_RD_Approvals_ApprovalResponse = {
    /**
     * Gets or sets the error information.
     */
    ErrorInfo?: string;
    /**
     * Gets or sets the success information.
     */
    SuccessInfo?: string;
    /**
     * Gets or sets the message.
     */
    Message?: string;
    /**
     * Gets or sets the redirection URL.
     */
    RedirectionUrl?: string;
    /**
     * Gets or sets the visitor identifier.
     */
    VisitorId?: number;
    /**
     * Gets or sets the owner identifier.
     */
    OwnerId?: number;
    /**
     * Gets or sets a value indicating whether this instance is user delegated approver.
     */
    IsUserDelegatedApprover?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is approval needed.
     */
    IsApprovalNeeded?: boolean;
    /**
     * Gets or sets a value indicating whether [allow submitters comment].
     */
    AllowSubmittersComment?: boolean;
    /**
     * Gets or sets a value indicating whether [are actions visible].
     */
    AreActionsVisible?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is quote approved.
     */
    IsQuoteApproved?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is quote rejected.
     */
    IsQuoteRejected?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is approve disabled.
     */
    IsApproveDisabled?: boolean;
    /**
     * Gets or sets the name of the approve action.
     */
    ApproveActionName?: string;
    /**
     * Gets or sets the conditions title.
     */
    ConditionsTitle?: string;
    /**
     * Gets or sets the pending responsibilities title.
     */
    PendingResponsibilitiesTitle?: string;
    /**
     * Gets or sets the approval history title.
     */
    ApprovalHistoryTitle?: string;
    /**
     * Gets or sets the conditions.
     */
    Conditions?: Array<Webcom_API_RD_Approvals_ConditionVM>;
    /**
     * Gets or sets the expired conditions.
     */
    ExpiredConditions?: Array<Webcom_API_RD_Approvals_ConditionVM>;
    /**
     * Gets or sets the actions.
     */
    Actions?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the responsibilities.
     */
    Responsibilities?: Array<Webcom_API_RD_Approvals_ResponsibilityVM>;
    /**
     * Gets or sets the pending responsibilities.
     */
    PendingResponsibilities?: Array<Webcom_API_RD_Approvals_ResponsibilityVM>;
    /**
     * Get or set if user has access to quote list
     */
    IsQuoteListAvailable?: boolean;
}
