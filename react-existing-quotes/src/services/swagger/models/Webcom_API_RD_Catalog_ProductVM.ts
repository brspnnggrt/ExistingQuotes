/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_Promotion_PromotionVM } from './Webcom_API_RD_Cart_VM_Promotion_PromotionVM';
import type { Webcom_API_RD_Catalog_ProductFavoritesInfoVM } from './Webcom_API_RD_Catalog_ProductFavoritesInfoVM';

/**
 * Class ProductVM.
 */
export type Webcom_API_RD_Catalog_ProductVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the long description.
     */
    LongDescription?: string;
    /**
     * Gets or sets the part number.
     */
    PartNumber?: string;
    /**
     * Gets or sets the price.
     */
    Price?: string;
    /**
     * Gets or sets the product type identifier.
     */
    ProductTypeId?: number;
    /**
     * Gets or sets the name of the product type.
     */
    ProductTypeName?: string;
    /**
     * Gets or sets the image URL.
     */
    ImageUrl?: string;
    /**
     * Gets or sets the alt attribute value.
     */
    AlternativeText?: string;
    /**
     * Gets or sets the category identifier.
     */
    CategoryId?: number;
    /**
     * Gets or sets the name of the category.
     */
    CategoryName?: string;
    /**
     * Gets or sets a value indicating whether this instance can add to quote.
     */
    CanAddToQuote?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can alter quantity.
     */
    CanAlterQuantity?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can configure.
     */
    CanConfigure?: boolean;
    /**
     * Gets or sets a value indicating whether [part number exist in pricebook].
     */
    PartNumberExistInPricebook?: boolean;
    /**
     * Gets or sets the product favorites information.
     */
    ProductFavoritesInfo?: Webcom_API_RD_Catalog_ProductFavoritesInfoVM;
    /**
     * Gets or sets the end status.
     */
    EndStatus?: number;
    /**
     * Gets or sets a UPC (Universal Product Code) value.
     */
    UPC?: string;
    /**
     * Gets or sets the promotion information for particular product.
     */
    ProductPromotionInfo?: Array<Webcom_API_RD_Cart_VM_Promotion_PromotionVM>;
    /**
     * Gets or sets a value indicating whether this instance is in promotion.
     */
    IsInPromotion?: boolean;
    /**
     * Gets or sets flag that product has SB pricing type.
     */
    IsSubscriptionBillingProduct?: boolean;
    /**
     * Gets or sets TotalRecurringPrice.
     */
    TotalRecurringPrice?: string;
    /**
     * Gets or sets OneTimePrice.
     */
    OneTimePrice?: string;
    /**
     * Gets or sets flag that product has rate plan for current market
     */
    HasRatePlanForMarket?: boolean;
    /**
     * Error message to show for the product in case of an error (eg. no prices available)
     */
    ErrorMessage?: string;
    /**
     * Flag whether configure is available although quote enviroment doesn't exist
     */
    CanConfigureProductWithoutQuote?: boolean;
    /**
     * Gets or sets the flag to show recurring prices
     */
    ShouldShowRecurringPrice?: boolean;
}
