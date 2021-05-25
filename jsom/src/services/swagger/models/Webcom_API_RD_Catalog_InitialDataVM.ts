/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Catalog_CategoryVM } from './Webcom_API_RD_Catalog_CategoryVM';
import type { Webcom_API_RD_Catalog_FavoritesSharingRightsVM } from './Webcom_API_RD_Catalog_FavoritesSharingRightsVM';
import type { Webcom_API_RD_Catalog_VM_ProductForCompareVM } from './Webcom_API_RD_Catalog_VM_ProductForCompareVM';

/**
 * Class InitialDataVM.
 */
export type Webcom_API_RD_Catalog_InitialDataVM = {
    /**
     * Gets or sets a value indicating whether [cart exists].
     */
    CartExists?: boolean;
    /**
     * Gets or sets the view details settings.
     */
    ViewDetailsSettings?: Webcom_API_RD_Catalog_InitialDataVM.ViewDetailsSettings;
    /**
     * Gets or sets a value indicating whether this instance can filter and sort by price.
     */
    CanFilterAndSortByPrice?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can filter by promotion.
     */
    CanFilterByPromotion?: boolean;
    /**
     * Gets or sets the category identifier.
     */
    CategoryId?: number;
    /**
     * Gets or sets the search.
     */
    Search?: string;
    /**
     * Gets or sets the active view.
     */
    ActiveView?: string;
    /**
     * Gets or sets the size of the page.
     */
    PageSize?: number;
    /**
     * Gets or sets the favorites sharing rights.
     */
    FavoritesSharingRights?: Webcom_API_RD_Catalog_FavoritesSharingRightsVM;
    /**
     * Gets or sets the categories.
     */
    Categories?: Array<Webcom_API_RD_Catalog_CategoryVM>;
    /**
     * Gets or sets a value indicating whether [compare products enabled].
     */
    CompareProductsEnabled?: boolean;
    /**
     * Gets or sets the products for compare.
     */
    ProductsForCompare?: Array<Webcom_API_RD_Catalog_VM_ProductForCompareVM>;
    /**
     * Gets or sets the sorted by option.
     */
    SortedBy?: Webcom_API_RD_Catalog_InitialDataVM.SortedBy;
}

export namespace Webcom_API_RD_Catalog_InitialDataVM {

    /**
     * Gets or sets the view details settings.
     */
    export enum ViewDetailsSettings {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }

    /**
     * Gets or sets the sorted by option.
     */
    export enum SortedBy {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
