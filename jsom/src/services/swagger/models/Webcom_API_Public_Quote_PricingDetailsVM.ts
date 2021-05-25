/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data of item pricing
 */
export type Webcom_API_Public_Quote_PricingDetailsVM = {
    /**
     * Get or set List Price. This is a unit price of an item before applying discount and multiplying by quantity.
     */
    ListPrice?: string;
    /**
     * Get or set Net Price. This is item unit price after applying discount.
     */
    NetPrice?: string;
    /**
     * Get or set Extended List Price. This is unit item price multiplied by quantity.
     */
    ExtendedListPrice?: string;
    /**
     * Get or set Extended Price. This is total item price after applying quantity, discount and multiplier.
     */
    ExtendedAmount?: string;
    /**
     * Get or set Discount Percent.
     */
    DiscountPercent?: string;
    /**
     * Get or set Default Discount Percent
     */
    DefaultDiscountPercent?: string;
    /**
     * Get or set Min Discount Percent
     */
    MinDiscountPercent?: string;
    /**
     * Get or set Max Discount Percent
     */
    MaxDiscountPercent?: string;
    /**
     * Get or set Unit Discount Amount. This is discount amount per item unit.
     */
    UnitDiscountAmount?: string;
    /**
     * Get or set Discount Amount. This is total discount amount for an item.
     */
    DiscountAmount?: string;
    /**
     * Get or set Cost. This is item unit cost.
     */
    Cost?: string;
    /**
     * Get or set Extended Cost. This is item cost multiplied by quantity.
     */
    ExtendedCost?: string;
    /**
     * Get or set Margin Percent
     */
    MarginPercent?: string;
    /**
     * Get or set Rolled Up List Price
     */
    RolledUpListPrice?: string;
    /**
     * Get or set Rolled Up Net Price
     */
    RolledUpNetPrice?: string;
    /**
     * Get or set Rolled Up Extended List Price
     */
    RolledUpExtendedListPrice?: string;
    /**
     * Get or set Rolled Up Extended Amount
     */
    RolledUpExtendedAmount?: string;
    /**
     * Get or set RolledUp Discount Percent
     */
    RolledUpDiscountPercent?: string;
    /**
     * Get or set RolledUp Discount Amount
     */
    RolledUpDiscountAmount?: string;
    /**
     * Get or set Rolled Up Margin Percent
     */
    RolledUpGrossMargin?: string;
    /**
     * Get or set RolledUp Cost
     */
    RolledUpCost?: string;
    /**
     * Get or set RolledUp Extended Cost
     */
    RolledUpExtendedCost?: string;
}
