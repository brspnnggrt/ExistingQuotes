/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_TranslatedProductAttributeVM } from './Webcom_API_SetupSPA_Products_VM_TranslatedProductAttributeVM';

export type Webcom_API_SetupSPA_Products_VM_TranslatedProductVM = {
    /**
     * Represents the dictionary identifier. 0 (zero) represents the default dictionary
     */
    DictionaryId: number;
    Name?: string;
    Description?: string;
    LongDescription?: string;
    DescriptionBuilder?: string;
    Attributes?: Array<Webcom_API_SetupSPA_Products_VM_TranslatedProductAttributeVM>;
}
