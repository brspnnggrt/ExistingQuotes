/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class ProductExportRequest
 */
export type Webcom_API_Admin_BulkImportExport_ProductExportRequest = {
    /**
     * Gets or sets the columns that will be exported.
     */
    Columns?: Array<string>;
    /**
     * Gets or sets the attribute ids.
     */
    AttributeIds?: Array<number>;
    /**
     * Gets or sets the product names.
     */
    ProductNames?: Array<string>;
    /**
     * Gets or sets the product part numbers.
     */
    ProductPartNumbers?: Array<string>;
    /**
     * Gets or sets the product types.
     */
    ProductTypes?: Array<string>;
    /**
     * Gets or sets the categories.
     */
    Categories?: Array<number>;
    /**
     * Gets or sets the permissions.
     */
    Permissions?: Array<string>;
    /**
     * Gets or sets the product type filter.
     */
    ProductUI?: Webcom_API_Admin_BulkImportExport_ProductExportRequest.ProductUI;
    /**
     * Gets or sets product's configuration type.
     */
    ConfigurationType?: string;
    /**
     * Gets or sets product's pricing mechanism.
     */
    PricingMechanism?: string;
    /**
     * Gets or sets a value indicating whether product is active.
     */
    Active?: boolean;
    /**
     * Gets or sets the product alias names.
     */
    ProductAliasNames?: Array<string>;
    /**
     * Gets or sets the product system ids.
     */
    ProductSystemIds?: Array<string>;
}

export namespace Webcom_API_Admin_BulkImportExport_ProductExportRequest {

    /**
     * Gets or sets the product type filter.
     */
    export enum ProductUI {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_5' = 5,
        '_6' = 6,
    }


}
