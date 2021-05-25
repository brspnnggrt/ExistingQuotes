/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Scripting_VM_ScriptingPropertyVM } from '../models/Webcom_API_RD_Scripting_VM_ScriptingPropertyVM';
import type { Webcom_API_SetupSPA_IronPython_VM_ScriptVM } from '../models/Webcom_API_SetupSPA_IronPython_VM_ScriptVM';
import { request as __request } from '../core/request';

export class IronPythonSpaService {

    /**
     * Gets the scripting properties.
     * @param fullName The full name. Ex: Scripting.Quote
     * @param assemblyName Name of the assembly name.
     * @returns Webcom_API_RD_Scripting_VM_ScriptingPropertyVM OK
     * @throws ApiError
     */
    public static async ironPythonSpaGetProperties(
        fullName: string,
        assemblyName: string,
    ): Promise<Webcom_API_RD_Scripting_VM_ScriptingPropertyVM> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/ironPythonContext/properties/${fullName}/${assemblyName}`,
        });
        return result.body;
    }

    /**
     * Gets the first level data.
     * @param mode
     * @returns Webcom_API_RD_Scripting_VM_ScriptingPropertyVM OK
     * @throws ApiError
     */
    public static async ironPythonSpaGetFirstLevelProperties(
        mode: string,
    ): Promise<Array<Webcom_API_RD_Scripting_VM_ScriptingPropertyVM>> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/ironPythonContext/properties/firstLevel/${mode}`,
        });
        return result.body;
    }

    /**
     * Checks syntax of a script through CPQScriptEngine and returns errors if any.
     * @param script
     * @returns string OK
     * @throws ApiError
     */
    public static async ironPythonSpaCheckSyntax(
        script: Webcom_API_SetupSPA_IronPython_VM_ScriptVM,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/ironPythonContext/syntax`,
            body: script,
        });
        return result.body;
    }

}