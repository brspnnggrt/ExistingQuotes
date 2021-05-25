/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_ProductDetails_VM_AttributeVM } from './Webcom_API_RD_ProductDetails_VM_AttributeVM';
import type { Webcom_API_RD_ProductDetails_VM_CategoryVM } from './Webcom_API_RD_ProductDetails_VM_CategoryVM';
import type { Webcom_API_RD_ProductDetails_VM_ProductTypeVM } from './Webcom_API_RD_ProductDetails_VM_ProductTypeVM';

/**
 * Class ProductVM
 */
export type Webcom_API_RD_ProductDetails_VM_ProductVM = {
    /**
     * Gets or sets a value indicating whether this instance is added to compare.
     */
    SelectedForCompare?: boolean;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the part number.
     */
    PartNumber?: string;
    /**
     * Gets or sets a value indicating whether [part number exists in pricebook].
     */
    PartNumberExistsInPricebook?: boolean;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the dynamic description.
     */
    DynamicDescription?: string;
    /**
     * Gets or sets the long description.
     */
    LongDescription?: string;
    /**
     * Gets or sets the price.
     */
    Price?: string;
    /**
     * Gets or sets the end status.
     */
    EndStatus?: number;
    /**
     * Gets or sets the currency sign.
     */
    CurrencySign?: string;
    /**
     * Gets or sets a value indicating whether this instance can add to quote.
     */
    CanAddToQuote?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can enter qty.
     */
    CanEnterQty?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can configure.
     */
    CanConfigure?: boolean;
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the category.
     */
    Categories?: Array<Webcom_API_RD_ProductDetails_VM_CategoryVM>;
    /**
     * Gets or sets the image.
     */
    Image?: string;
    /**
     * Gets or sets image alt attribute value.
     */
    AlternativeText?: string;
    /**
     * Gets or sets the type of the product.
     */
    ProductType?: Webcom_API_RD_ProductDetails_VM_ProductTypeVM;
    /**
     * Gets or sets the weigth.
     */
    Weigth?: string;
    /**
     * Gets or sets the upc.
     */
    UPC?: string;
    /**
     * Gets or sets the MPN.
     */
    MPN?: string;
    /**
     * Gets or sets the inventory.
     */
    Inventory?: string;
    /**
     * Gets or sets the external identifier.
     */
    ExternalId?: string;
    /**
     * Gets or sets the lead time.
     */
    LeadTime?: string;
    /**
     * Gets or sets the product version.
     */
    ProductVersion?: string;
    /**
     * Gets or sets the recurring price.
     */
    RecurringPrice?: number;
    /**
     * Gets or sets the recurring cost.
     */
    RecurringCost?: number;
    /**
     * Gets or sets TotalRecurringPrice.
     */
    TotalRecurringPrice?: string;
    /**
     * Gets or sets the pricing code.
     */
    PricingCode?: string;
    /**
     * Gets or sets the attributes.
     */
    Attributes?: Array<Webcom_API_RD_ProductDetails_VM_AttributeVM>;
    /**
     * Error message to show for the product in case of an error (eg. no prices available)
     */
    ErrorMessage?: string;
    /**
     * Is product Subscription billing product
     */
    IsSubscriptionBillingProduct?: boolean;
    /**
     * Does product have rate plan for market
     */
    HasRatePlanForMarket?: boolean;
    /**
     * Flag whether configure is available although quote enviroment doesn't exist
     */
    CanConfigureProductWithoutQuote?: boolean;
    /**
     * Gets or sets the flag to show recurring prices
     */
    ShouldShowRecurringPrice?: boolean;
}
