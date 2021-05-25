/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Configurations_ConfigurationContextVM } from './Webcom_API_Public_Configurations_ConfigurationContextVM';
import type { Webcom_API_RD_Configurator_VM_ConfiguratorSimplifiedVM } from './Webcom_API_RD_Configurator_VM_ConfiguratorSimplifiedVM';

/**
 * ConfigurationVM
 */
export type Webcom_API_Public_Configurations_ViewModel_ConfigurationVM = {
    /**
     * Gets or sets ConfiguratorSimplifiedVM
     */
    Configuration?: Webcom_API_RD_Configurator_VM_ConfiguratorSimplifiedVM;
    /**
     * Gets or sets ConfigurationContextVM
     */
    ConfigurationContext?: Webcom_API_Public_Configurations_ConfigurationContextVM;
}
