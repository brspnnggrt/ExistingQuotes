/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Common_Models_PagedDataVM } from '../models/Webcom_API_Common_Models_PagedDataVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from '../models/Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_CustomFieldVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_CustomFieldVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_DistributionCalculationTableRowVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_DistributionCalculationTableRowVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldPermissionVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldPermissionVM';
import type { Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM } from '../models/Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM';
import type { Webcom_Configurator_Core_QuoteV2_QuoteFields_QuoteFieldCalculation } from '../models/Webcom_Configurator_Core_QuoteV2_QuoteFields_QuoteFieldCalculation';
import { request as __request } from '../core/request';

export class QuoteFieldService {

    /**
     * Gets list of quote fields with base info
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetQuoteFields(): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields`,
        });
        return result.body;
    }

    /**
     * Saves provided quote fields
     * @param quoteFields Quote fields
     * @returns void
     * @throws ApiError
     */
    public static async quoteFieldSaveQuoteFields(
        quoteFields: Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/quoteFields`,
            body: quoteFields,
        });
        return result.body;
    }

    /**
     * Gets list of quote fields for calculations with base info.
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetCalculationQuoteFields(): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculations`,
        });
        return result.body;
    }

    /**
     * Gets full info for quote field with provided id
     * @param fieldId Quote field id
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetQuoteField(
        fieldId: number,
    ): Promise<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/${fieldId}`,
        });
        return result.body;
    }

    /**
     * Gets available calculations for quote field with provided id
     * @param fieldId Quote field id
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetAvailableCalculations(
        fieldId: number,
    ): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/${fieldId}/availableCalculations`,
        });
        return result.body;
    }

    /**
     * Gets available calculations for add/update item event
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetAvailableAddUpdateItemCalculations(): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/addUpdateItemCalculations`,
        });
        return result.body;
    }

    /**
     * Saves calculations that will be executed on add/update item event
     * @param calculations Quote calculations
     * @returns void
     * @throws ApiError
     */
    public static async quoteFieldSaveSelectedAddUpdateItemCalculations(
        calculations: Array<Webcom_Configurator_Core_QuoteV2_QuoteFields_QuoteFieldCalculation>,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/quoteFields/addUpdateItemCalculations`,
            body: calculations,
        });
        return result.body;
    }

    /**
     * Gets selected calculations for add/update item event
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetSelectedAddUpdateItemCalculations(): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/addUpdateItemCalculations/selected`,
        });
        return result.body;
    }

    /**
     * Gets calculation script history
     * @param calculationScriptId Calculation script id
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM> OK
     * @throws ApiError
     */
    public static async quoteFieldGetCalculationScriptHistory(
        calculationScriptId: number,
    ): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculations/scripts/${calculationScriptId}/history`,
        });
        return result.body;
    }

    /**
     * Get new systemId
     * @param name Name
     * @returns string OK
     * @throws ApiError
     */
    public static async quoteFieldGetCalculationSystemId(
        name: string,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculations/systemId`,
            query: {
                'name': name,
            },
        });
        return result.body;
    }

    /**
     * Gets calculation script history records details for comparing script versions
     * @param calculationScriptId Calculation script id
     * @param originalRecordId Original script history record id
     * @param compareRecordId Compare script history record id
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetCalculationScriptRecordsDetailsCompare(
        calculationScriptId: number,
        originalRecordId: number,
        compareRecordId: number,
    ): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculations/scripts/${calculationScriptId}/history/compare`,
            query: {
                'originalRecordId': originalRecordId,
                'compareRecordId': compareRecordId,
            },
        });
        return result.body;
    }

    /**
     * Gets calculation script history record details
     * @param calculationScriptId Calculation script id
     * @param calculationScriptRecordId Calculation script history record id
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetCalculationScriptHistroyRecordDetails(
        calculationScriptId: number,
        calculationScriptRecordId: number,
    ): Promise<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationScriptHistoryRecordVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculations/scripts/${calculationScriptId}/history/${calculationScriptRecordId}`,
        });
        return result.body;
    }

    /**
     * Saves provided custom field
     * @param customField Custom field
     * @returns number OK
     * @throws ApiError
     */
    public static async quoteFieldSaveCustomField(
        customField: Webcom_API_SetupSPA_QuoteFields_VM_CustomFieldVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/quoteFields/customField`,
            body: customField,
        });
        return result.body;
    }

    /**
     * Gets quote fields with base info for custom field with provided id
     * @param customFieldId Custom field id
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetCustomFieldQuoteFields(
        customFieldId: number,
    ): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldLightVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/customField/${customFieldId}`,
        });
        return result.body;
    }

    /**
     * Gets visibility and editing permissions (by status or permission group) for field with provided id
     * @param fieldId Quote field id
     * @param isViewByStatus Are editing permissions viewed by status or permission group
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldPermissionVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetQuoteFieldPermissions(
        fieldId: number,
        isViewByStatus: boolean,
    ): Promise<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldPermissionVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/${fieldId}/permissions/${isViewByStatus}`,
        });
        return result.body;
    }

    /**
     * Gets quote fields with visibility permissions (field id and list of permissions)
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetQuoteFieldsWithVisibilityPermissions(): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/visibilityPermissions`,
        });
        return result.body;
    }

    /**
     * Gets quote field with editing permissions (field id and list of permissions)
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetQuoteFieldsWithEditingPermissions(): Promise<Array<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/editingPermissions`,
        });
        return result.body;
    }

    /**
     * Gets quote field calculation
     * @param calculationId Quote field calculation id
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetQuoteFieldCalculation(
        calculationId: number,
    ): Promise<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculation/${calculationId}`,
        });
        return result.body;
    }

    /**
     * Saves quote field calculation
     * @param calculation Quote field calculation
     * @returns number OK
     * @throws ApiError
     */
    public static async quoteFieldSaveQuoteFieldCalculation(
        calculation: Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM,
    ): Promise<number> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/quoteFields/calculation`,
            body: calculation,
        });
        return result.body;
    }

    /**
     * Gets distribution calculations
     * @returns Webcom_API_Common_Models_PagedDataVM<Webcom_API_SetupSPA_QuoteFields_VM_DistributionCalculationTableRowVM> OK
     * @throws ApiError
     */
    public static async quoteFieldGetDistributionCalculations(): Promise<Webcom_API_Common_Models_PagedDataVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculations/distribution`,
        });
        return result.body;
    }

    /**
     * Deletes distribution calculation if it's not used
     * @param calculationId
     * @param name Name of calculation
     * @returns void
     * @throws ApiError
     */
    public static async quoteFieldDeleteDistributionCalculation(
        calculationId: number,
        name: string,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/setup/api/v1/admin/quoteFields/calculations/${calculationId}/distribution/${name}`,
        });
        return result.body;
    }

    /**
     * Saves quote field calculation active state
     * @param calculationId Quote field calculation id
     * @param isActive Is active state
     * @returns void
     * @throws ApiError
     */
    public static async quoteFieldSaveQuoteFieldCalculationActiveState(
        calculationId: number,
        isActive: boolean,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/quoteFields/calculation/${calculationId}/${isActive}`,
        });
        return result.body;
    }

    /**
     * Gets sections total custom calculation
     * @returns Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM OK
     * @throws ApiError
     */
    public static async quoteFieldGetSectionsTotalCustomCalculation(): Promise<Webcom_API_SetupSPA_QuoteFields_VM_QuoteFieldCalculationVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/calculation/sectioncalculation`,
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async quoteFieldGetAggregateTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/aggregateType`,
        });
        return result.body;
    }

    /**
     * @returns Webcom_API_SetupSPA_Common_LookupVM<System_Int32> OK
     * @throws ApiError
     */
    public static async quoteFieldGetTotalCalculationTypes(): Promise<Array<Webcom_API_SetupSPA_Common_LookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/quoteFields/totalCalculationType`,
        });
        return result.body;
    }

}