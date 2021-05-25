/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Company_VM_CompanyVM } from '../models/Webcom_API_SetupSPA_Company_VM_CompanyVM';
import type { Webcom_API_SetupSPA_Users_VM_CompanyTableRowVM } from '../models/Webcom_API_SetupSPA_Users_VM_CompanyTableRowVM';
import { request as __request } from '../core/request';

export class CompanyService {

    /**
     * Gets filtered, paged and sorted companies with total number of companies.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Users_VM_CompanyTableRowVM> OK
     * @throws ApiError
     */
    public static async companyGetCompanies(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/companies`,
        });
        return result.body;
    }

    /**
     * Saves company
     * @param companyVm Company VM
     * @returns number OK
     * @throws ApiError
     */
    public static async companySaveCompany(
        companyVm: Webcom_API_SetupSPA_Company_VM_CompanyVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/companies`,
            body: companyVm,
        });
        return result.body;
    }

    /**
     * Gets data of company with provided id
     * @param companyId Company id
     * @returns Webcom_API_SetupSPA_Company_VM_CompanyVM OK
     * @throws ApiError
     */
    public static async companyGetCompanyById(
        companyId: number,
    ): Promise<Webcom_API_SetupSPA_Company_VM_CompanyVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/companies/${companyId}`,
        });
        return result.body;
    }

    /**
     * Gets administration permissions for company with provided id
     * @param id Company id
     * @returns number OK
     * @throws ApiError
     */
    public static async companyGetAdministrationPermissionsForCompany(
        id: number,
    ): Promise<Array<number>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/companies/${id}/permissions`,
        });
        return result.body;
    }

    /**
     * Deletes company with provided id
     * @param id Company id
     * @returns void
     * @throws ApiError
     */
    public static async companyDeleteCompany(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/companies/${id}`,
        });
        return result.body;
    }

    /**
     * Should use CRM account
     * @returns boolean OK
     * @throws ApiError
     */
    public static async companyShouldUseCrmAccount(): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/companies/crmAccount`,
        });
        return result.body;
    }

    /**
     * Gets system id
     * @returns string OK
     * @throws ApiError
     */
    public static async companyGetSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/companies/SystemId`,
        });
        return result.body;
    }

}