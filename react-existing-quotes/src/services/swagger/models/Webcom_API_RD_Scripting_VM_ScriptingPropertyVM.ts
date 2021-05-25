/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Scripting_VM_DescriptionVM } from './Webcom_API_RD_Scripting_VM_DescriptionVM';
import type { Webcom_API_RD_Scripting_VM_FunctionArgVM } from './Webcom_API_RD_Scripting_VM_FunctionArgVM';

/**
 * It represents a class with its type, name and functions and properties of that class
 */
export type Webcom_API_RD_Scripting_VM_ScriptingPropertyVM = {
    /**
     * Gets or sets the name.<para>Ex: Items, Quote, User</para>
     */
    Name?: string;
    /**
     * Gets or sets the type.<para>Ex: Scripting.IMainItems, Scripting.IQuote </para>
     */
    Type?: string;
    /**
     * Gets or sets the properties and functions of a class
     */
    PropertiesAndFunctions?: Array<Webcom_API_RD_Scripting_VM_ScriptingPropertyVM>;
    /**
     * Gets or sets the description.<para>This description will be read from XML file</para>
     */
    Description?: Webcom_API_RD_Scripting_VM_DescriptionVM;
    /**
     * Gets or sets a value indicating whether this instance is primitive. So based on this we will show/hide hyperlink
     */
    IsPrimitive?: boolean;
    /**
     * Gets or sets the name of the assembly.
     */
    AssemblyName?: string;
    /**
     * Gets or sets a value indicating whether member is a function.
     */
    IsFunction?: boolean;
    /**
     * Gets or sets the function arguments.Empty is member is not a function (if IsFunction == false).
     */
    FunctionArgs?: Array<Webcom_API_RD_Scripting_VM_FunctionArgVM>;
}
