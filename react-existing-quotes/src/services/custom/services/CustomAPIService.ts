/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Webcom_CustomAPI_ExecuteScript } from '../models/Webcom_CustomAPI_ExecuteScript';
import { request as __request } from '../core/request';

export class CustomAPIService {

    /**
     * Executes the script.
     * @param request The request.
     * @returns any OK
     * @throws ApiError
     */
    public static async executeScript(
        request: Webcom_CustomAPI_ExecuteScript,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/CustomAPI/ExecuteScript`,
            body: `scriptName=${request.scriptName}` + request.param ? `&param=${request.param}` : ``,
        });
        return result.body;
    }

}