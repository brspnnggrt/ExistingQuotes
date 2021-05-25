/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Configurations_ExtensionFieldVM } from './Webcom_API_Public_Configurations_ExtensionFieldVM';
import type { Webcom_API_Public_Configurations_SalesAreaVM } from './Webcom_API_Public_Configurations_SalesAreaVM';
import type { Webcom_API_Public_Configurations_ViewModel_InvolvedPartyVM } from './Webcom_API_Public_Configurations_ViewModel_InvolvedPartyVM';

/**
 * Configuration context
 */
export type Webcom_API_Public_Configurations_ConfigurationContextVM = {
    /**
     * Sales area. SalesArea or MarketCode are required fields.
     */
    SalesArea?: Webcom_API_Public_Configurations_SalesAreaVM;
    /**
     * Currency code. Required if SalesArea is provided.
     */
    CurrencyCode?: string;
    /**
     * Market code. SalesArea or MarketCode are required fields.
     */
    MarketCode?: string;
    /**
     * Effective date. Effective date used for selecting pricebook in ISO date format.
     */
    EffectiveDate?: string;
    /**
     * Language ISO code
     */
    Language?: string;
    /**
     * Get or set Involved Parties
     */
    InvolvedParties?: Array<Webcom_API_Public_Configurations_ViewModel_InvolvedPartyVM>;
    /**
     * Get or set Extension Fields
     */
    ExtensionFields?: Array<Webcom_API_Public_Configurations_ExtensionFieldVM>;
}
