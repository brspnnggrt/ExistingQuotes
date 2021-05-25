/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Common_Models_FilterVM } from './Webcom_API_Common_Models_FilterVM';
import type { Webcom_API_Common_Models_OrderVM } from './Webcom_API_Common_Models_OrderVM';
import type { Webcom_API_Common_Models_PagerVM } from './Webcom_API_Common_Models_PagerVM';

/**
 * Represents filtered request
 */
export type Webcom_API_Common_Models_FilteredRequest = {
    /**
     * Filters
     */
    Filters?: Array<Webcom_API_Common_Models_FilterVM>;
    /**
     * QuickFilter
     */
    QuickFilter?: string;
    /**
     * Order by
     */
    OrderBy?: Webcom_API_Common_Models_OrderVM;
    /**
     * Pager
     */
    Pager?: Webcom_API_Common_Models_PagerVM;
}
