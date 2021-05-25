/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_AttributeValueVM } from './Webcom_API_RD_Configurator_AttributeValueVM';
import type { Webcom_API_RD_Configurator_AutoCompleteItemVM } from './Webcom_API_RD_Configurator_AutoCompleteItemVM';
import type { Webcom_API_RD_Configurator_ContainerVM } from './Webcom_API_RD_Configurator_ContainerVM';
import type { Webcom_API_RD_Configurator_DrillDownVM } from './Webcom_API_RD_Configurator_DrillDownVM';

/**
 * Class AttributeVM.
 */
export type Webcom_API_RD_Configurator_AttributeVM = {
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the p a_ identifier.
     */
    PA_ID?: number;
    /**
     * Gets or sets the display as.
     */
    DisplayAs?: number;
    /**
     * Gets or sets the hint.
     */
    Hint?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Configurator.AttributeVM} is incomplete.
     */
    Incomplete?: boolean;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Configurator.AttributeVM} is required.
     */
    Required?: boolean;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets the standard attribute code.
     */
    StdAttrCode?: number;
    /**
     * Gets or sets the type of the data.
     */
    DataType?: string;
    /**
     * Gets or sets the MLR.
     */
    MLR?: number;
    /**
     * Gets or sets the MLC.
     */
    MLC?: number;
    /**
     * Gets or sets the user input.
     */
    UserInput?: string;
    /**
     * Gets or sets the quantity.
     */
    Quantity?: string;
    /**
     * Gets or sets a value indicating whether this instance is whole row.
     */
    IsWholeRow?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is enabled.
     */
    IsEnabled?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is line item.
     */
    IsLineItem?: boolean;
    /**
     * Gets or sets the container.
     */
    Container?: Webcom_API_RD_Configurator_ContainerVM;
    /**
     * Gets or sets the drill down.
     */
    DrillDown?: Webcom_API_RD_Configurator_DrillDownVM;
    /**
     * Gets or sets the auto-complete.
     */
    AutoComplete?: Webcom_API_RD_Configurator_AutoCompleteItemVM;
    /**
     * Gets or sets the values.
     */
    Values?: Array<Webcom_API_RD_Configurator_AttributeValueVM>;
    /**
     * Message that sould be displayed if validation fails
     */
    ValidationMessage?: string;
    /**
     * Validation rules for numeric attributes
     */
    ValidationRules?: Array<string>;
    /**
     * Flag that indicates whether the attribute has conflict or not (used for VC integration)
     */
    HasConflict?: boolean;
}
