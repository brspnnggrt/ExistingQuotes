/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Providers_CLM_CLMObjectMappingVM } from './Webcom_API_Admin_Providers_CLM_CLMObjectMappingVM';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * CLM Field Mappings Response
 */
export type Webcom_API_Admin_Providers_CLM_CLMFieldMappingsResponse = {
    /**
     * Gets or sets the mappings.
     */
    Mappings?: Array<Webcom_API_Admin_Providers_CLM_CLMObjectMappingVM>;
    /**
     * Gets or sets the CPQ field types.
     */
    CpqObjectTypes?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the CLM customer objects.
     */
    ClmCustomerObjects?: Array<string>;
    /**
     * Gets or sets the CLM contact objects.
     */
    ClmContactObjects?: Array<string>;
    /**
     * Gets or sets the CLM contract objects.
     */
    ClmContractObjects?: Array<string>;
    /**
     * Gets or sets the quote fields.
     */
    QuoteFields?: Array<string>;
    /**
     * Gets or sets the visitor fields.
     */
    VisitorFields?: Array<string>;
    /**
     * Gets or sets the owner fields.
     */
    OwnerFields?: Array<string>;
    /**
     * Gets or sets the quote custom fields.
     */
    QuoteCustomFields?: Array<string>;
    /**
     * Gets or sets the bill to customer fields.
     */
    BillToCustomerFields?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the ship to customer fields.
     */
    ShipToCustomerFields?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the end user customer fields.
     */
    EndUserCustomerFields?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
}
