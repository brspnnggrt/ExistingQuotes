/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_NameValuePair } from './Webcom_API_NameValuePair';
import type { Webcom_API_RD_UserPersonalization_CustomFieldVM } from './Webcom_API_RD_UserPersonalization_CustomFieldVM';
import type { Webcom_API_RD_UserPersonalization_ValidationMessageVM } from './Webcom_API_RD_UserPersonalization_ValidationMessageVM';

/**
 * View model with inital data for modify personal details action
 */
export type Webcom_API_RD_UserPersonalization_ModifyDetailsInitVM = {
    /**
     * Gets or sets the first name.
     */
    FirstName?: string;
    /**
     * Gets or sets the last name.
     */
    LastName?: string;
    /**
     * Gets or sets the email.
     */
    Email?: string;
    /**
     * Gets or sets the identifier code.
     */
    IdCode?: string;
    /**
     * Gets or sets the address1.
     */
    Address1?: string;
    /**
     * Gets or sets the address2.
     */
    Address2?: string;
    /**
     * Gets or sets the city.
     */
    City?: string;
    /**
     * Gets or sets the country.
     */
    Country?: string;
    /**
     * Gets or sets the country selected identifier.
     */
    CountrySelectedId?: number;
    /**
     * Gets or sets the state.
     */
    State?: string;
    /**
     * Gets or sets the zip code.
     */
    ZipCode?: string;
    /**
     * Gets or sets the phone.
     */
    Phone?: string;
    /**
     * Gets or sets the fax.
     */
    Fax?: string;
    /**
     * Gets or sets the countries.
     */
    Countries?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the states.
     */
    States?: Array<Webcom_API_NameValuePair>;
    /**
     * Gets or sets the custom fields.
     */
    CustomFields?: Array<Webcom_API_RD_UserPersonalization_CustomFieldVM>;
    /**
     * Gets or sets the validation messages.
     */
    ValidationMessages?: Array<Webcom_API_RD_UserPersonalization_ValidationMessageVM>;
    /**
     * Gets or sets the fix all errors message.
     */
    FixAllErrorsMessage?: string;
}
