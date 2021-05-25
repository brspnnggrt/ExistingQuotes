/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class CompaniesImportExportService {

    /**
     * Exports all companies and returns the XML file.
     * @returns any OK
     * @throws ApiError
     */
    public static async companiesImportExportExport(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/CompaniesImportExport/Export`,
        });
        return result.body;
    }

    /**
     * Imports this instance.
     * @returns any OK
     * @throws ApiError
     */
    public static async companiesImportExportImport(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/CompaniesImportExport/Import`,
        });
        return result.body;
    }

}