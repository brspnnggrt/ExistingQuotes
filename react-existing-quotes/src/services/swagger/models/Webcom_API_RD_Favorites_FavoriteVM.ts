/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_RD_Catalog_ProductVM } from './Webcom_API_RD_Catalog_ProductVM';

export type Webcom_API_RD_Favorites_FavoriteVM = {
    /**
     * Gets or sets the favorite identifier.
     */
    FavoriteId?: number;
    /**
     * Gets or sets the created by user identifier.
     */
    IsMyFavorite?: boolean;
    /**
     * Gets or sets the name of the favorite.
     */
    FavoriteName?: string;
    /**
     * Gets or sets the favorite category.
     */
    FavoriteCategory?: string;
    /**
     * Get or set favorite categories.
     */
    Categories?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the favorite description.
     */
    FavoriteDescription?: string;
    /**
     * Gets or sets the favorite part number.
     */
    FavoritePartNumber?: string;
    /**
     * Gets or sets the base on product identifier.
     */
    BaseOnProductId?: number;
    /**
     * Gets or sets the name of the base on product.
     */
    BaseOnProductName?: string;
    /**
     * Gets or sets the visible for company identifier.
     */
    VisibleForCompanyId?: number;
    /**
     * Gets or sets a value indicating whether favorite is visible to everyone.
     */
    VisibleToEveryone?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can enter qty.
     */
    CanEnterQty?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is simple.
     */
    IsSimple?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is shared.
     */
    IsShared?: boolean;
    /**
     * Gets or sets the end status.
     */
    EndStatus?: number;
    /**
     * Gets or sets data about the product the favorite is based on.
     */
    BaseOnProductData?: Webcom_API_RD_Catalog_ProductVM;
    CanAddToQuote?: boolean;
}
