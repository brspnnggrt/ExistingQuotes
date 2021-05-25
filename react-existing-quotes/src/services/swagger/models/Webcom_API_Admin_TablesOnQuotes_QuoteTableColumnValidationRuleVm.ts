/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Quote table column validations representation
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnValidationRuleVm = {
    /**
     * Gets or set validation identifier
     */
    Id?: number;
    /**
     * Gets or sets column identifier
     */
    ColumnId?: number;
    /**
     * Gets or sets column validation type
     */
    ValidationType?: Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnValidationRuleVm.ValidationType;
    /**
     * Gets or sets column validation value to compare with
     */
    ValidationCompareValue?: string;
    /**
     * Gets or sets column validation message
     */
    ValidationMessage?: string;
    /**
     * Gets or sets active flag for validation
     */
    Active?: boolean;
}

export namespace Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnValidationRuleVm {

    /**
     * Gets or sets column validation type
     */
    export enum ValidationType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }


}
