/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_ContainerRowValueOptionVM } from './Webcom_API_RD_Configurator_ContainerRowValueOptionVM';

/**
 * Class ContainerRowValueVM.
 */
export type Webcom_API_RD_Configurator_ContainerRowValueVM = {
    /**
     * Gets or sets the column identifier.
     */
    ColumnId?: number;
    /**
     * Gets or sets autocomplete selected entity id .
     */
    EntityId?: number;
    /**
     * Gets or sets a value indicating whether this instance is empty.
     */
    IsEmpty?: boolean;
    /**
     * Gets or sets a value indicating whether any attribute value of reference attribute is selected.
     */
    IsSelected?: boolean;
    /**
     * Gets or sets the display type.
     */
    DisplayType?: number;
    /**
     * Gets or sets the type of the data.
     */
    DataType?: number;
    /**
     * Gets or sets the value.
     */
    Value?: string;
    /**
     * Gets the options.
     */
    readonly Options?: Array<Webcom_API_RD_Configurator_ContainerRowValueOptionVM>;
}
