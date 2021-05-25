/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class MenuService {

    /**
     * Gets key for hidden items in menu for new setup
     * @returns string OK
     * @throws ApiError
     */
    public static async menuGetHiddenMenuKeys(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/menu/items/hidden`,
        });
        return result.body;
    }

    /**
     * Gets keys of all menu items which should be disabled for CpqLite
     * @returns string OK
     * @throws ApiError
     */
    public static async menuGetDisabledMenuItemsForCpqLite(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/menu/items/disabled`,
        });
        return result.body;
    }

}