/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_ProxyUser_ProxyUserResponse } from '../models/Webcom_API_Admin_ProxyUser_ProxyUserResponse';
import type { Webcom_API_Admin_ProxyUser_VM_UserVM } from '../models/Webcom_API_Admin_ProxyUser_VM_UserVM';
import { request as __request } from '../core/request';

export class ProxyUserService {

    /**
     * @returns Webcom_API_Admin_ProxyUser_ProxyUserResponse OK
     * @throws ApiError
     */
    public static async proxyUserGetInitData(): Promise<Webcom_API_Admin_ProxyUser_ProxyUserResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/ProxyUser/GetInitData`,
        });
        return result.body;
    }

    /**
     * @param domainName
     * @returns Webcom_API_Admin_ProxyUser_VM_UserVM OK
     * @throws ApiError
     */
    public static async proxyUserGetUsersForTenant(
        domainName: string,
    ): Promise<Array<Webcom_API_Admin_ProxyUser_VM_UserVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/ProxyUser/GetUsersForTenant`,
            query: {
                'domainName': domainName,
            },
        });
        return result.body;
    }

    /**
     * @param userId
     * @param domainName
     * @returns string OK
     * @throws ApiError
     */
    public static async proxyUserLoginAsProxyUser(
        userId: number,
        domainName: string,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/ProxyUser/LoginAsProxyUser`,
            query: {
                'userId': userId,
                'domainName': domainName,
            },
        });
        return result.body;
    }

}