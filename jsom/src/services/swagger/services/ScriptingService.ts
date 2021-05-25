/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Admin_Scripting_CheckSyntaxRequest } from '../models/Webcom_API_Admin_Scripting_CheckSyntaxRequest';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class ScriptingService {

    /**
     * Checks the syntax of provided script.
     * @param request
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async scriptingCheckSyntax(
        request: Webcom_API_Admin_Scripting_CheckSyntaxRequest,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/admin/Scripting/CheckSyntax`,
            body: request,
        });
        return result.body;
    }

    /**
     * Generates the secret key suitable for SHA-256.
     * @returns string OK
     * @throws ApiError
     */
    public static async scriptingGenerateSecretKey(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/admin/Scripting/GenerateSecretKey`,
        });
        return result.body;
    }

}