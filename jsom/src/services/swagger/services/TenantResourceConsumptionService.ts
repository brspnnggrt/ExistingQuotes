/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse } from '../models/Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse';
import type { Webcom_API_Internal_TenantUsage_SystemPerformanceResponse } from '../models/Webcom_API_Internal_TenantUsage_SystemPerformanceResponse';
import type { Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse } from '../models/Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse';
import type { Webcom_API_Internal_TenantUsage_UserActivityResponse } from '../models/Webcom_API_Internal_TenantUsage_UserActivityResponse';
import { request as __request } from '../core/request';

export class TenantResourceConsumptionService {

    /**
     * Gets the resource consumption information for each tenant on current installation. It can be consumed only from default tenant.
     * @returns Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetResourceConsumptionInfoForAllTenants(): Promise<Array<Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetResourceConsumptionInfoForAllTenants`,
        });
        return result.body;
    }

    /**
     * Gets the resource consumption information for specific tenant on current installation.
     * @param tenantName Name of the tenant.
     * @returns Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetResourceConsumptionInfo(
        tenantName: string,
    ): Promise<Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetResourceConsumptionInfo`,
            query: {
                'tenantName': tenantName,
            },
        });
        return result.body;
    }

    /**
     * Gets the resource consumption information for current tenant.
     * @returns Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetResourceConsumptionInfoForCurrentTenant(): Promise<Webcom_API_Internal_TenantUsage_TenantResourceConsumptionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetResourceConsumptionInfoForCurrentTenant`,
        });
        return result.body;
    }

    /**
     * Gets the user activity data.
     * @param filterCurrentPage Gets or sets the current page.
     * @param filterItemsPerPage Gets or sets the items per page.
     * @param filterSortMethod Gets or sets the sort method.
     * @param filterOrderByColumn Gets or sets the order by column.
     * @param filterSearch Gets or sets the search.
     * @returns Webcom_API_Internal_TenantUsage_UserActivityResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetUserActivityData(
        filterCurrentPage?: number,
        filterItemsPerPage?: number,
        filterSortMethod?: string,
        filterOrderByColumn?: string,
        filterSearch?: any,
    ): Promise<Webcom_API_Internal_TenantUsage_UserActivityResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetUserActivityData`,
            query: {
                'filter.currentPage': filterCurrentPage,
                'filter.itemsPerPage': filterItemsPerPage,
                'filter.sortMethod': filterSortMethod,
                'filter.orderByColumn': filterOrderByColumn,
                'filter.search': filterSearch,
            },
        });
        return result.body;
    }

    /**
     * Gets the business performance.
     * @returns Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetBusinessPerformance(): Promise<Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetBusinessPerformance`,
        });
        return result.body;
    }

    /**
     * Gets the business performance filter data.
     * @param filterCurrentPage Gets or sets the current page.
     * @param filterItemsPerPage Gets or sets the items per page.
     * @param filterSortMethod Gets or sets the sort method.
     * @param filterOrderByColumn Gets or sets the order by column.
     * @param filterSearch Gets or sets the search.
     * @returns Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetBusinessPerformanceFilterData(
        filterCurrentPage?: number,
        filterItemsPerPage?: number,
        filterSortMethod?: string,
        filterOrderByColumn?: string,
        filterSearch?: any,
    ): Promise<Webcom_API_Internal_TenantUsage_BusinessPerformanceResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetBusinessPerformanceFilterData`,
            query: {
                'filter.currentPage': filterCurrentPage,
                'filter.itemsPerPage': filterItemsPerPage,
                'filter.sortMethod': filterSortMethod,
                'filter.orderByColumn': filterOrderByColumn,
                'filter.search': filterSearch,
            },
        });
        return result.body;
    }

    /**
     * Gets the system performance.
     * @returns Webcom_API_Internal_TenantUsage_SystemPerformanceResponse OK
     * @throws ApiError
     */
    public static async tenantResourceConsumptionGetSystemPerformance(): Promise<Webcom_API_Internal_TenantUsage_SystemPerformanceResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/TenantResourceConsumption/GetSystemPerformance`,
        });
        return result.body;
    }

}