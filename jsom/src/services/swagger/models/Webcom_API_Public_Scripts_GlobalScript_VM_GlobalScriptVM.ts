/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptDefinitionVM } from './Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptDefinitionVM';
import type { Webcom_API_Public_Scripts_VM_SystemEventHandlerVM } from './Webcom_API_Public_Scripts_VM_SystemEventHandlerVM';

/**
 * Global script view-model
 */
export type Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptVM = {
    /**
     * Script definition
     */
    ScriptDefinition: Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptDefinitionVM;
    /**
     * Force proxy generation
     */
    ForceProxyGeneration?: boolean;
    /**
     * Array of events for this script
     */
    Events?: Array<Webcom_API_Public_Scripts_VM_SystemEventHandlerVM>;
}
