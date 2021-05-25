/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_NameValuePair } from '../models/Webcom_API_NameValuePair';
import type { Webcom_API_RD_Customers_AccountDetailsResponse } from '../models/Webcom_API_RD_Customers_AccountDetailsResponse';
import type { Webcom_API_RD_Customers_AccountInfoResponse } from '../models/Webcom_API_RD_Customers_AccountInfoResponse';
import type { Webcom_API_RD_Customers_AddressesLookupResponse } from '../models/Webcom_API_RD_Customers_AddressesLookupResponse';
import type { Webcom_API_RD_Customers_AddressResponse } from '../models/Webcom_API_RD_Customers_AddressResponse';
import type { Webcom_API_RD_Customers_CrmLookupResponse } from '../models/Webcom_API_RD_Customers_CrmLookupResponse';
import type { Webcom_API_RD_Customers_CustomerListRequest } from '../models/Webcom_API_RD_Customers_CustomerListRequest';
import type { Webcom_API_RD_Customers_CustomerListResponse } from '../models/Webcom_API_RD_Customers_CustomerListResponse';
import type { Webcom_API_RD_Customers_CustomerRoleResponse } from '../models/Webcom_API_RD_Customers_CustomerRoleResponse';
import type { Webcom_API_RD_Customers_GetStatesRequest } from '../models/Webcom_API_RD_Customers_GetStatesRequest';
import type { Webcom_API_RD_Customers_SaveCustomerRequest } from '../models/Webcom_API_RD_Customers_SaveCustomerRequest';
import type { Webcom_API_RD_Customers_SearchResponse } from '../models/Webcom_API_RD_Customers_SearchResponse';
import type { Webcom_API_RD_Customers_ShippingInfoResponse } from '../models/Webcom_API_RD_Customers_ShippingInfoResponse';
import { request as __request } from '../core/request';

export class CustomersService {

    /**
     * Clears the customer role.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersClearCustomerRole(
        roleType: number,
    ): Promise<Array<Webcom_API_RD_Customers_CustomerRoleResponse>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/ClearCustomerRole`,
            query: {
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * Copies the customer.
     * @param id The identifier.
     * @param filter The filter.
     * @returns Webcom_API_RD_Customers_CustomerListResponse OK
     * @throws ApiError
     */
    public static async customersCopyCustomer(
        id: number,
        filter: Webcom_API_RD_Customers_CustomerListRequest,
    ): Promise<Webcom_API_RD_Customers_CustomerListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/CopyCustomer`,
            query: {
                'id': id,
            },
            body: filter,
        });
        return result.body;
    }

    /**
     * Gets the account information.
     * @param accountId The account identifier.
     * @returns Webcom_API_RD_Customers_AccountInfoResponse OK
     * @throws ApiError
     */
    public static async customersGetAccountInfo(
        accountId: string,
    ): Promise<Webcom_API_RD_Customers_AccountInfoResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetAccountInfo`,
            query: {
                'accountId': accountId,
            },
        });
        return result.body;
    }

    /**
     * Gets the addresses post code lookup.
     * @param countryCode The country code.
     * @param zipCode The zip code.
     * @returns Webcom_API_RD_Customers_AddressesLookupResponse OK
     * @throws ApiError
     */
    public static async customersGetAddressesPostCodeLookup(
        countryCode: string,
        zipCode: string,
    ): Promise<Webcom_API_RD_Customers_AddressesLookupResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetAddressesPostCodeLookup`,
            query: {
                'countryCode': countryCode,
                'zipCode': zipCode,
            },
        });
        return result.body;
    }

    /**
     * Gets the contact information.
     * @param contactId The contact identifier.
     * @returns Webcom_API_RD_Customers_AccountInfoResponse OK
     * @throws ApiError
     */
    public static async customersGetContactInfo(
        contactId: string,
    ): Promise<Webcom_API_RD_Customers_AccountInfoResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetContactInfo`,
            query: {
                'contactId': contactId,
            },
        });
        return result.body;
    }

    /**
     * Gets the CRM account and contacts for import.
     * @param accountId The account identifier.
     * @returns Webcom_API_RD_Customers_AccountDetailsResponse OK
     * @throws ApiError
     */
    public static async customersGetCrmAccountAndContactsForImport(
        accountId: string,
    ): Promise<Webcom_API_RD_Customers_AccountDetailsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetCrmAccountAndContactsForImport`,
            query: {
                'accountId': accountId,
            },
        });
        return result.body;
    }

    /**
     * Handles on selected country changed events
     * @param request Get states for selected country request
     * @returns Webcom_API_NameValuePair OK
     * @throws ApiError
     */
    public static async customersChangedSelectedCountry(
        request: Webcom_API_RD_Customers_GetStatesRequest,
    ): Promise<Array<Webcom_API_NameValuePair>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/ChangedSelectedCountry`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the CRM lookup information.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_CrmLookupResponse OK
     * @throws ApiError
     */
    public static async customersGetCrmLookupInfo(
        roleType: number,
    ): Promise<Webcom_API_RD_Customers_CrmLookupResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetCrmLookupInfo`,
            query: {
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * Gets the customer.
     * @param id The identifier.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersGetCustomer(
        id: number,
    ): Promise<Webcom_API_RD_Customers_CustomerRoleResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetCustomer`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets the customers for customer role.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_CustomerListResponse OK
     * @throws ApiError
     */
    public static async customersGetCustomersForCustomerRole(
        roleType: number,
    ): Promise<Webcom_API_RD_Customers_CustomerListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetCustomersForCustomerRole`,
            query: {
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * Gets the data.
     * @param filter The filter.
     * @returns Webcom_API_RD_Customers_CustomerListResponse OK
     * @throws ApiError
     */
    public static async customersGetData(
        filter: Webcom_API_RD_Customers_CustomerListRequest,
    ): Promise<Webcom_API_RD_Customers_CustomerListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetData`,
            body: filter,
        });
        return result.body;
    }

    /**
     * Gets the initialize data.
     * @returns Webcom_API_RD_Customers_CustomerListResponse OK
     * @throws ApiError
     */
    public static async customersGetInitData(): Promise<Webcom_API_RD_Customers_CustomerListResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Customers/GetInitData`,
        });
        return result.body;
    }

    /**
     * Gets the initialize shipping information data.
     * @returns Webcom_API_RD_Customers_ShippingInfoResponse OK
     * @throws ApiError
     */
    public static async customersGetInitShippingInfoData(): Promise<Webcom_API_RD_Customers_ShippingInfoResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Customers/GetInitShippingInfoData`,
        });
        return result.body;
    }

    /**
     * Gets the post code lookup address by identifier.
     * @param id The identifier.
     * @param byPostCode if set to true [by post code].
     * @returns Webcom_API_RD_Customers_AddressResponse OK
     * @throws ApiError
     */
    public static async customersGetPostCodeLookupAddressById(
        id: string,
        byPostCode: boolean,
    ): Promise<Webcom_API_RD_Customers_AddressResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/GetPostCodeLookupAddressById`,
            query: {
                'id': id,
                'byPostCode': byPostCode,
            },
        });
        return result.body;
    }

    /**
     * Gets the search suggestions.
     * @param query The query.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_SearchResponse OK
     * @throws ApiError
     */
    public static async customersGetSearchSuggestions(
        query: string,
        roleType: string,
    ): Promise<Array<Webcom_API_RD_Customers_SearchResponse>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Customers/GetSearchSuggestions`,
            query: {
                'query': query,
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * Imports the customer from CRM.
     * @param accountId The account identifier.
     * @param contactId The contact identifier.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersImportCustomerFromCrm(
        accountId: string,
        contactId: string,
        roleType: number,
    ): Promise<Array<Webcom_API_RD_Customers_CustomerRoleResponse>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/ImportCustomerFromCrm`,
            query: {
                'accountId': accountId,
                'contactId': contactId,
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * News the customer shipping information.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersNewCustomerShippingInfo(
        roleType: number,
    ): Promise<Webcom_API_RD_Customers_CustomerRoleResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/NewCustomerShippingInfo`,
            query: {
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * Picks the customer from lookup.
     * @param roleType Type of the role.
     * @param customerId The customer identifier.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersPickCustomerFromLookup(
        roleType: number,
        customerId: number,
    ): Promise<Array<Webcom_API_RD_Customers_CustomerRoleResponse>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/PickCustomerFromLookup`,
            query: {
                'roleType': roleType,
                'customerId': customerId,
            },
        });
        return result.body;
    }

    /**
     * Reloads the customer data.
     * @param roleType Type of the role.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersReloadCustomerData(
        roleType: number,
    ): Promise<Webcom_API_RD_Customers_CustomerRoleResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/ReloadCustomerData`,
            query: {
                'roleType': roleType,
            },
        });
        return result.body;
    }

    /**
     * Removes the customer.
     * @param id The identifier.
     * @param filter The filter.
     * @returns Webcom_API_RD_Customers_CustomerListResponse OK
     * @throws ApiError
     */
    public static async customersRemoveCustomer(
        id: number,
        filter: Webcom_API_RD_Customers_CustomerListRequest,
    ): Promise<Webcom_API_RD_Customers_CustomerListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/RemoveCustomer`,
            query: {
                'id': id,
            },
            body: filter,
        });
        return result.body;
    }

    /**
     * Saves the customer.
     * @param customer The customer.
     * @returns Webcom_API_RD_Customers_CustomerListResponse OK
     * @throws ApiError
     */
    public static async customersSaveCustomer(
        customer: Webcom_API_RD_Customers_SaveCustomerRequest,
    ): Promise<Webcom_API_RD_Customers_CustomerListResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/SaveCustomer`,
            body: customer,
        });
        return result.body;
    }

    /**
     * Saves the customer shipping information.
     * @param customer The customer.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersSaveCustomerShippingInfo(
        customer: Webcom_API_RD_Customers_SaveCustomerRequest,
    ): Promise<Array<Webcom_API_RD_Customers_CustomerRoleResponse>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/SaveCustomerShippingInfo`,
            body: customer,
        });
        return result.body;
    }

    /**
     * Copies the customer to.
     * @param copyFrom The copy from.
     * @param copyTo The copy to.
     * @returns Webcom_API_RD_Customers_CustomerRoleResponse OK
     * @throws ApiError
     */
    public static async customersCopyCustomerTo(
        copyFrom: number,
        copyTo: number,
    ): Promise<Array<Webcom_API_RD_Customers_CustomerRoleResponse>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Customers/CopyCustomerTo`,
            query: {
                'copyFrom': copyFrom,
                'copyTo': copyTo,
            },
        });
        return result.body;
    }

}