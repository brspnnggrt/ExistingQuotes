/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class CategoryVM.
 */
export type Webcom_API_RD_Catalog_CategoryVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the system identifier.
     */
    SystemId?: string;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the URL.
     */
    Url?: string;
    /**
     * Gets or sets the preferred template.
     */
    PreferredTemplate?: string;
    /**
     * Gets or sets the image URL.
     */
    ImageUrl?: string;
    /**
     * Gets or sets the mobile image URL.
     */
    MobileImageUrl?: string;
    /**
     * Gets or sets the image alternative text.
     */
    ImageAltText?: string;
    /**
     * Gets or sets the children.
     */
    Children?: Array<Webcom_API_RD_Catalog_CategoryVM>;
    /**
     * Gets or sets the category decription.
     */
    Description?: string;
}
