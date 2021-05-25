/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Favorites_FavoritesSharingRightsVM } from './Webcom_API_RD_Favorites_FavoritesSharingRightsVM';
import type { Webcom_API_RD_Favorites_FavoriteVM } from './Webcom_API_RD_Favorites_FavoriteVM';
import type { Webcom_API_RD_Favorites_PagerVM } from './Webcom_API_RD_Favorites_PagerVM';

export type Webcom_API_RD_Favorites_FavoritesResponse = {
    /**
     * Gets or sets the response successfully.
     */
    Success?: boolean;
    /**
     * Gets or sets the response message.
     */
    Message?: string;
    /**
     * Gets or sets the favorites sharing rights.
     */
    FavoritesSharingRights?: Webcom_API_RD_Favorites_FavoritesSharingRightsVM;
    /**
     * Gets or sets the pager data.
     */
    Pager?: Webcom_API_RD_Favorites_PagerVM;
    /**
     * Gets or sets the list of favorites.
     */
    Favorites?: Array<Webcom_API_RD_Favorites_FavoriteVM>;
}
