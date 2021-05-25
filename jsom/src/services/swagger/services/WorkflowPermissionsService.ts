/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_WorkflowPermissions_VM_WorkflowPermissionsVM } from '../models/Webcom_API_Public_WorkflowPermissions_VM_WorkflowPermissionsVM';
import type { Webcom_Configurator_Util_Pagination_PagedData } from '../models/Webcom_Configurator_Util_Pagination_PagedData';
import { request as __request } from '../core/request';

export class WorkflowPermissionsService {

    /**
     * Get workflow permissions.
     * This endpoint supports OData filtering. Example:    api/workflow/v1/permissions?$filter=actionId eq '1'    api/workflow/v1/permissions?$filter=userTypeId eq '10'The following attribute properties are available to OData, and have specific support for $filter option.                  actionId - $filter eq,lt,gt,ge,le     userTypeId - $filter eq,lt,gt,ge,le            Additional OData option are available for these properties:               $orderby={properties name} {desc/asc}   $top={number, max 100}   $skip={number}            For more information, check the OData syntax documentation https://www.odata.org/documentation/odata-version-2-0/uri-conventions/
     * @returns Webcom_Configurator_Util_Pagination_PagedData<Webcom_API_Public_WorkflowPermissions_VM_WorkflowPermissionsVM> List of user types assigned to each action according to workflow permissions.
     * @throws ApiError
     */
    public static async workflowPermissionsGetPermissions(): Promise<Webcom_Configurator_Util_Pagination_PagedData> {
        const result = await __request({
            method: 'GET',
            path: `/api/workflow/v1/permissions`,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication failed.`,
                500: `Error getting workflow permissions.`,
            },
        });
        return result.body;
    }

    /**
     * Replace the user types assigned to an action with a new set of user types.
     * Request data in body is formatted in the same way it is return from GET,but it is important to know that <b>only IDs are taken</b> into consideration.This means that User Type Name and Action Name <b>cannot be updated through this method call</b>.   This endpoint will replace the existing user types with new ones within body request,only if the action and the user types already exist in the system.If validation for one permission fails, all permissions are rejected.
     * @param permissions List of permissions.
     * @returns any Updated user types for specific actions.
     * @throws ApiError
     */
    public static async workflowPermissionsSave(
        permissions: Array<Webcom_API_Public_WorkflowPermissions_VM_WorkflowPermissionsVM>,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/workflow/v1/permissions`,
            body: permissions,
            errors: {
                400: `Invalid request options.`,
                401: `Authentication failed.`,
                404: `Action or user type not found.`,
                500: `Error updating workflow permissions.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes the workflow permissions that are assigned to a user type for an action.
     * User Type and Action <b>cannot be deleted through this method call</b>,   only workflow permissions existing user type and action is deleted if exists.
     * @param actionId Unique action ID.
     * @param userTypeId Unique user type ID.
     * @returns void
     * @throws ApiError
     */
    public static async workflowPermissionsDelete(
        actionId: number,
        userTypeId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/workflow/v1/permissions/action/${actionId}/userType/${userTypeId}`,
            errors: {
                400: `The workflow permissions for the user type can't be deleted for the specified action.`,
                401: `Authentication failed.`,
                404: `Action or user type not found.`,
                500: `Error deleting the user type from the workflow permissions for the specified action.`,
            },
        });
        return result.body;
    }

}