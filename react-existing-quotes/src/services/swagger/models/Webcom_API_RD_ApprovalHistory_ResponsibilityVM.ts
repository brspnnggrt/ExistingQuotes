/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class ResponsibilityVM.
 */
export type Webcom_API_RD_ApprovalHistory_ResponsibilityVM = {
    /**
     * Gets or sets the name of the approver.
     */
    ApproverName?: string;
    /**
     * Gets or sets the sent by.
     */
    SentBy?: string;
    /**
     * Gets or sets the date submitted.
     */
    DateSubmitted?: string;
    /**
     * Gets or sets the date resolved.
     */
    DateResolved?: string;
    /**
     * Gets or sets the name of the condition.
     */
    ConditionName?: string;
    /**
     * Gets or sets the violation reason.
     */
    ViolationReason?: string;
    /**
     * Gets or sets the status.
     */
    Status?: string;
    /**
     * Gets or sets the actual approver.
     */
    ActualApprover?: string;
    /**
     * Gets or sets the comment.
     */
    Comment?: string;
    /**
     * Gets or sets whether the approver for a pending rule is blocked from deletion
     */
    PendingApproverBlocked?: boolean;
    /**
     * Gets or sets whether the submitter for a pending rule is blocked from deletion
     */
    PendingSubmitterBlocked?: boolean;
}
