/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Common_Models_PagerVM } from './Webcom_API_Common_Models_PagerVM';
import type { Webcom_API_RD_Cart_CartActionsVM } from './Webcom_API_RD_Cart_CartActionsVM';
import type { Webcom_API_RD_Cart_CartTabsVM } from './Webcom_API_RD_Cart_CartTabsVM';
import type { Webcom_API_RD_Cart_VM_Documents_AttachmentsVM } from './Webcom_API_RD_Cart_VM_Documents_AttachmentsVM';
import type { Webcom_API_RD_Cart_VM_Documents_GeneratedDocumentsVM } from './Webcom_API_RD_Cart_VM_Documents_GeneratedDocumentsVM';

/**
 * CartDocumentsResponse class
 */
export type Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse = {
    /**
     * Gets or sets the tabs data.
     */
    TabsData?: Webcom_API_RD_Cart_CartTabsVM;
    /**
     * Gets or sets the current table.
     */
    LoadedTables?: Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse.LoadedTables;
    /**
     * Gets or sets the attachments list.
     */
    AttachmentsList?: Array<Webcom_API_RD_Cart_VM_Documents_AttachmentsVM>;
    /**
     * Gets or sets the generated documents list.
     */
    GeneratedDocumentsList?: Array<Webcom_API_RD_Cart_VM_Documents_GeneratedDocumentsVM>;
    /**
     * Gets or sets the sort attachments.
     */
    SortAttachments?: string;
    /**
     * Gets or sets the sort gen document.
     */
    SortGenDoc?: string;
    /**
     * Gets or sets the generated documents pager.
     */
    GeneratedDocumentsPager?: Webcom_API_Common_Models_PagerVM;
    /**
     * Gets or sets the attachments pager.
     */
    AttachmentsPager?: Webcom_API_Common_Models_PagerVM;
    /**
     * Gets or sets the date separator.
     */
    DateSeparator?: number;
    /**
     * Gets or sets the date format.
     */
    DateFormat?: number;
    /**
     * Show additional info.
     */
    ShowAdditionalInfo?: boolean;
    /**
     * Flag for checking whether user can see previously generated documents.
     */
    UserCanSeePreviousDocs?: boolean;
    /**
     * Cart actions model.
     */
    CartActionsModel?: Webcom_API_RD_Cart_CartActionsVM;
}

export namespace Webcom_API_RD_Cart_VM_Documents_CartDocumentsResponse {

    /**
     * Gets or sets the current table.
     */
    export enum LoadedTables {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
