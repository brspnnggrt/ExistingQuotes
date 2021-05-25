/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_AdditionalFieldVM } from './Webcom_API_RD_CartList_AdditionalFieldVM';
import type { Webcom_API_RD_CartList_CartStatusVM } from './Webcom_API_RD_CartList_CartStatusVM';

/**
 * Class FilterVM.
 */
export type Webcom_API_RD_CartList_FilterVM = {
    /**
     * Gets or sets the additional fields.
     */
    AdditionalFields?: Array<Webcom_API_RD_CartList_AdditionalFieldVM>;
    /**
     * Gets or sets all statuses.
     */
    AllStatuses?: Array<Webcom_API_RD_CartList_CartStatusVM>;
    /**
     * Gets or sets the date format.
     */
    DateFormat?: string;
    /**
     * Gets or sets the date from.
     */
    DateFrom?: string;
    /**
     * Gets or sets the date to.
     */
    DateTo?: string;
    /**
     * Gets or sets the last days.
     */
    LastDays?: number;
    /**
     * Gets or sets the selected statuses.
     */
    SelectedStatuses?: Array<number>;
}
