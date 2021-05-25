/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_WorkflowTransition } from './Webcom_Configurator_Core_WorkflowTransition';

export type SAP_CPQ_Quote_Common_Workflow_GenericAction = {
    Name?: string;
    WorkflowTransition?: Webcom_Configurator_Core_WorkflowTransition;
    ActionId?: number;
    NotSupported?: boolean;
    readonly PreActionOverNewQuote?: boolean;
    readonly PostActionOverNewQuote?: boolean;
    MainAction?: SAP_CPQ_Quote_Common_Workflow_GenericAction;
    readonly ClientScriptIncludeFiles?: Array<string>;
    readonly UserActionScript?: string;
}
