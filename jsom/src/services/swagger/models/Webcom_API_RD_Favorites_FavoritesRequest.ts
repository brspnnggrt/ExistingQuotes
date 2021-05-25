/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_RD_Favorites_FavoritesRequest = {
    /**
     * Gets or sets the base on product filter identifier.
     */
    BaseOnProductFilterId?: number;
    /**
     * Gets or sets the size of the page.
     */
    PageSize?: number;
    /**
     * Gets or sets the page number filter.
     */
    PageNumberFilter?: number;
    /**
     * Gets or sets the type of the sort column order.
     */
    SortColumnOrderType?: string;
    /**
     * Gets or sets the name of the sort column.
     */
    SortColumnName?: string;
    /**
     * Gets or sets a value indicating whether user wants to see favorites from his company.
     */
    ShowMyCompanyFavorites?: boolean;
    /**
     * Gets or sets a value indicating whether user wants to see his own favorites.
     */
    ShowMyFavorites?: boolean;
    /**
     * Gets or sets a value indicating whether user wants to see others favorites.
     */
    ShowOthersFavorites?: boolean;
    /**
     * Gets or sets search by name, part number and description.
     */
    Search?: string;
    /**
     * Gets or sets the favorite name filter.
     */
    NameFilter?: string;
    /**
     * Gets or sets the favorite description filter.
     */
    DescriptionFilter?: string;
    /**
     * Gets or sets the favorite part number filter.
     */
    PartNumberFilter?: string;
    /**
     * Gets or sets the base on product filter.
     */
    BaseOnProductFilter?: string;
    /**
     * Gets or sets the favorite categories filter.
     */
    CategoriesFilter?: string;
}
