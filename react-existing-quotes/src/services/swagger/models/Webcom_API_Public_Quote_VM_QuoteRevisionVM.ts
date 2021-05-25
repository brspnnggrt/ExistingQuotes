/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_VM_MarketVM } from './Webcom_API_Public_Quote_VM_MarketVM';
import type { Webcom_API_Public_Quote_VM_QuoteStatusVM } from './Webcom_API_Public_Quote_VM_QuoteStatusVM';
import type { Webcom_API_Public_Quote_VM_TotalAmountVM } from './Webcom_API_Public_Quote_VM_TotalAmountVM';

/**
 * Quote revision
 */
export type Webcom_API_Public_Quote_VM_QuoteRevisionVM = {
    /**
     * Quote ID
     */
    QuoteId?: string;
    /**
     * Owner ID
     */
    OwnerId?: string;
    /**
     * Name of revision
     */
    Name?: string;
    /**
     * Description
     */
    Description?: string;
    /**
     * Date when quote revision was created
     */
    DateCreated?: string;
    /**
     * Date when quote revision was last modified
     */
    DateModified?: string;
    /**
     * Revision number
     */
    RevisionNumber?: number;
    /**
     * Parent revision
     */
    ParentRevision?: string;
    /**
     * Is revision active
     */
    IsActive?: boolean;
    /**
     * Status info
     */
    Status?: Webcom_API_Public_Quote_VM_QuoteStatusVM;
    /**
     * Market info
     */
    Market?: Webcom_API_Public_Quote_VM_MarketVM;
    /**
     * Total amount info
     */
    TotalAmount?: Webcom_API_Public_Quote_VM_TotalAmountVM;
}
