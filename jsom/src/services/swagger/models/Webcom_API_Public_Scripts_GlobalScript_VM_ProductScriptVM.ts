/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Scripts_ProductScript_VM_ProductScriptDefinitionVM } from './Webcom_API_Public_Scripts_ProductScript_VM_ProductScriptDefinitionVM';
import type { Webcom_API_Public_Scripts_VM_SystemEventHandlerVM } from './Webcom_API_Public_Scripts_VM_SystemEventHandlerVM';

export type Webcom_API_Public_Scripts_GlobalScript_VM_ProductScriptVM = {
    /**
     * Script Definition
     */
    ProductScriptDefinition: Webcom_API_Public_Scripts_ProductScript_VM_ProductScriptDefinitionVM;
    /**
     * Force proxy generation
     */
    ForceProxyGeneration?: boolean;
    /**
     * Array of events for this script
     */
    Events?: Array<Webcom_API_Public_Scripts_VM_SystemEventHandlerVM>;
}
