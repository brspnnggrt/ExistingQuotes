/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_AssetFieldDefinition } from './Webcom_Configurator_Core_AssetFieldDefinition';

/**
 * Asset definition
 */
export type Webcom_API_Admin_Assets_AssetDefinitionResponse = {
    /**
     * Gets or sets the standard fields.
     */
    StandardFields?: Array<Webcom_Configurator_Core_AssetFieldDefinition>;
    /**
     * Gets or sets the selected fields.
     */
    SelectedFields?: Array<Webcom_Configurator_Core_AssetFieldDefinition>;
    /**
     * Gets or sets the error information.
     */
    ErrorInfo?: string;
    /**
     * Gets or sets the success information.
     */
    SuccessInfo?: string;
}
