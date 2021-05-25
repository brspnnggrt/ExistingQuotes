/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Pricebooks_PricebookVisibilityConditionVM } from './Webcom_API_Admin_Pricebooks_PricebookVisibilityConditionVM';

/**
 * Represents response of save pricebook definition action
 */
export type Webcom_API_Admin_Pricebooks_SavePricebookDefinitionResponse = {
    /**
     * Pricebook id
     */
    PricebookId?: number;
    /**
     * Error message
     */
    ErrorMessage?: string;
    /**
     * List of visibility conditions
     */
    VisibilityConditions?: Array<Webcom_API_Admin_Pricebooks_PricebookVisibilityConditionVM>;
}
