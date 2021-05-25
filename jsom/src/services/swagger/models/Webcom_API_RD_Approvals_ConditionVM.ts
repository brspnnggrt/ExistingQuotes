/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Approvals_ApproverVM } from './Webcom_API_RD_Approvals_ApproverVM';

/**
 * Class ConditionVM.
 */
export type Webcom_API_RD_Approvals_ConditionVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the group identifier.
     */
    GroupId?: number;
    /**
     * Gets or sets the company identifier.
     */
    CompanyId?: number;
    /**
     * Gets or sets the condition description.
     */
    ConditionDescription?: string;
    /**
     * Gets or sets the condition comment.
     */
    Comment?: string;
    /**
     * Gets or sets the can choose approver.
     */
    CanChooseApprover?: number;
    /**
     * Gets or sets the approvers.
     */
    Approvers?: Array<Webcom_API_RD_Approvals_ApproverVM>;
}
