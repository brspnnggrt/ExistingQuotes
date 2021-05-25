/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SAP_CPQ_Quote_Common_Workflow_Result_Message } from './SAP_CPQ_Quote_Common_Workflow_Result_Message';

export type SAP_CPQ_Quote_Common_Workflow_Result = {
    Success?: boolean;
    Title?: string;
    SuccessInfo?: string;
    ActionRequiredFailed?: boolean;
    readonly Messages?: Array<SAP_CPQ_Quote_Common_Workflow_Result_Message>;
}
