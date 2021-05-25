/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_VM_PriceVm } from './Webcom_API_Public_Quote_VM_PriceVm';

/**
 * Data of item pricing
 */
export type Webcom_API_Public_Quote_VM_PricingDetailsSapStandardVm = {
    /**
     * Get or set List Price. This is a unit price of an item before applying discount and multiplying by quantity.
     */
    ListPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Net Price. This is item unit price after applying discount.
     */
    NetPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Extended List Price. This is unit item price multiplied by quantity.
     */
    ExtendedListPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Extended Price. This is total item price after applying quantity, discount and multiplier.
     */
    ExtendedAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Discount Percent.
     */
    DiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Default Discount Percent
     */
    DefaultDiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Min Discount Percent
     */
    MinDiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Max Discount Percent
     */
    MaxDiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Unit Discount Amount. This is discount amount per item unit.
     */
    UnitDiscountAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Discount Amount. This is total discount amount for an item.
     */
    DiscountAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Cost. This is item unit cost.
     */
    Cost?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Extended Cost. This is item cost multiplied by quantity.
     */
    ExtendedCost?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Margin Percent
     */
    MarginPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Rolled Up List Price
     */
    RolledUpListPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Rolled Up Net Price
     */
    RolledUpNetPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Rolled Up Extended List Price
     */
    RolledUpExtendedListPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Rolled Up Extended Amount
     */
    RolledUpExtendedAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set RolledUp Discount Percent
     */
    RolledUpDiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set RolledUp Discount Amount
     */
    RolledUpDiscountAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set Rolled Up Margin Percent
     */
    RolledUpGrossMargin?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set RolledUp Cost
     */
    RolledUpCost?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Get or set RolledUp Extended Cost
     */
    RolledUpExtendedCost?: Webcom_API_Public_Quote_VM_PriceVm;
}
