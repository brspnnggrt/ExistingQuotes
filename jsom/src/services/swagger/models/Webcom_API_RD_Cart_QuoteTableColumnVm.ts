/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_QuoteTableAttributeValueVm } from './Webcom_API_RD_Cart_QuoteTableAttributeValueVm';
import type { Webcom_Configurator_Core_QuoteTables_QuoteTableColumnValidation } from './Webcom_Configurator_Core_QuoteTables_QuoteTableColumnValidation';

/**
 * Repesents quote table column view model
 */
export type Webcom_API_RD_Cart_QuoteTableColumnVm = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the rank.
     */
    Rank?: number;
    /**
     * Gets or sets the type of the data.
     */
    DataType?: Webcom_API_RD_Cart_QuoteTableColumnVm.DataType;
    /**
     * Gets or sets the attibute identifier.
     */
    AttibuteId?: number;
    /**
     * Gets or sets the values.
     */
    Values?: Array<Webcom_API_RD_Cart_QuoteTableAttributeValueVm>;
    /**
     * Gets or sets column width in percent
     */
    ColumnWidth?: number;
    /**
     * Gets or sets decimal places for column type number
     */
    DecimalPlaces?: number;
    /**
     * Gets or sets number of decimal places in calculations for columns type number
     */
    DecimalPlacesInCalculations?: number;
    /**
     * Gets or sets max number of characters for the column
     */
    MaxCharacters?: number;
    /**
     * Gets or sets the render type for column that is type Attribute
     */
    RenderType?: number;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets validations.
     */
    Validations?: Array<Webcom_Configurator_Core_QuoteTables_QuoteTableColumnValidation>;
}

export namespace Webcom_API_RD_Cart_QuoteTableColumnVm {

    /**
     * Gets or sets the type of the data.
     */
    export enum DataType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }


}
