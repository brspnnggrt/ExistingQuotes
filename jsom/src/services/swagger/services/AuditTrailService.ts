/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_AuditTrail_VM_AdminAuditTrailVM } from '../models/Webcom_API_SetupSPA_AuditTrail_VM_AdminAuditTrailVM';
import type { Webcom_API_SetupSPA_AuditTrail_VM_ProductActionVM } from '../models/Webcom_API_SetupSPA_AuditTrail_VM_ProductActionVM';
import type { Webcom_API_SetupSPA_AuditTrail_VM_UserActionVM } from '../models/Webcom_API_SetupSPA_AuditTrail_VM_UserActionVM';
import { request as __request } from '../core/request';

export class AuditTrailService {

    /**
     * Gets the user action audit trail records.
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/auditTrail?userAction?performer_like=jsmith&amp;offset=10&amp;limit=10The result can be filtered with the following properties using only the listed operators:                 id - ne,eq,lt,gt,ge,le,in     performer - eq,ne,like     quote - eq,ne,like     quoteRevision - eq,ne,like     quoteStatus - eq,ne,like     quoteItem - eq,ne,like     product - eq,ne,like     attribute - eq,ne,like     action - eq,ne,like     field - eq,ne,like     oldValue - eq,ne,like     newValue - eq,ne,like     page - eq,ne,like     date - eq,lt,gt,ge,le            There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_AuditTrail_VM_UserActionVM> Paged records of user action audit trail for request parameters.
     * @throws ApiError
     */
    public static async auditTrailGetUserAction(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/auditTrail/userAction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication/Authorization failed.`,
                500: `Error getting the user action audit trail logs.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the admin action audit trail records.
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/auditTrail?adminAction?entity_like=View&amp;offset=10&amp;limit=10The result can be filtered with the following properties using only the listed operators:                 id - ne,eq,lt,gt,ge,le,in      performer - eq,ne,like     entity - eq,ne,like     entityId - eq,ne,like     sessionId - eq,ne,like     changeSetSystemId - eq,ne,like     changeStep - ne,eq,lt,gt,ge,le,in     product - eq,ne,like     action - eq,ne,like     field - eq,ne,like     oldValue - eq,ne,like     newValue - eq,ne,like     date - eq,lt,gt,ge,le            There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_AuditTrail_VM_AdminAuditTrailVM> Paged records of admin action audit trail for request parameters.
     * @throws ApiError
     */
    public static async auditTrailGetAdminAction(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/auditTrail/adminAction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication/Authorization failed.`,
                500: `Error getting the admin action audit trail logs.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the product action audit trail records.
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/auditTrail?productAction?product_like=stuff&amp;offset=10&amp;limit=10The result can be filtered with the following properties using only the listed operators:                 id - ne,eq,lt,gt,ge,le,in      performer - eq,ne,like     product - eq,ne,like     productSystemId - eq,ne,like     attribute - eq,ne,like     attributeValue - eq,ne,like     attributeSystemId - eq,ne,like     changeSetSystemId - eq,ne,like     changeStep - ne,eq,lt,gt,ge,le,in     ruleMessage - eq,ne,like     action - eq,ne,like     field - eq,ne,like     oldValue - eq,ne,like     newValue - eq,ne,like     date - eq,lt,gt,ge,le            There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_AuditTrail_VM_ProductActionVM> Paged records of product action audit trail for request parameters.
     * @throws ApiError
     */
    public static async auditTrailGetProductAction(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/auditTrail/productAction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication/Authorization failed.`,
                500: `Error getting the product action audit trail logs.`,
            },
        });
        return result.body;
    }

    /**
     * Gets pricebook audit trail.
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/auditTrail?pricebookAction?pricebook_like=stuff&amp;offset=10&amp;limit=10The result can be filtered with the following properties using only the listed operators:                 id - ne,eq,lt,gt,ge,le,in      performer - eq,ne,like     pricebook - eq,ne,like     partNumber - eq,ne,like     priceCode - eq,ne,like     changeSetSystemId - eq,ne,like     changeStep - ne,eq,lt,gt,ge,le,in     action - eq,ne,like     field - eq,ne,like     oldValue - eq,ne,like     newValue - eq,ne,like     date - eq,lt,gt,ge,le            There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_AuditTrail_VM_ProductActionVM> Paged records of pricebook action audit trail for request parameters.
     * @throws ApiError
     */
    public static async auditTrailGetPricebookAction(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/auditTrail/pricebookAction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication/Authorization failed.`,
                500: `Error getting the pricebook action audit trail logs.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the custom table action audit trail records.
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/auditTrail?customTableAction?entity_like=stuff&amp;offset=10&amp;limit=10The result can be filtered with the following properties using only the listed operators:                 id - ne,eq,lt,gt,ge,le,in     performer - eq,ne,like     entity - eq,ne,like     entityId - eq,ne,like     changeSetSystemId - eq,ne,like     changeStep - ne,eq,lt,gt,ge,le,in     action - eq,ne,like     field - eq,ne,like     oldValue - eq,ne,like     newValue - eq,ne,like     date - eq,lt,gt,ge,le            There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_AuditTrail_VM_ProductActionVM> Paged records of custom table action audit trail for request parameters.
     * @throws ApiError
     */
    public static async auditTrailGetCustomTableAction(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/auditTrail/customTableAction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication/Authorization failed.`,
                500: `Error getting the custom table action audit trail logs.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the attribute action audit trail records.
     * This endpoint supports custom filtering and pagination.Example:setup/api/v1/admin/auditTrail?attributeAction?entity=stuff&amp;offset=10&amp;limit=10The result can be filtered with the following properties using only the listed operators:                 id - ne,eq,lt,gt,ge,le,in      performer - eq,ne,like     entity - eq,ne,like     entityId - eq,ne,like     changeSetSystemId - eq,ne,like     changeStep - ne,eq,lt,gt,ge,le,in     action - eq,ne,like     field - eq,ne,like     oldValue - eq,ne,like     newValue - eq,ne,like     date - eq,lt,gt,ge,le            There are additional options available for request:                 sort={-/+}{property name}     limit={number}     offset={number}
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_AuditTrail_VM_ProductActionVM> Paged records of attribute action audit trail for request parameters.
     * @throws ApiError
     */
    public static async auditTrailGetAttributeAction(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/auditTrail/attributeAction`,
            errors: {
                400: `Invalid request options.`,
                403: `Authentication/Authorization failed.`,
                500: `Error getting the attribute action audit trail logs.`,
            },
        });
        return result.body;
    }

}