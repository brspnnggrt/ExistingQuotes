/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoGroupsVM } from '../models/Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoGroupsVM';
import type { Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoPermissionVM } from '../models/Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoPermissionVM';
import type { Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationMenuListBoxItemVM } from '../models/Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationMenuListBoxItemVM';
import { request as __request } from '../core/request';

export class SegregationOfDutiesService {

    /**
     * Get all menu link info groups
     * @returns Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoGroupsVM OK
     * @throws ApiError
     */
    public static async segregationOfDutiesGetMenuLinks(): Promise<Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoGroupsVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/menuLinkGroups`,
        });
        return result.body;
    }

    /**
     * Sets apply segregation settings state
     * @param areSegregationSettingsApplied Flag stating whether segregation settings are applied
     * @returns void
     * @throws ApiError
     */
    public static async segregationOfDutiesSetApplySegregationSettings(
        areSegregationSettingsApplied: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/segregationOfDuties/applied/${areSegregationSettingsApplied}`,
        });
        return result.body;
    }

    /**
     * Sets permissive rights prevail state
     * @param isEditingRightPreferred
     * @returns void
     * @throws ApiError
     */
    public static async segregationOfDutiesSetRightsPreference(
        isEditingRightPreferred: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/segregationOfDuties/rightsPreference/${isEditingRightPreferred}`,
        });
        return result.body;
    }

    /**
     * Gets visible menu link info ids for permission group with provided id
     * @param permissionId Permission id
     * @returns Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoPermissionVM OK
     * @throws ApiError
     */
    public static async segregationOfDutiesGetVisibleMenuLinkInfos(
        permissionId: number,
    ): Promise<Array<Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoPermissionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/${permissionId}`,
        });
        return result.body;
    }

    /**
     * Saves visible menu info links for permission group with provided id
     * @param permissionId Permission id
     * @param models Visible menu link info ids
     * @returns void
     * @throws ApiError
     */
    public static async segregationOfDutiesSave(
        permissionId: number,
        models: Array<Webcom_API_SetupSPA_SegregationOfDuties_VM_MenuLinkInfoPermissionVM>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/segregationOfDuties/${permissionId}`,
            body: models,
        });
        return result.body;
    }

    /**
     * Gets submenu items where itemsId contains their id list for menu link by menu link id (example for menu link  this returns custom tables)
     * @param permissionId
     * @param menuLinkInfoId
     * @returns Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationMenuListBoxItemVM OK
     * @throws ApiError
     */
    public static async segregationOfDutiesGetMenuLinkSubItems(
        permissionId: number,
        menuLinkInfoId: number,
    ): Promise<Array<Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationMenuListBoxItemVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/subitems/${permissionId}/${menuLinkInfoId}`,
        });
        return result.body;
    }

    /**
     * Gets segregation admins
     * @returns number OK
     * @throws ApiError
     */
    public static async segregationOfDutiesGetSegregationAdmins(): Promise<Array<number>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/adminSegregationUsers`,
        });
        return result.body;
    }

    /**
     * Sets admin segregation users state
     * @param segregationAdminIds List of segregation admin ids
     * @returns void
     * @throws ApiError
     */
    public static async segregationOfDutiesSaveSegregationAdmins(
        segregationAdminIds: Array<number>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/segregationOfDuties/adminSegregationUsers`,
            body: segregationAdminIds,
        });
        return result.body;
    }

    /**
     * Gets information if user is a part of any permission group that has read only access to users section
     * @param urlKey
     * @returns boolean OK
     * @throws ApiError
     */
    public static async segregationOfDutiesIsReadOnlySection(
        urlKey: string,
    ): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/isReadOnlySection/${urlKey}`,
        });
        return result.body;
    }

    /**
     * @param key
     * @returns number OK
     * @throws ApiError
     */
    public static async segregationOfDutiesGetMenuKeyById(
        key: string,
    ): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/id/${key}`,
        });
        return result.body;
    }

    /**
     * If user can access page
     * @param url Url of page
     * @param key Key of page
     * @returns boolean OK
     * @throws ApiError
     */
    public static async segregationOfDutiesCanAccessPage(
        url?: string,
        key?: string,
    ): Promise<boolean> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/segregationOfDuties/canAccessPage`,
            query: {
                'url': url,
                'key': key,
            },
        });
        return result.body;
    }

}