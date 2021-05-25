/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class QuickAddProductVM.
 */
export type Webcom_API_RD_Catalog_QuickAddProductVM = {
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
     * Gets or sets the part number.
     */
    PartNumber?: string;
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
     * Gets or sets the end status.
     */
    EndStatus?: number;
}
