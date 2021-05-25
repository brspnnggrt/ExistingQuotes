/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_TranslatedAttributeValueVM } from './Webcom_API_Public_Attributes_VM_TranslatedAttributeValueVM';
import type { Webcom_API_Public_Attributes_VM_TranslatedContainerColumnVM } from './Webcom_API_Public_Attributes_VM_TranslatedContainerColumnVM';
import type { Webcom_API_Public_Attributes_VM_TranslatedContainerPropertyVM } from './Webcom_API_Public_Attributes_VM_TranslatedContainerPropertyVM';
import type { Webcom_API_Public_Attributes_VM_TranslatedContainerValidationMessageVM } from './Webcom_API_Public_Attributes_VM_TranslatedContainerValidationMessageVM';

export type Webcom_API_Public_Attributes_VM_TranslatedAttributeVM = {
    /**
     * Represents the dictionary identifier. 0 (zero) represents the default dictionary
     */
    DictionaryId: number;
    Name?: string;
    Values?: Array<Webcom_API_Public_Attributes_VM_TranslatedAttributeValueVM>;
    ContainerColumns?: Array<Webcom_API_Public_Attributes_VM_TranslatedContainerColumnVM>;
    ContainerProperties?: Array<Webcom_API_Public_Attributes_VM_TranslatedContainerPropertyVM>;
    ContainerValidationMessages?: Array<Webcom_API_Public_Attributes_VM_TranslatedContainerValidationMessageVM>;
}
