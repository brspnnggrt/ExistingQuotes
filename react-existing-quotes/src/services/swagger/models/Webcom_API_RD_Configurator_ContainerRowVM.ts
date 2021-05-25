/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_ContainerRowValueVM } from './Webcom_API_RD_Configurator_ContainerRowValueVM';

/**
 * Class ContainerRowVM.
 */
export type Webcom_API_RD_Configurator_ContainerRowVM = {
    /**
     * Gets or sets the index of the row.
     */
    RowIndex?: number;
    /**
     * Gets or sets a value indicating whether this instance can delete.
     */
    CanDelete?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can edit.
     */
    CanEdit?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can copy.
     */
    CanCopy?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is selected.
     */
    IsSelected?: boolean;
    /**
     * Gets the values.
     */
    readonly Values?: Array<Webcom_API_RD_Configurator_ContainerRowValueVM>;
    /**
     * Gets the hidden values.
     */
    readonly HiddenValues?: Array<Webcom_API_RD_Configurator_ContainerRowValueVM>;
}
