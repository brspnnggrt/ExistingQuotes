/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Customers_CustomerMappingsApiResponse } from '../models/Webcom_API_Public_Customers_CustomerMappingsApiResponse';
import { request as __request } from '../core/request';

export class CustomerApiService {

    /**
     * Gets the customer mappings.
     * @returns Webcom_API_Public_Customers_CustomerMappingsApiResponse OK
     * @throws ApiError
     */
    public static async customerApiGetCrmCustomerMapping(): Promise<Webcom_API_Public_Customers_CustomerMappingsApiResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/CustomerApi/GetCrmCustomerMapping`,
        });
        return result.body;
    }

}