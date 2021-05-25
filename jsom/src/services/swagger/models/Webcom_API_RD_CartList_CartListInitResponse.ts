/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_FilterVM } from './Webcom_API_RD_CartList_FilterVM';
import type { Webcom_API_RD_CartList_GridVM } from './Webcom_API_RD_CartList_GridVM';
import type { Webcom_API_RD_CartList_PagerVM } from './Webcom_API_RD_CartList_PagerVM';

/**
 * Class CartListInitResponse.
 */
export type Webcom_API_RD_CartList_CartListInitResponse = {
    /**
     * Gets or sets the current tab identifier.
     */
    CurrentTabId?: number;
    /**
     * Gets or sets the filter.
     */
    Filter?: Webcom_API_RD_CartList_FilterVM;
    /**
     * Gets or sets a value indicating whether this instance is in view mode.
     */
    IsInViewMode?: boolean;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_RD_CartList_PagerVM;
    /**
     * Gets or sets the tabs.
     */
    Tabs?: Array<string>;
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
