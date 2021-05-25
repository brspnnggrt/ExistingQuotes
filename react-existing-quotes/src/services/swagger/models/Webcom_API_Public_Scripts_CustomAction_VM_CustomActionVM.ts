/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Scripts_CustomAction_VM_ActionConditionVM } from './Webcom_API_Public_Scripts_CustomAction_VM_ActionConditionVM';
import type { Webcom_API_Public_Scripts_CustomAction_VM_ActionDefinitionVM } from './Webcom_API_Public_Scripts_CustomAction_VM_ActionDefinitionVM';

/**
 * Custom action view-model
 */
export type Webcom_API_Public_Scripts_CustomAction_VM_CustomActionVM = {
    /**
     * Script Definition
     */
    ActionDefinition: Webcom_API_Public_Scripts_CustomAction_VM_ActionDefinitionVM;
    /**
     * Force proxy generation
     */
    ForceProxyGeneration?: boolean;
    /**
     * Action condition
     */
    ActionCondition: Webcom_API_Public_Scripts_CustomAction_VM_ActionConditionVM;
}
