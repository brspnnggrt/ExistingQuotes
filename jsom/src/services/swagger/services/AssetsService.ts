/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Assets_AssetsListRequest } from '../models/Webcom_API_RD_Assets_AssetsListRequest';
import type { Webcom_API_RD_Assets_AssetsResponse } from '../models/Webcom_API_RD_Assets_AssetsResponse';
import type { Webcom_API_RedirectResponse } from '../models/Webcom_API_RedirectResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class AssetsService {

    /**
     * Gets the initialize data.
     * @returns Webcom_API_RD_Assets_AssetsResponse OK
     * @throws ApiError
     */
    public static async assetsGetInitData(): Promise<Webcom_API_RD_Assets_AssetsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Assets/GetInitData`,
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param request The request.
     * @returns Webcom_API_RD_Assets_AssetsResponse OK
     * @throws ApiError
     */
    public static async assetsGetData(
        request: Webcom_API_RD_Assets_AssetsListRequest,
    ): Promise<Webcom_API_RD_Assets_AssetsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Assets/GetData`,
            body: request,
        });
        return result.body;
    }

    /**
     * Saves the filter.
     * @param request The request.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async assetsSaveFilter(
        request: Webcom_API_RD_Assets_AssetsListRequest,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Assets/SaveFilter`,
            body: request,
        });
        return result.body;
    }

    /**
     * Renews the assets.
     * @param selectedAssets The selected assets.
     * @returns Webcom_API_RedirectResponse OK
     * @throws ApiError
     */
    public static async assetsRenewAssets(
        selectedAssets: Array<number>,
    ): Promise<Webcom_API_RedirectResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Assets/RenewAssets`,
            body: selectedAssets,
        });
        return result.body;
    }

}