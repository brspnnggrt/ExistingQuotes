/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM } from './Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM';
import type { Webcom_API_SetupSPA_Products_VM_ProductAttributeValueUsageVM } from './Webcom_API_SetupSPA_Products_VM_ProductAttributeValueUsageVM';

export type Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageVM = {
    ProductAttributeName?: string;
    RuleSource?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM>;
    Triggers?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM>;
    ProductFields?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM>;
    ProductAttributeFields?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM>;
    ProductAttributeValueFields?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM>;
    Containers?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeUsageInfoVM>;
    AttributeValues?: Array<Webcom_API_SetupSPA_Products_VM_ProductAttributeValueUsageVM>;
}
