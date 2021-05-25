/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM } from '../models/Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM';
import type { Webcom_API_SetupSPA_ChangeSet_VM_TenantEnvironmentVM } from '../models/Webcom_API_SetupSPA_ChangeSet_VM_TenantEnvironmentVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import { request as __request } from '../core/request';

export class ChangeSetService {

    /**
     * @param id
     * @returns Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM OK
     * @throws ApiError
     */
    public static async changeSetGetChangeSet(
        id: number,
    ): Promise<Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/changeSets/${id}`,
        });
        return result.body;
    }

    /**
     * Gets data for change set datatable
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM> OK
     * @throws ApiError
     */
    public static async changeSetGetChangeSetDataTable(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/changeSets`,
        });
        return result.body;
    }

    /**
     * Saves change set.
     * @param changeSet ChangeSet
     * @returns number OK
     * @throws ApiError
     */
    public static async changeSetSaveChangeSet(
        changeSet: Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/changeSets`,
            body: changeSet,
        });
        return result.body;
    }

    /**
     * Gets list of change set lookups
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async changeSetGetChangeSetLookups(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/changeSets/lookups`,
        });
        return result.body;
    }

    /**
     * Gets list of change set lookups
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async changeSetGetChangeSetFilterLookups(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/changeSets/filterLookups`,
        });
        return result.body;
    }

    /**
     * Set status
     * @param id Change set id
     * @param isActive Is active
     * @returns void
     * @throws ApiError
     */
    public static async changeSetSetStatus(
        id: number,
        isActive: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/changeSets/${id}/status/${isActive}`,
        });
        return result.body;
    }

    /**
     * Select change set.
     * @param id Id
     * @returns void
     * @throws ApiError
     */
    public static async changeSetSelectChangeSet(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/changeSets/${id}/selected`,
        });
        return result.body;
    }

    /**
     * Gets the selected change set.
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async changeSetGetSelectedChangeSet(): Promise<Webcom_API_SetupSPA_Common_LookupVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/changeSets/selected`,
        });
        return result.body;
    }

    /**
     * Get connected environments for send deploy change sets
     * @returns Webcom_API_SetupSPA_ChangeSet_VM_TenantEnvironmentVM OK
     * @throws ApiError
     */
    public static async changeSetGetConnectedTenantEnvironments(): Promise<Array<Webcom_API_SetupSPA_ChangeSet_VM_TenantEnvironmentVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/changeSets/getTenantEnv`,
        });
        return result.body;
    }

    /**
     * Send change sets to target environment
     * @param envId id of targetenvironment
     * @param changeSets Change set list
     * @returns void
     * @throws ApiError
     */
    public static async changeSetSendChangeSetsAsync(
        envId: number,
        changeSets: Array<Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/changeSets/sendChangeSets/${envId}`,
            body: changeSets,
        });
        return result.body;
    }

    /**
     * Deploy change sets from other environment
     * @param changeSets Change sets for deployment
     * @returns void
     * @throws ApiError
     */
    public static async changeSetDeployChangeSets(
        changeSets: Array<Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/changeSets/deployChangeSets`,
            body: changeSets,
        });
        return result.body;
    }

}