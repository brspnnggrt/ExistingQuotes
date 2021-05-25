/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Users_VM_UserTypeTableRowVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserTypeTableRowVM';
import type { Webcom_API_SetupSPA_Users_VM_UserTypeVM } from '../models/Webcom_API_SetupSPA_Users_VM_UserTypeVM';
import type { Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary } from '../models/Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary';
import { request as __request } from '../core/request';

export class UserTypeService {

    /**
     * Gets filtered, paged and sorted user types with total number of user types.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_Users_VM_UserTypeTableRowVM> OK
     * @throws ApiError
     */
    public static async userTypeGetUserTypes(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes`,
        });
        return result.body;
    }

    /**
     * Saves the user type.
     * @param userType UserType VM
     * @returns number OK
     * @throws ApiError
     */
    public static async userTypeSaveUserType(
        userType: Webcom_API_SetupSPA_Users_VM_UserTypeVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/userTypes`,
            body: userType,
        });
        return result.body;
    }

    /**
     * Gets user type by id
     * @param id
     * @returns Webcom_API_SetupSPA_Users_VM_UserTypeVM OK
     * @throws ApiError
     */
    public static async userTypeGetUserTypeById(
        id: number,
    ): Promise<Webcom_API_SetupSPA_Users_VM_UserTypeVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes user type with provided id.
     * @param id User type id
     * @returns void
     * @throws ApiError
     */
    public static async userTypeDeleteUserType(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/userTypes/${id}`,
        });
        return result.body;
    }

    /**
     * Gets catalogue views
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userTypeGetObsoleteCatalogueViews(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/CatalogueViews`,
        });
        return result.body;
    }

    /**
     * Gets system id
     * @returns string OK
     * @throws ApiError
     */
    public static async userTypeGetSystemId(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/SystemId`,
        });
        return result.body;
    }

    /**
     * Gets page lookups for user type ui design
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userTypeGetPageLookups(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/ui/lookups/pages`,
        });
        return result.body;
    }

    /**
     * Gets template lookups for page
     * @param pageId
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userTypeGetTemplateLookups(
        pageId: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/ui/lookups/templates/${pageId}`,
        });
        return result.body;
    }

    /**
     * Gets custom template lookups for page
     * @param templateId
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async userTypeGetCustomTemplateLookups(
        templateId: number,
    ): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/ui/lookups/customTemplates/${templateId}`,
        });
        return result.body;
    }

    /**
     * Gets custom templates for data table
     * @param userTypeId
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary> OK
     * @throws ApiError
     */
    public static async userTypeGetCustomTemplates(
        userTypeId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/ui/customTemplates/${userTypeId}`,
        });
        return result.body;
    }

    /**
     * @param customTemplateId
     * @returns Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary OK
     * @throws ApiError
     */
    public static async userTypeGetCustomTemplate(
        customTemplateId: number,
    ): Promise<Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/userTypes/ui/customTemplate/${customTemplateId}`,
        });
        return result.body;
    }

}