/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { System_Collections_Generic_KeyValuePair } from './System_Collections_Generic_KeyValuePair';

export type Webcom_API_Public_Cart_VM_CustomerVM = {
    /**
     * Gets or sets the customer identifier.
     */
    CustomerId?: number;
    /**
     * Gets or sets the CRM account identifier.
     */
    CRMAccountId?: string;
    /**
     * Gets or sets the CRM contact identifier.
     */
    CRMContactId?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.Public.Cart.VM.CustomerVM} is active.
     */
    Active?: number;
    /**
     * Gets or sets the first name.
     */
    FirstName?: string;
    /**
     * Gets or sets the last name.
     */
    LastName?: string;
    /**
     * Gets or sets the customer code.
     */
    CustomerCode?: string;
    /**
     * Gets or sets the company.
     */
    Company?: string;
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
     * Gets or sets the state abbrev.
     */
    StateAbbrev?: string;
    /**
     * Gets or sets the zip code.
     */
    ZipCode?: string;
    /**
     * Gets or sets the country abbrev.
     */
    CountryAbbrev?: string;
    /**
     * Gets or sets the name of the territory.
     */
    TerritoryName?: string;
    /**
     * Gets or sets the business phone.
     */
    BusinessPhone?: string;
    /**
     * Gets or sets the business fax.
     */
    BusinessFax?: string;
    /**
     * Gets or sets the email.
     */
    Email?: string;
    /**
     * Gets or sets the province.
     */
    Province?: string;
    /**
     * Gets or sets the custom fields.
     */
    CustomFields?: Array<System_Collections_Generic_KeyValuePair>;
}
