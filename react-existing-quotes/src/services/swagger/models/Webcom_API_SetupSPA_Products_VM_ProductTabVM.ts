/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_ConfiguratorAttributeVM } from './Webcom_API_SetupSPA_Products_VM_ConfiguratorAttributeVM';

export type Webcom_API_SetupSPA_Products_VM_ProductTabVM = {
    Id?: number;
    Code?: number;
    Name?: string;
    Rank?: number;
    TemplateId?: number;
    RDTemplateId?: number;
    Attributes?: Array<Webcom_API_SetupSPA_Products_VM_ConfiguratorAttributeVM>;
    VisibilityId?: number;
    VisibilityCondition?: string;
}
