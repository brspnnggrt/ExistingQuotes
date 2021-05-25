/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class that contains data format change request
 */
export type Webcom_API_RD_UserPersonalization_ChangedDateFormatRequest = {
    /**
     * Gets or sets the date format.
     */
    DateFormat?: number;
    /**
     * Gets or sets the new date format.
     */
    NewDateFormat?: number;
    /**
     * Gets or sets the date separator.
     */
    DateSeparator?: number;
    /**
     * Gets or sets the new date separator.
     */
    NewDateSeparator?: number;
    /**
     * Gets or sets the effective date.
     */
    EffectiveDate?: string;
    /**
     * Grant access to Admin Date.
     */
    GrantAccessAdminDate?: string;
    /**
     * Grant access to Support Date.
     */
    GrantAccessSupportDate?: string;
    /**
     * Gets or sets the out of office start.
     */
    OutOfOfficeStart?: string;
    /**
     * Gets or sets the out of office end.
     */
    OutOfOfficeEnd?: string;
}
