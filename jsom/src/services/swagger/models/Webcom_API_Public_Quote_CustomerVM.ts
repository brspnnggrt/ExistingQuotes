/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_CustomFieldVM } from './Webcom_API_Public_Quote_CustomFieldVM';

/**
 * Customer data
 */
export type Webcom_API_Public_Quote_CustomerVM = {
    /**
     * Get or set Role Type
     */
    RoleType?: string;
    /**
     * Get or set whether customer is Active
     */
    Active?: boolean;
    /**
     * Get or set Company Name
     */
    CompanyName?: string;
    /**
     * Get or set First Name
     */
    FirstName?: string;
    /**
     * Get or set Last Name
     */
    LastName?: string;
    /**
     * Get or set customer Title
     */
    Title?: string;
    /**
     * Get or set the first Address Line
     */
    AddressLine1?: string;
    /**
     * Get or set the second Address Line
     */
    AddressLine2?: string;
    /**
     * Get or set City
     */
    City?: string;
    /**
     * Get or set Zip Code
     */
    ZipCode?: string;
    /**
     * Get or set State
     */
    State?: string;
    /**
     * Get or set Province
     */
    Province?: string;
    /**
     * Get or set Country
     */
    Country?: string;
    /**
     * Get or set Phone
     */
    Phone?: string;
    /**
     * Get or set Fax
     */
    Fax?: string;
    /**
     * Get or set Email
     */
    Email?: string;
    /**
     * Get or set Primary Industry
     */
    PrimaryIndustry?: string;
    /**
     * Get or set Territory Name
     */
    TerritoryName?: string;
    /**
     * Get or set CRM Account Id
     */
    CRMAccountId?: string;
    /**
     * Get or set CRM Contact Id
     */
    CRMContactId?: string;
    /**
     * Get or set Customer Code
     */
    CustomerCode?: string;
    /**
     * Get or set Custom Fields
     */
    CustomFields?: Array<Webcom_API_Public_Quote_CustomFieldVM>;
}
