/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pricebook entry.
 */
export type Webcom_API_Admin_Pricebooks_PricebookEntryVM = {
    /**
     * Pricebook entries table Id.
     */
    Id?: number;
    /**
     * Part number.
     */
    PartNumber?: string;
    /**
     * Price code.
     */
    PriceCode?: string;
    /**
     * Price.
     */
    Price?: number;
    /**
     * Cost.
     */
    Cost?: number;
    /**
     * Recurring price.
     */
    RecurringPrice?: number;
    /**
     * Recurring cost.
     */
    RecurringCost?: number;
    /**
     * Recurring price period
     */
    RecurringPricePeriod?: string;
    /**
     * Recurring cost period
     */
    RecurringCostPeriod?: string;
    /**
     * Price description.
     */
    PriceDescription?: string;
    /**
     * Valid from date.
     */
    ValidFrom?: string;
    /**
     * Valid until date.
     */
    ValidUntil?: string;
}
