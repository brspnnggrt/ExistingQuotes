/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SAP_CPQ_Quote_Common_Workflow_GenericAction } from './SAP_CPQ_Quote_Common_Workflow_GenericAction';
import type { SAP_CPQ_Quote_Common_Workflow_Result } from './SAP_CPQ_Quote_Common_Workflow_Result';
import type { Webcom_Configurator_Core_WorkflowTransition } from './Webcom_Configurator_Core_WorkflowTransition';

export type SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments = {
    readonly MainAction?: SAP_CPQ_Quote_Common_Workflow_GenericAction;
    readonly PreActions?: Array<SAP_CPQ_Quote_Common_Workflow_GenericAction>;
    readonly PostActions?: Array<SAP_CPQ_Quote_Common_Workflow_GenericAction>;
    readonly HasCartCompositeNumberChanged?: boolean;
    readonly OwnerId?: number;
    readonly CartId?: number;
    readonly TabId?: number;
    readonly OldStatusId?: number;
    readonly NewStatusId?: number;
    readonly MainActionId?: number;
    GenerateHtml?: boolean;
    NoAction?: boolean;
    AddCustomActionToHistory?: boolean;
    readonly WorkflowTransition?: Webcom_Configurator_Core_WorkflowTransition;
    PreviousArgument?: SAP_CPQ_Quote_Common_Workflow_ActionExecutionArguments;
    Result?: SAP_CPQ_Quote_Common_Workflow_Result;
    Custom?: any;
    DoNotContinueActionExecution?: boolean;
    RedirectToURL?: string;
    ClientScript?: string;
    WorkflowClientData?: any;
    NewOwnerId?: number;
    NewCartId?: number;
    ChangeQuoteStatus?: boolean;
}
