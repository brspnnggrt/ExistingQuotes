/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_ContainerActionsVM } from './Webcom_API_Public_Attributes_VM_ContainerActionsVM';
import type { Webcom_API_Public_Attributes_VM_ContainerColumnVM } from './Webcom_API_Public_Attributes_VM_ContainerColumnVM';
import type { Webcom_API_Public_Attributes_VM_ContainerProductVM } from './Webcom_API_Public_Attributes_VM_ContainerProductVM';
import type { Webcom_API_Public_Attributes_VM_ContainerPropertyVM } from './Webcom_API_Public_Attributes_VM_ContainerPropertyVM';
import type { Webcom_API_Public_Attributes_VM_ContainerValidationVM } from './Webcom_API_Public_Attributes_VM_ContainerValidationVM';

export type Webcom_API_Public_Attributes_VM_ContainerVM = {
    PresentResultsOfProductSearch?: boolean;
    MaxContainerRows?: string;
    MinContainerRows?: string;
    EnablePaging?: boolean;
    DefaultNumberOfRows?: number;
    Actions?: Webcom_API_Public_Attributes_VM_ContainerActionsVM;
    Properties?: Array<Webcom_API_Public_Attributes_VM_ContainerPropertyVM>;
    Validations?: Array<Webcom_API_Public_Attributes_VM_ContainerValidationVM>;
    Products?: Array<Webcom_API_Public_Attributes_VM_ContainerProductVM>;
    Columns?: Array<Webcom_API_Public_Attributes_VM_ContainerColumnVM>;
}
