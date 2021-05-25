/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Catalog_AbsVM } from './Webcom_API_RD_Catalog_AbsVM';
import type { Webcom_API_RD_Catalog_InitialDataVM } from './Webcom_API_RD_Catalog_InitialDataVM';
import type { Webcom_API_RD_Catalog_ProductVM } from './Webcom_API_RD_Catalog_ProductVM';

/**
 * Class CatalogResponse.
 */
export type Webcom_API_RD_Catalog_CatalogResponse = {
    /**
     * Gets or sets a value indicating whether this instance has next page.
     */
    HasNextPage?: boolean;
    /**
     * Gets or sets a value indicating whether favorites are enabled.
     */
    FavoritesEnabled?: boolean;
    /**
     * Gets or sets the initial data.
     */
    InitialData?: Webcom_API_RD_Catalog_InitialDataVM;
    /**
     * Gets or sets the products.
     */
    Products?: Array<Webcom_API_RD_Catalog_ProductVM>;
    /**
     * Gets the abs.
     */
    readonly Abs?: Array<Webcom_API_RD_Catalog_AbsVM>;
}
