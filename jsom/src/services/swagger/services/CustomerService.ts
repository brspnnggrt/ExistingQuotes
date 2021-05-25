/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_Customers_VM_CustomerVM } from '../models/Webcom_API_SetupSPA_Customers_VM_CustomerVM';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Gets customer with provided id
     * @param id
     * @returns Webcom_API_SetupSPA_Customers_VM_CustomerVM OK
     * @throws ApiError
     */
    public static async customerGetCustomer(
        id: number,
    ): Promise<Webcom_API_SetupSPA_Customers_VM_CustomerVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/customers/${id}`,
        });
        return result.body;
    }

}