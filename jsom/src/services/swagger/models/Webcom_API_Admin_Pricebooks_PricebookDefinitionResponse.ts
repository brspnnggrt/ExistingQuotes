/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Pricebooks_PricebookDefinitionVM } from './Webcom_API_Admin_Pricebooks_PricebookDefinitionVM';
import type { Webcom_API_Admin_Pricebooks_PricebookVisibilityBuilderVM } from './Webcom_API_Admin_Pricebooks_PricebookVisibilityBuilderVM';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Represents pricebook definition response
 */
export type Webcom_API_Admin_Pricebooks_PricebookDefinitionResponse = {
    /**
     * Pricebook definition
     */
    PricebookDefinition?: Webcom_API_Admin_Pricebooks_PricebookDefinitionVM;
    /**
     * Market pricebooks
     */
    MarketPricebooks?: Array<Webcom_API_IdNamePair>;
    /**
     * Visibility builder
     */
    VisibilityBuilder?: Webcom_API_Admin_Pricebooks_PricebookVisibilityBuilderVM;
}
