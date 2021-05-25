/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_NameValuePair } from './Webcom_API_NameValuePair';
import type { Webcom_API_RD_UserPersonalization_MeasurementVM } from './Webcom_API_RD_UserPersonalization_MeasurementVM';
import type { Webcom_API_RD_UserPersonalization_VM_UserVM } from './Webcom_API_RD_UserPersonalization_VM_UserVM';

/**
 * View model that contains user personalization initial data
 */
export type Webcom_API_RD_UserPersonalization_UserPersonalizationVM = {
    /**
     * Gets or sets the tenant name value.
     */
    TenantName?: string;
    /**
     * Gets or sets the effective date value.
     */
    EffectiveDateValue?: string;
    /**
     * Gets or sets access to admin date.
     */
    GrantAccessToAdminDate?: string;
    /**
     * Gets or sets access to support date.
     */
    GrantAccessToSupportDate?: string;
    /**
     * Gets or sets a value indicating whether [display number format].
     */
    DisplayNumberFormat?: boolean;
    /**
     * Gets or sets a value indicating whether [display use effective dates].
     */
    DisplayUseEffectiveDates?: boolean;
    /**
     * Gets or sets out of office start date.
     */
    OutOfOfficeStart?: string;
    /**
     * Gets or sets out of office end date.
     */
    OutOfOfficeEnd?: string;
    /**
     * Gets or sets a value indicating whether this instance is out of office enabled.
     */
    IsOutOfOfficeEnabled?: boolean;
    /**
     * Gets or sets the effective date label text.
     */
    EffectiveDateLabelText?: string;
    /**
     * Gets or sets the date format label text.
     */
    DateFormatLabelText?: string;
    /**
     * Gets or sets the date separator label text.
     */
    DateSeparatorLabelText?: string;
    /**
     * Gets or sets the number format label text.
     */
    NumberFormatLabelText?: string;
    /**
     * Gets or sets the default market label text.
     */
    DefaultMarketLabelText?: string;
    /**
     * Gets or sets the default dictionary label text.
     */
    DefaultDictionaryLabelText?: string;
    /**
     * Gets or sets the date formats.
     */
    DateFormats?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the date separators.
     */
    DateSeparators?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the default markets.
     */
    DefaultMarkets?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets market pricebooks.
     */
    MarketPricebooks?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the default dictionaries.
     */
    DefaultDictionaries?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the time zones.
     */
    TimeZones?: Array<Webcom_API_NameValuePair>;
    /**
     * Gets or sets the user default number formats.
     */
    UserDefaultNumberFormats?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the units of measurments.
     */
    UnitsOfMeasurments?: Array<Webcom_API_RD_UserPersonalization_MeasurementVM>;
    /**
     * Gets or sets the out of office approvers list.
     */
    OutOfOfficeApprovers?: Array<Webcom_API_RD_UserPersonalization_VM_UserVM>;
    /**
     * Gets or sets the selected date format.
     */
    SelectedDateFormat?: number;
    /**
     * Gets or sets the selected default market.
     */
    SelectedDefaultMarket?: number;
    /**
     * Gets or sets the selected default pricebook.
     */
    SelectedDefaultPricebook?: number;
    /**
     * Gets or sets the selected default dictionary.
     */
    SelectedDefaultDictionary?: number;
    /**
     * Gets or sets the selected time zone.
     */
    SelectedTimeZone?: string;
    /**
     * Gets or sets a value indicating whether [allow timezone change].
     */
    AllowTimeZoneChange?: boolean;
    /**
     * Gets or sets if admin can log in as user.
     */
    GrantAccessToAdmin?: number;
    /**
     * Gets or sets if support can log in as user.
     */
    GrantAccessToSupport?: number;
    /**
     * Gets or sets the selected user default number format.
     */
    SelectedUserDefaultNumberFormat?: number;
    /**
     * Gets or sets the selected date separator.
     */
    SelectedDateSeparator?: number;
    /**
     * Gets or sets the selected out of office approver.
     */
    SelectedOutOfOfficeApprovers?: Array<Webcom_API_RD_UserPersonalization_VM_UserVM>;
    readonly HasQuotesToApprove?: any;
}
