/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_AttributeValueVM } from './Webcom_API_Public_Attributes_VM_AttributeValueVM';
import type { Webcom_API_Public_Attributes_VM_AutocompleteAttributeVM } from './Webcom_API_Public_Attributes_VM_AutocompleteAttributeVM';
import type { Webcom_API_Public_Attributes_VM_ContainerVM } from './Webcom_API_Public_Attributes_VM_ContainerVM';
import type { Webcom_API_Public_Attributes_VM_MeasurementVM } from './Webcom_API_Public_Attributes_VM_MeasurementVM';

export type Webcom_API_Public_Attributes_VM_AttributeVM = {
    Id?: number;
    Name?: string;
    SystemId?: string;
    ExternalId?: string;
    Type?: Webcom_API_Public_Attributes_VM_AttributeVM.Type;
    TypeLabel?: string;
    ModifiedBy?: string;
    ModifiedOn?: string;
    ContainsPersonallyIdentifiableInformation?: boolean;
    SensitiveData?: boolean;
    NumberOfValues?: number;
    Autocomplete?: Webcom_API_Public_Attributes_VM_AutocompleteAttributeVM;
    Measurement?: Webcom_API_Public_Attributes_VM_MeasurementVM;
    Container?: Webcom_API_Public_Attributes_VM_ContainerVM;
    Values?: Array<Webcom_API_Public_Attributes_VM_AttributeValueVM>;
}

export namespace Webcom_API_Public_Attributes_VM_AttributeVM {

    export enum Type {
        NONE = 'None',
        ATTRIBUTE_QUANTITY = 'AttributeQuantity',
        AUTO_COMPLETE_CUSTOM_TABLE = 'AutoCompleteCustomTable',
        AUTO_COMPLETE_QUOTE_TABLE = 'AutoCompleteQuoteTable',
        CONTAINER = 'Container',
        DATE = 'Date',
        EXTERNAL_VALUE = 'ExternalValue',
        MEASUREMENT = 'Measurement',
        USER_SELECTION = 'UserSelection',
        NUMBER = 'Number',
        QUANTITY = 'Quantity',
        STRING = 'String',
        CONTRACT_DURATION = 'ContractDuration',
        BILLING_CYCLE = 'BillingCycle',
    }


}
