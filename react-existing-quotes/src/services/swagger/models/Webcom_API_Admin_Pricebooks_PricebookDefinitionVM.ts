/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Pricebooks_PricebookVisibilityConditionVM } from './Webcom_API_Admin_Pricebooks_PricebookVisibilityConditionVM';

/**
 * Represents pricebook table definition
 */
export type Webcom_API_Admin_Pricebooks_PricebookDefinitionVM = {
    /**
     * Market id
     */
    MarketId?: number;
    /**
     * Market name
     */
    MarketName?: string;
    /**
     * Gets or sets market code
     */
    MarketCode?: string;
    /**
     * Gets or sets distribution channel
     */
    DistributionChannel?: string;
    /**
     * Gets or sets whether or not current tenant is connected with the SAP ERP system
     */
    IsSAPErpConnected?: boolean;
    /**
     * Parent id
     */
    ParentId?: number;
    /**
     * Id
     */
    Id?: number;
    /**
     * Name
     */
    Name?: string;
    /**
     * Code
     */
    Code?: string;
    /**
     * Description
     */
    Description?: string;
    /**
     * Level
     */
    Level?: number;
    /**
     * Number of records
     */
    NumberOfRecords?: number;
    /**
     * Advanced visibility
     */
    AdvancedVisibility?: boolean;
    /**
     * Pricebook visibility conditions
     */
    VisibilityConditions?: Array<Webcom_API_Admin_Pricebooks_PricebookVisibilityConditionVM>;
    /**
     * Visibility formula
     */
    VisibilityFormula?: string;
    /**
     * Valid from
     */
    ValidFrom?: string;
    /**
     * Valid until
     */
    ValidUntil?: string;
    /**
     * Pricebook has duplicate values
     */
    HasDuplicateValues?: boolean;
}
