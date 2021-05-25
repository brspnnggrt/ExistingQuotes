/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_UserPersonalization_SelectedUnitOfMeasurmentVM } from './Webcom_API_RD_UserPersonalization_SelectedUnitOfMeasurmentVM';

/**
 * View model container that holds data usedfor saving personalization details
 */
export type Webcom_API_RD_UserPersonalization_SavePersonalizationRequest = {
    /**
     * Gets or sets the date format.
     */
    DateFormat?: number;
    /**
     * Gets or sets the date separator.
     */
    DateSeparator?: number;
    /**
     * Gets or sets the number format.
     */
    NumberFormat?: number;
    /**
     * Gets or sets the market identifier.
     */
    MarketId?: number;
    /**
     * Gets or sets the pricebook identifier.
     */
    PricebookId?: number;
    /**
     * Gets or sets the dictionary identifier.
     */
    DictionaryId?: number;
    /**
     * Gets or sets the time zone identifier.
     */
    TimeZoneId?: string;
    /**
     * Gets or sets if user grant access to admin.
     */
    GrantAccessToAdmin?: number;
    /**
     * Gets or sets date until when admin can log in as user.
     */
    GrantAccessToAdminDate?: string;
    /**
     * Gets or sets if user grant access to support.
     */
    GrantAccessToSupport?: number;
    /**
     * Gets or sets date until when support can log in as user.
     */
    GrantAccessToSupportDate?: string;
    /**
     * Gets or sets the effective date.
     */
    EffectiveDate?: string;
    /**
     * Gets or sets the selected unit of measurements.
     */
    SelectedUnitOfMeasurements?: Array<Webcom_API_RD_UserPersonalization_SelectedUnitOfMeasurmentVM>;
    /**
     * Gets or sets the out of office approvers.
     */
    OutOfOfficeApprovers?: Array<number>;
    /**
     * Gets or sets the out of office start.
     */
    OutOfOfficeStart?: string;
    /**
     * Gets or sets the out of office end.
     */
    OutOfOfficeEnd?: string;
    /**
     * Gets or sets a value indicating whether this instance is out of office enabled.
     */
    IsOutOfOfficeEnabled?: boolean;
}
