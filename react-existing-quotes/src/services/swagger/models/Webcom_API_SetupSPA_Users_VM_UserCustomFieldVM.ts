/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_Common_Lookup } from './Webcom_Configurator_Core_Common_Lookup';

/**
 * User custom field VM
 */
export type Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM = {
    /**
     * Id
     */
    Id?: number;
    /**
     * Label
     */
    Label?: string;
    /**
     * Field type
     */
    FieldType?: number;
    /**
     * Content
     */
    Content?: string;
    /**
     * Permissions
     */
    VisibleToAllDisplayType?: number;
    /**
     * Placeholder for custom table attribute
     */
    Placeholder?: string;
    /**
     * Attribute values
     */
    AttributeValues?: Array<Webcom_Configurator_Core_Common_Lookup>;
}
