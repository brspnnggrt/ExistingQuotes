/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_Promotion_PromoActionOfferVM } from './Webcom_API_RD_Cart_VM_Promotion_PromoActionOfferVM';

/**
 * PromoAction ViewModel
 */
export type Webcom_API_RD_Cart_VM_Promotion_PromoActionVM = {
    /**
     * Gets or sets the action rank.
     */
    ActionRank?: number;
    /**
     * Gets or sets the default qty.
     */
    DefaultQty?: number;
    /**
     * Gets or sets a value indicating whether this action can be applied.Action can be applied if in the quote exists appropriate items for action product type or category.
     */
    CanApplyPromoAction?: boolean;
    /**
     * Gets or sets info message indicating why promotion action cannot be applied.
     */
    CannotApplyPromoInfo?: string;
    /**
     * Gets or sets the type of the calculation.
     */
    CalculationType?: string;
    /**
     * Gets or sets the name of the product.
     */
    ProductName?: string;
    /**
     * Gets or sets the item qty.
     */
    ItemQty?: string;
    /**
     * Gets or sets a value indicating whether this instance is action applied.
     */
    IsActionApplied?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is loop.
     */
    IsLoop?: boolean;
    /**
     * Gets or sets the loop qty.
     */
    LoopQty?: string;
    /**
     * Gets or sets the action rows.
     */
    ActionOffers?: Array<Webcom_API_RD_Cart_VM_Promotion_PromoActionOfferVM>;
    /**
     * Gets or sets a value indicating whether [shoul show regular price].
     */
    ShouldShowRegularPrice?: boolean;
    /**
     * Gets or sets the regular price qty.
     */
    RegularPriceQty?: string;
    /**
     * Gets or sets the total allowed qty.
     */
    TotalAllowedQty?: number;
    /**
     * Gets or sets the action type identifier.
     */
    ActionTypeId?: number;
    /**
     * Gets or sets the name of the category.
     */
    CategoryName?: string;
    /**
     * Gets or sets the name of the product type.
     */
    ProductTypeName?: string;
    /**
     * Gets or sets the part number.
     */
    PartNumber?: string;
}
