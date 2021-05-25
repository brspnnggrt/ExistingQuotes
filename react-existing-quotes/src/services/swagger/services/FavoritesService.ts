/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM } from '../models/Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM';
import type { Webcom_API_RD_Favorites_AddToQuoteResponse } from '../models/Webcom_API_RD_Favorites_AddToQuoteResponse';
import type { Webcom_API_RD_Favorites_FavoriteActionResponse } from '../models/Webcom_API_RD_Favorites_FavoriteActionResponse';
import type { Webcom_API_RD_Favorites_FavoritesRequest } from '../models/Webcom_API_RD_Favorites_FavoritesRequest';
import type { Webcom_API_RD_Favorites_FavoritesResponse } from '../models/Webcom_API_RD_Favorites_FavoritesResponse';
import type { Webcom_API_RD_Favorites_ProductNameDescriptonResponse } from '../models/Webcom_API_RD_Favorites_ProductNameDescriptonResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class FavoritesService {

    /**
     * Gets the initialize data.
     * @param productId The product identifier.
     * @param nameFilter The name filter.
     * @returns Webcom_API_RD_Favorites_FavoritesResponse OK
     * @throws ApiError
     */
    public static async favoritesGetInitData(
        productId?: number,
        nameFilter?: string,
    ): Promise<Webcom_API_RD_Favorites_FavoritesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Favorites/GetInitData`,
            query: {
                'productId': productId,
                'nameFilter': nameFilter,
            },
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param request The favorites request.
     * @returns Webcom_API_RD_Favorites_FavoritesResponse OK
     * @throws ApiError
     */
    public static async favoritesGetData(
        request: Webcom_API_RD_Favorites_FavoritesRequest,
    ): Promise<Webcom_API_RD_Favorites_FavoritesResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/GetData`,
            body: request,
        });
        return result.body;
    }

    /**
     * Deletes the favorite.
     * @param favoriteId The favorite identifier.
     * @returns Webcom_API_RD_Favorites_FavoriteActionResponse OK
     * @throws ApiError
     */
    public static async favoritesDeleteFavorite(
        favoriteId: number,
    ): Promise<Webcom_API_RD_Favorites_FavoriteActionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/DeleteFavorite`,
            query: {
                'favoriteId': favoriteId,
            },
        });
        return result.body;
    }

    /**
     * Deletes the favorite from favorites list.
     * @param favoriteId The favorite identifier.
     * @param request The favorite request.
     * @returns Webcom_API_RD_Favorites_FavoritesResponse OK
     * @throws ApiError
     */
    public static async favoritesDeleteFavoriteFromFavoritesList(
        favoriteId: number,
        request: Webcom_API_RD_Favorites_FavoritesRequest,
    ): Promise<Webcom_API_RD_Favorites_FavoritesResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/DeleteFavoriteFromFavoritesList`,
            query: {
                'favoriteId': favoriteId,
            },
            body: request,
        });
        return result.body;
    }

    /**
     * Updates the favorite from favorites list.
     * @param favoriteId The favorite identifier.
     * @param name The favorite name.
     * @param description The favorite description.
     * @param isSharedWithCompanyUsers if set to true favorite is shared with company users.
     * @param isSharedWithAllUsers if set to true favorite is shared with all users.
     * @param request The favorite request.
     * @returns Webcom_API_RD_Favorites_FavoritesResponse OK
     * @throws ApiError
     */
    public static async favoritesUpdateFavoriteFromFavoritesList(
        favoriteId: number,
        name: string,
        description: string,
        isSharedWithCompanyUsers: boolean,
        isSharedWithAllUsers: boolean,
        request: Webcom_API_RD_Favorites_FavoritesRequest,
    ): Promise<Webcom_API_RD_Favorites_FavoritesResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/UpdateFavoriteFromFavoritesList`,
            query: {
                'favoriteId': favoriteId,
                'name': name,
                'description': description,
                'isSharedWithCompanyUsers': isSharedWithCompanyUsers,
                'isSharedWithAllUsers': isSharedWithAllUsers,
            },
            body: request,
        });
        return result.body;
    }

    /**
     * Saves the favorite from catalog.
     * @param productId The product identifier.
     * @param name The favorite name.
     * @param description The favorite description.
     * @param isSharedWithCompanyUsers if set to true favorite is shared with company users.
     * @param isSharedWithAllUsers if set to true favorite is shared with all users.
     * @returns Webcom_API_RD_Favorites_FavoriteActionResponse OK
     * @throws ApiError
     */
    public static async favoritesSaveFavoriteFromCatalog(
        productId: number,
        name: string,
        description: string,
        isSharedWithCompanyUsers: boolean,
        isSharedWithAllUsers: boolean,
    ): Promise<Webcom_API_RD_Favorites_FavoriteActionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/SaveFavoriteFromCatalog`,
            query: {
                'productId': productId,
                'name': name,
                'description': description,
                'isSharedWithCompanyUsers': isSharedWithCompanyUsers,
                'isSharedWithAllUsers': isSharedWithAllUsers,
            },
        });
        return result.body;
    }

    /**
     * Saves the favorite from configurator.
     * @param productId The product identifier.
     * @param name The favorite name.
     * @param description The favorite description.
     * @param isSharedWithCompanyUsers if set to true favorite is shared with company users.
     * @param isSharedWithAllUsers if set to true favorite is shared with all users.
     * @returns Webcom_API_RD_Favorites_FavoriteActionResponse OK
     * @throws ApiError
     */
    public static async favoritesSaveFavoriteFromConfigurator(
        productId: number,
        name: string,
        description: string,
        isSharedWithCompanyUsers: boolean,
        isSharedWithAllUsers: boolean,
    ): Promise<Webcom_API_RD_Favorites_FavoriteActionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/SaveFavoriteFromConfigurator`,
            query: {
                'productId': productId,
                'name': name,
                'description': description,
                'isSharedWithCompanyUsers': isSharedWithCompanyUsers,
                'isSharedWithAllUsers': isSharedWithAllUsers,
            },
        });
        return result.body;
    }

    /**
     * Saves the favorite from cart.
     * @param cartItem The cart item.
     * @param name The favorite name.
     * @param description The favorite description.
     * @param isSharedWithCompanyUsers if set to true favorite is shared with company users.
     * @param isSharedWithAllUsers if set to true favorite is shared with all users.
     * @returns Webcom_API_RD_Favorites_FavoriteActionResponse OK
     * @throws ApiError
     */
    public static async favoritesSaveFavoriteFromCart(
        cartItem: number,
        name: string,
        description: string,
        isSharedWithCompanyUsers: boolean,
        isSharedWithAllUsers: boolean,
    ): Promise<Webcom_API_RD_Favorites_FavoriteActionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/SaveFavoriteFromCart`,
            query: {
                'cartItem': cartItem,
                'name': name,
                'description': description,
                'isSharedWithCompanyUsers': isSharedWithCompanyUsers,
                'isSharedWithAllUsers': isSharedWithAllUsers,
            },
        });
        return result.body;
    }

    /**
     * Updates the favorite from configurator.
     * @param favoriteId The favorite identifier.
     * @param name The favorite name.
     * @param description The favorite description.
     * @param isSharedWithCompanyUsers if set to true favorite is shared with company users.
     * @param isSharedWithAllUsers if set to true favorite is shared with all users.
     * @returns Webcom_API_RD_Favorites_FavoriteActionResponse OK
     * @throws ApiError
     */
    public static async favoritesUpdateFavoriteFromConfigurator(
        favoriteId: number,
        name: string,
        description: string,
        isSharedWithCompanyUsers: boolean,
        isSharedWithAllUsers: boolean,
    ): Promise<Webcom_API_RD_Favorites_FavoriteActionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/UpdateFavoriteFromConfigurator`,
            query: {
                'favoriteId': favoriteId,
                'name': name,
                'description': description,
                'isSharedWithCompanyUsers': isSharedWithCompanyUsers,
                'isSharedWithAllUsers': isSharedWithAllUsers,
            },
        });
        return result.body;
    }

    /**
     * Adds to quote.
     * @param favoriteId The favorite identifier.
     * @param quantity The quantity.
     * @returns Webcom_API_RD_Favorites_AddToQuoteResponse OK
     * @throws ApiError
     */
    public static async favoritesAddToQuote(
        favoriteId: number,
        quantity: number,
    ): Promise<Webcom_API_RD_Favorites_AddToQuoteResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/AddToQuote`,
            query: {
                'favoriteId': favoriteId,
                'quantity': quantity,
            },
        });
        return result.body;
    }

    /**
     * Gets the product name and description.
     * @param productId The product identifier.
     * @returns Webcom_API_RD_Favorites_ProductNameDescriptonResponse OK
     * @throws ApiError
     */
    public static async favoritesGetProductNameAndDescription(
        productId: number,
    ): Promise<Webcom_API_RD_Favorites_ProductNameDescriptonResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/GetProductNameAndDescription`,
            query: {
                'productId': productId,
            },
        });
        return result.body;
    }

    /**
     * Edits the configurable favorite.
     * @param favId The favorite identifier.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async favoritesEditFavorite(
        favId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Favorites/EditFavorite`,
            query: {
                'favId': favId,
            },
        });
        return result.body;
    }

    /**
     * Gets the default settings for favorites page.
     * @returns Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM OK
     * @throws ApiError
     */
    public static async favoritesGetFavoritesDefaultData(): Promise<Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Favorites/GetFavoritesDefaultData`,
        });
        return result.body;
    }

}