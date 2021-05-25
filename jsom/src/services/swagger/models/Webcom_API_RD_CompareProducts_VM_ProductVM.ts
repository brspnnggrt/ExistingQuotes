/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CompareProducts_VM_AttributeVM } from './Webcom_API_RD_CompareProducts_VM_AttributeVM';

/**
 * Class ProductVM
 */
export type Webcom_API_RD_CompareProducts_VM_ProductVM = {
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets a value indicating whether [part number exists in priceboook].
     */
    PartNumberExistsInPricebook?: boolean;
    /**
     * Gets or sets the product type identifier.
     */
    ProductTypeId?: number;
    /**
     * Gets or sets the name of the product type.
     */
    ProductTypeName?: string;
    /**
     * Gets or sets a value indicating whether this instance is replaced.
     */
    IsReplaced?: boolean;
    /**
     * Gets or sets the part number.
     */
    PartNumber?: string;
    /**
     * Gets or sets the upc.
     */
    Upc?: string;
    /**
     * Gets or sets the long description.
     */
    LongDescription?: string;
    /**
     * Gets or sets the price.
     */
    Price?: string;
    /**
     * Gets or sets the recurring price.
     */
    TotalRecurringPrice?: string;
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
     * Gets or sets the category identifier.
     */
    CategoryId?: number;
    /**
     * Gets or sets the name of the category.
     */
    CategoryName?: string;
    /**
     * Gets or sets the catalog code.
     */
    CatalogCode?: string;
    /**
     * Gets or sets the image.
     */
    Image?: string;
    /**
     * Gets or sets image alt attribute.
     */
    AlternativeText?: string;
    /**
     * Gets or sets the attributes.
     */
    Attributes?: Array<Webcom_API_RD_CompareProducts_VM_AttributeVM>;
    /**
     * Error message to show for the product in case of an error (eg. no prices available)
     */
    ErrorMessage?: string;
    /**
     * Gets or sets the flag to show recurring prices
     */
    ShouldShowRecurringPrice?: boolean;
}
