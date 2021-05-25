/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVersionVM } from '../models/Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVersionVM';
import type { Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM } from '../models/Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM';
import type { Webcom_API_Public_ResponsiveTemplates_VM_ResponsiveTemplateVM } from '../models/Webcom_API_Public_ResponsiveTemplates_VM_ResponsiveTemplateVM';
import { request as __request } from '../core/request';

export class ResponsiveTemplateService {

    /**
     * Gets a filtered, ordered and paged collection of custom responsive templates.
     * This endpoint supports OData filtering. Example:    /api/responsiveTemplate/v1/customResponsiveTemplates?$filter=name like 'template'The following custom responsive template properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like               description - $filter eq,ne,like     isDefault - $filter eq,ne,like     currentVersion - $filter eq,ne,like     content - $filter eq,ne,like     modifiedOn -$filter eq,lt,gt,ge,le     modifiedBy - $filter eq,ne,like     responsiveTemplateName - $filter eq,ne,like     systemId - $filter eq,ne,like            Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}       SAP CPQ responsive templates API is using <a href=>oData convention</a>.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM> The paged list contains custom responsive templates.
     * @throws ApiError
     */
    public static async responsiveTemplateGetCustomResponsiveTemplates(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Creates a new custom responsive template.
     * @param customResponsiveTemplate Custom responsive template
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns string Custom Responsive Template created successfully.
     * @throws ApiError
     */
    public static async responsiveTemplateCreateCustomResponsiveTemplate(
        customResponsiveTemplate: Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM,
        changeSetId?: number,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates`,
            query: {
                'changeSetId': changeSetId,
            },
            body: customResponsiveTemplate,
            responseHeader: 'location',
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a custom responsive template with the provided ID.
     * @param id Custom responsive template ID
     * @returns Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM Custom Responsive Template
     * @throws ApiError
     */
    public static async responsiveTemplateGetCustomResponsiveTemplate(
        id: number,
    ): Promise<Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates/${id}`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Updates existing custom responsive template with provided ID.
     * @param id Custom responsive template ID
     * @param customResponsiveTemplate Custom responsive template
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any Custom Responsive Template updated successfully.
     * @throws ApiError
     */
    public static async responsiveTemplateUpdateCustomResponsiveTemplate(
        id: number,
        customResponsiveTemplate: Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'PUT',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates/${id}`,
            query: {
                'changeSetId': changeSetId,
            },
            body: customResponsiveTemplate,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes the custom responsive template with the provided ID.
     * @param id Custom responsive template ID
     * @param changeSetId Change set ID (if omitted, the default change set is used)
     * @returns any Custom Responsive Template deleted successfully.
     * @throws ApiError
     */
    public static async responsiveTemplateDeleteCustomResponsiveTemplate(
        id: number,
        changeSetId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates/${id}`,
            query: {
                'changeSetId': changeSetId,
            },
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a filtered, ordered and paged collection of custom responsive template versions for the template with the provided ID.
     * This endpoint supports OData filtering. Example:    /api/responsiveTemplate/v1/customResponsiveTemplates/1/versions?$filter=modifiedBy like 'john'The following custom responsive template version properties are available to OData, and have specific support for $filter option:                  modifiedBy - $filter eq,ne,like     modifiedOn -$filter eq,lt,gt,ge,le     content - $filter eq,ne,like                 Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}       SAP CPQ responsive templates API is using <a href=>oData convention</a>.
     * @param templateId Custom responsive template ID
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVersionVM> The paged list contains custom responsive template versions.
     * @throws ApiError
     */
    public static async responsiveTemplateGetCustomResponsiveTemplateVersions(
        templateId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates/${templateId}/versions`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a custom responsive template version for the template with the provided ID.
     * @param templateId Custom responsive template ID
     * @param versionId Custom responsive template version ID
     * @returns Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVersionVM Custom responsive template version
     * @throws ApiError
     */
    public static async responsiveTemplateGetCustomResponsiveTemplateVersion(
        templateId: number,
        versionId: number,
    ): Promise<Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVersionVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/responsiveTemplate/v1/customResponsiveTemplates/${templateId}/versions/${versionId}`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets a filtered, ordered and paged collection of system responsive templates.
     * This endpoint supports OData filtering. Example:    /api/responsiveTemplate/v1/systemResponsiveTemplates?$filter=name like 'template'The following system responsive template properties are available to OData, and have specific support for $filter option:                  name - $filter eq,ne,like     pageName -$filter eq,ne,like     content - $filter eq,ne,like                 Additional OData options are available for properties listed above:                  $orderby={properties name} {desc/asc}         $top={number} {default is 10, max is 100}         $skip={number}       SAP CPQ responsive templates API is using <a href=>oData convention</a>.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_Public_ResponsiveTemplates_VM_ResponsiveTemplateVM> The paged list of system responsive templates.
     * @throws ApiError
     */
    public static async responsiveTemplateGetSystemResponsiveTemplates(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/responsiveTemplate/v1/systemResponsiveTemplates`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the system responsive template with the provided ID.
     * @param id System responsive template ID
     * @returns Webcom_API_Public_ResponsiveTemplates_VM_ResponsiveTemplateVM System Responsive Template.
     * @throws ApiError
     */
    public static async responsiveTemplateGetSystemResponsiveTemplates1(
        id: number,
    ): Promise<Webcom_API_Public_ResponsiveTemplates_VM_ResponsiveTemplateVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/responsiveTemplate/v1/systemResponsiveTemplates/${id}`,
            errors: {
                400: `Bad request provided.`,
                403: `User is unauthorized.`,
                404: `Resource not found.`,
                500: `Server-specific error occured.`,
            },
        });
        return result.body;
    }

}