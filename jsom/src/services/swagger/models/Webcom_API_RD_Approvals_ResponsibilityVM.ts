/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class ResponsibilityVM.
 */
export type Webcom_API_RD_Approvals_ResponsibilityVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the submit counter.
     */
    SubmitCounter?: number;
    /**
     * Gets or sets the maximum submit counter.
     */
    MaxSubmitCounter?: number;
    /**
     * Gets or sets the resp identifier.
     */
    RespId?: number;
    /**
     * Gets or sets the approver identifier.
     */
    ApproverId?: number;
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
     * Gets or sets the name of the condition.
     */
    ConditionName?: string;
    /**
     * Gets or sets the condition description.
     */
    ConditionDescription?: string;
    /**
     * Gets or sets the status.
     */
    Status?: string;
    /**
     * Gets or sets the status identifier.
     */
    StatusId?: number;
    /**
     * Gets or sets the status image class.
     */
    StatusImageClass?: string;
    /**
     * Gets or sets the comment.
     */
    Comment?: string;
    /**
     * Gets or sets the performed by.
     */
    PerformedBy?: string;
    /**
     * Gets or sets the replaced approver identifier.
     */
    ReplacedApproverId?: number;
    /**
     * Gets or sets the recalculation condition for parallel approval process.
     */
    ReCalculatedCondition?: string;
    /**
     * Gets or sets the snapshot formula for parallel approval process.
     */
    SnapshotFormula?: string;
    /**
     * Gets or sets the out of office approver identifier.
     */
    OutOfOfficeApproverId?: number;
    /**
     * Gets or sets whether the approver is blocked
     */
    IsApproverBlocked?: boolean;
    /**
     * Gets or sets whether submitter is blocked
     */
    IsSubmitterBlocked?: boolean;
}
