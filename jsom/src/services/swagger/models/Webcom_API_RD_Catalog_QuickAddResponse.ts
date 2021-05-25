/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Catalog_FavoriteVM } from './Webcom_API_RD_Catalog_FavoriteVM';
import type { Webcom_API_RD_Catalog_QuickAddProductVM } from './Webcom_API_RD_Catalog_QuickAddProductVM';

/**
 * Class QuickAddResponse.
 */
export type Webcom_API_RD_Catalog_QuickAddResponse = {
    /**
     * Gets or sets a value indicating whether this instance has more products matching.
     */
    HasMoreProductsMatching?: boolean;
    /**
     * Gets or sets the products.
     */
    Products?: Array<Webcom_API_RD_Catalog_QuickAddProductVM>;
    /**
     * Gets or sets a value indicating whether is favorite search is enabled on cart.
     */
    IsFavoriteSearchEnabled?: boolean;
    /**
     * Gets or sets the has more favorites matching.
     */
    HasMoreFavoritesMatching?: boolean;
    /**
     * Gets or sets the list of favorites matching.
     */
    Favorites?: Array<Webcom_API_RD_Catalog_FavoriteVM>;
}
