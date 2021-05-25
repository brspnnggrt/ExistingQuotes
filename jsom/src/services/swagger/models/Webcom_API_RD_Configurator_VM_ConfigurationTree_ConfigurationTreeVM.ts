/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_VM_ConfigurationTree_ContainerDataVM } from './Webcom_API_RD_Configurator_VM_ConfigurationTree_ContainerDataVM';

export type Webcom_API_RD_Configurator_VM_ConfigurationTree_ConfigurationTreeVM = {
    Name?: string;
    PartNumber?: string;
    IsComplete?: boolean;
    IsSelected?: boolean;
    HasRequiredAttribute?: boolean;
    HasIncompleteChildren?: boolean;
    ContainerData?: Webcom_API_RD_Configurator_VM_ConfigurationTree_ContainerDataVM;
    IncompleteAttributes?: Array<string>;
    Children?: Array<Webcom_API_RD_Configurator_VM_ConfigurationTree_ConfigurationTreeVM>;
}
