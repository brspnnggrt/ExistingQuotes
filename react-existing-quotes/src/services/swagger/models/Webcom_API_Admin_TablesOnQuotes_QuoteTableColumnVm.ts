/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnValidationRuleVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnValidationRuleVm';
import type { Webcom_Configurator_Core_QuoteTables_QuoteTableAttributeValue } from './Webcom_Configurator_Core_QuoteTables_QuoteTableAttributeValue';

/**
 * Quote table column representation
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm = {
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
     * Gets or sets the type of the column data.
     */
    ColumnDataType?: Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm.ColumnDataType;
    /**
     * Gets or sets the attribute identifier.
     */
    AttributeId?: number;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets the attribute values.
     */
    AttributeValues?: Array<Webcom_Configurator_Core_QuoteTables_QuoteTableAttributeValue>;
    /**
     * Gets or sets columns width for all column types.
     */
    ColumnWidth?: number;
    /**
     * Gets or sets decimal places for column type number and money.
     */
    DecimalPlaces?: number;
    /**
     * Gets or sets decimal places in calculations for column type money.
     */
    DecimalPlacesInCalculations?: number;
    /**
     * Gets or sets max characters for column type string.
     */
    MaxCharacters?: number;
    /**
     * Gets or sets render type for column type attribute
     */
    RenderType?: number;
    /**
     * Gets or sets wheter column type attribute is autocomplete
     */
    IsAutocomplete?: boolean;
    /**
     * Gets or sets the editable quote table permissions.
     */
    EditableColumnPermissions?: Array<number>;
    /**
     * Gets or sets the hidden quote table permissions.
     */
    HiddenColumnPermissions?: Array<number>;
    /**
     * Gets or sets column validations rule
     */
    Validations?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnValidationRuleVm>;
    /**
     * Gets or sets column group id.
     */
    GroupId?: number;
    /**
     * Determines whether is column used in autocomplete attribute
     */
    IsColumnUsed?: boolean;
    /**
     * Data Protection related, indicates that this quote table column contains private information
     */
    IsProtected?: boolean;
    /**
     * Data Protection related, indicates that this quote table column contains SENSITIVE private informationWILL BE EVALUATED ONLY IF {Webcom.API.Admin.TablesOnQuotes.QuoteTableColumnVm.IsProtected} IS TRUE
     */
    IsSensitive?: boolean;
}

export namespace Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm {

    /**
     * Gets or sets the type of the column data.
     */
    export enum ColumnDataType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }


}
