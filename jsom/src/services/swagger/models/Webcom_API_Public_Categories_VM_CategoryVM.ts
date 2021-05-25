/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Category View-Model
 */
export type Webcom_API_Public_Categories_VM_CategoryVM = {
    /**
     * Gets or sets the identifier (auto-increment).
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the systemId.
     */
    SystemId?: string;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the active.
     */
    Active?: boolean;
    /**
     * Gets or sets the firmsOnly.
     */
    FirmsOnly?: boolean;
    /**
     * Gets or sets the rank.
     */
    Rank?: number;
    /**
     * Gets or sets the main image.
     */
    MainImage?: string;
    /**
     * Gets or sets the additional image 1.
     */
    AdditionalImage1?: string;
    /**
     * Gets or sets the additional image 2.
     */
    AdditionalImage2?: string;
    /**
     * Gets or sets the mobile image.
     */
    MobileImage?: string;
    /**
     * Gets or sets the image alt text.
     */
    ImageAltText?: string;
    /**
     * Gets or sets the pluginRedirect.
     */
    PluginRedirect?: string;
    /**
     * Gets or sets the start date.
     */
    StartDate?: string;
    /**
     * Gets or sets the end date.
     */
    EndDate?: string;
    /**
     * Gets or sets the defaultCatalogueViewId.
     */
    DefaultCatalogueViewId?: number;
    /**
     * Gets or sets the propagateCatalogueView.
     */
    PropagateCatalogueView?: boolean;
    /**
     * Gets or sets the visibleToEveryone.
     */
    VisibleToEveryone?: boolean;
    /**
     * Gets or sets the parentCategory.
     */
    ParentCategory?: number;
    /**
     * Gets or sets the permissions.
     */
    Permissions?: Array<number>;
}
