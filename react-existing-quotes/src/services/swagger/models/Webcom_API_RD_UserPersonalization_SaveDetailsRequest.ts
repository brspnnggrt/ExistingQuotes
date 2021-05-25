/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_UserPersonalization_CustomFieldVM } from './Webcom_API_RD_UserPersonalization_CustomFieldVM';

/**
 * Save user details modification request
 */
export type Webcom_API_RD_UserPersonalization_SaveDetailsRequest = {
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
     * Gets or sets the country identifier.
     */
    CountryId?: number;
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
     * Gets or sets the custom fields.
     */
    CustomFields?: Array<Webcom_API_RD_UserPersonalization_CustomFieldVM>;
}
