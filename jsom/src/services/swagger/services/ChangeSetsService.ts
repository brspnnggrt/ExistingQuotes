/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM } from '../models/Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import { request as __request } from '../core/request';

export class ChangeSetsService {

    /**
     * Gets the change sets for the change set select.
     * @returns Webcom_API_SetupSPA_Common_LookupVM OK
     * @throws ApiError
     */
    public static async changeSetsGetChangeSetOptions(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/ChangeSets/GetChangeSetOptions`,
        });
        return result.body;
    }

    /**
     * Saves the new change set.
     * @param changeSet
     * @returns number OK
     * @throws ApiError
     */
    public static async changeSetsSaveChangeSet(
        changeSet: Webcom_API_SetupSPA_ChangeSet_VM_ChangeSetVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/ChangeSets/SaveChangeSet`,
            body: changeSet,
        });
        return result.body;
    }

    /**
     * Gets the selected change set.
     * @returns number OK
     * @throws ApiError
     */
    public static async changeSetsGetSelectedChangeSet(): Promise<number> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/ChangeSets/GetSelectedChangeSet`,
        });
        return result.body;
    }

    /**
     * Select change set.
     * @param id Id
     * @returns void
     * @throws ApiError
     */
    public static async changeSetsSelectChangeSet(
        id: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/ChangeSets/SelectChangeSet`,
            body: id,
        });
        return result.body;
    }

}