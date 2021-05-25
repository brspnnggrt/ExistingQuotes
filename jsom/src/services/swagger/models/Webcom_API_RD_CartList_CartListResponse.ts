/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_GridVM } from './Webcom_API_RD_CartList_GridVM';

/**
 * Class CartListResponse.
 */
export type Webcom_API_RD_CartList_CartListResponse = {
    /**
     * Gets or sets the WorkflowContext client data that will be sent to the client.
     */
    WorkflowClientData?: any;
    /**
     * Gets or sets the main grid.
     */
    MainGrid?: Webcom_API_RD_CartList_GridVM;
    /**
     * Gets or sets the delegated approver grid.
     */
    DelegatedApproverGrid?: Webcom_API_RD_CartList_GridVM;
    /**
     * Gets or sets a value indicating whether [load delegated approver].
     */
    LoadDelegatedApprover?: boolean;
}
