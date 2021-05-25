/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Common_UpdateInfoVM } from '../models/Webcom_API_SetupSPA_Common_UpdateInfoVM';
import type { Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionTableRowVM } from '../models/Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionTableRowVM';
import type { Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionVM } from '../models/Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionVM';
import { request as __request } from '../core/request';

export class EventSubscriptionService {

    /**
     * Gets the paged webhooks.
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionTableRowVM> OK
     * @throws ApiError
     */
    public static async eventSubscriptionGetEventSubscriptions(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/eventSubscription`,
        });
        return result.body;
    }

    /**
     * Saves the webhook.
     * @param eventSubscription
     * @returns Webcom_API_SetupSPA_Common_UpdateInfoVM<System_Guid> OK
     * @throws ApiError
     */
    public static async eventSubscriptionSaveEventSubscription(
        eventSubscription: Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionVM,
    ): Promise<Webcom_API_SetupSPA_Common_UpdateInfoVM> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/eventSubscription`,
            body: eventSubscription,
        });
        return result.body;
    }

    /**
     * Gets the webhook.
     * @param id The webhook id
     * @returns Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionVM OK
     * @throws ApiError
     */
    public static async eventSubscriptionGetEventSubscription(
        id: string,
    ): Promise<Webcom_API_SetupSPA_EventSubscription_VM_EventSubscriptionVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/eventSubscription/${id}`,
        });
        return result.body;
    }

    /**
     * Deletes the webhook.
     * @param id The webhook id.
     * @returns void
     * @throws ApiError
     */
    public static async eventSubscriptionDeleteWebhook(
        id: string,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/eventSubscription/${id}`,
        });
        return result.body;
    }

    /**
     * Gets the domain event lookups.
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_String> OK
     * @throws ApiError
     */
    public static async eventSubscriptionGetDomainEventLookups(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/eventSubscription/lookups/events`,
        });
        return result.body;
    }

}