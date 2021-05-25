/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class CustomersApiService {

    /**
     * Get list of customers with provided customerCode
     * @param customerCode The customer code.
     * @returns any OK
     * @throws ApiError
     */
    public static async customersApiGetCustomersInfo(
        customerCode: string,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/customers`,
            query: {
                'customerCode': customerCode,
            },
        });
        return result.body;
    }

    /**
     * Update customer code by customer CRM Account Id
     * @param crmAccountId Customer CRM Account Id.
     * @param fieldsToUpdate Dictionary of fields for update, currently only CustomerCode field is supported.
     * @returns any Update customer
     * @throws ApiError
     */
    public static async customersApiUpdateCustomerByCrmAccountId(
        crmAccountId: string,
        fieldsToUpdate: Record<string, string>,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/v1/customers/c4c/update/${crmAccountId}`,
            body: fieldsToUpdate,
        });
        return result.body;
    }

}