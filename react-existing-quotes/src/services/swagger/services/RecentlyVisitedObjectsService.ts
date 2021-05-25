/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_RecentlyVisitedObjects_VM_RecentlyVisitedObjectVM } from '../models/Webcom_API_RD_RecentlyVisitedObjects_VM_RecentlyVisitedObjectVM';
import { request as __request } from '../core/request';

export class RecentlyVisitedObjectsService {

    /**
     * Gets the recently visited objects.
     * @returns Webcom_API_RD_RecentlyVisitedObjects_VM_RecentlyVisitedObjectVM OK
     * @throws ApiError
     */
    public static async recentlyVisitedObjectsGet(): Promise<Array<Webcom_API_RD_RecentlyVisitedObjects_VM_RecentlyVisitedObjectVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/RecentlyVisitedObjects/Get`,
        });
        return result.body;
    }

    /**
     * Executes the action.
     * @param id The identifier.
     * @returns string OK
     * @throws ApiError
     */
    public static async recentlyVisitedObjectsExecuteAction(
        id: number,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/RecentlyVisitedObjects/ExecuteAction`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

}