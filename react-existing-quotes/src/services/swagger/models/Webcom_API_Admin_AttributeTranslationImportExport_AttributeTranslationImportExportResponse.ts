/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_AttributeTranslationImportExport_VM_AttributeTypeVM } from './Webcom_API_Admin_AttributeTranslationImportExport_VM_AttributeTypeVM';
import type { Webcom_API_Admin_AttributeTranslationImportExport_VM_LanguageVM } from './Webcom_API_Admin_AttributeTranslationImportExport_VM_LanguageVM';

/**
 * Class AttributeTranslationImportExportResponse.
 */
export type Webcom_API_Admin_AttributeTranslationImportExport_AttributeTranslationImportExportResponse = {
    /**
     * Gets or sets the languages.
     */
    Languages?: Array<Webcom_API_Admin_AttributeTranslationImportExport_VM_LanguageVM>;
    /**
     * Gets or sets the attribute types.
     */
    AttributeTypes?: Array<Webcom_API_Admin_AttributeTranslationImportExport_VM_AttributeTypeVM>;
}
