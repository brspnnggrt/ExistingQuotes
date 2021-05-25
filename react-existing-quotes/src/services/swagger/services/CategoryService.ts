/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Categories_VM_CategoryVM } from '../models/Webcom_API_SetupSPA_Categories_VM_CategoryVM';
import { request as __request } from '../core/request';

export class CategoryService {

    /**
     * Gets categories
     * @returns Webcom_API_SetupSPA_Categories_VM_CategoryVM OK
     * @throws ApiError
     */
    public static async categoryGetCategories(): Promise<Array<Webcom_API_SetupSPA_Categories_VM_CategoryVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/categories`,
        });
        return result.body;
    }

}