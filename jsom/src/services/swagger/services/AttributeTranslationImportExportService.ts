/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_AttributeTranslationImportExport_AttributeTranslationImportExportResponse } from '../models/Webcom_API_Admin_AttributeTranslationImportExport_AttributeTranslationImportExportResponse';
import { request as __request } from '../core/request';

export class AttributeTranslationImportExportService {

    /**
     * Gets the initialize data.
     * @returns Webcom_API_Admin_AttributeTranslationImportExport_AttributeTranslationImportExportResponse OK
     * @throws ApiError
     */
    public static async attributeTranslationImportExportGetInitData(): Promise<Webcom_API_Admin_AttributeTranslationImportExport_AttributeTranslationImportExportResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/AttributeTranslationImportExport/GetInitData`,
        });
        return result.body;
    }

}