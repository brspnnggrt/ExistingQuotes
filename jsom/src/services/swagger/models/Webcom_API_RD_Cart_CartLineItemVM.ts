/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartItemDescriptionVM } from './Webcom_API_RD_Cart_CartItemDescriptionVM';

/**
 * Class CartLineItemVM.
 */
export type Webcom_API_RD_Cart_CartLineItemVM = {
    /**
     * Gets or sets the cart item unique identifier.
     */
    CartItemGuid?: string;
    /**
     * Gets or sets the base cart item.
     */
    BaseCartItem?: number;
    Id?: number;
    /**
     * Gets or sets the cart item.
     */
    CartItem?: number;
    /**
     * Gets or sets IsSapProduct value.
     */
    IsSapItem?: boolean;
    /**
     * Gets or sets the item number.
     */
    ItemNumber?: string;
    /**
     * Gets or sets the type of the item.
     */
    ItemType?: number;
    /**
     * Gets or sets the values.
     */
    Values?: Array<any>;
    /**
     * Gets or sets the hidden values.
     */
    HiddenValues?: Array<any>;
    /**
     * Gets or sets the item description.
     */
    ItemDescription?: Webcom_API_RD_Cart_CartItemDescriptionVM;
    /**
     * Gets or sets the name of the product type.
     */
    ProductTypeName?: string;
    /**
     * Gets or sets the product UPC information.
     */
    UPC?: string;
    /**
     * Gets or sets a value indicating whether item is expanded.
     */
    IsExpanded?: boolean;
    /**
     * Gets or sets a value indicating whether line is in system.
     */
    IsInSystem?: boolean;
    /**
     * Gets or sets a value indicating whether line is first in system.
     */
    IsFirstInSystem?: boolean;
    /**
     * Gets or sets a value indicating whether line is last in system.
     */
    IsLastInSystem?: boolean;
    /**
     * Gets or sets the nesting level of the line (0 is root).
     */
    NestingLevel?: number;
    /**
     * Gets or sets a value indicating whether line has child lines.
     */
    HasChildren?: boolean;
    /**
     * Gets or sets a section path for item.
     */
    Section?: string;
    /**
     * Gets or sets a value indicating whether this instance is restricted.
     */
    IsRestricted?: boolean;
    /**
     * Gets or sets the recurring price period.
     */
    RecurringPricePeriod?: string;
    /**
     * Gets or sets the recurring cost period.
     */
    RecurringCostPeriod?: string;
}
