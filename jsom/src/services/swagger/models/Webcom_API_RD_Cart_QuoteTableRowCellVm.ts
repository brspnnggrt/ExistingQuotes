/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents Cart table row cell
 */
export type Webcom_API_RD_Cart_QuoteTableRowCellVm = {
    /**
     * Gets or sets the column identifier.
     */
    ColumnId?: number;
    /**
     * Gets or sets the value.
     */
    Value?: any;
    /**
     * Gets or sets the access level.
     */
    AccessLevel?: Webcom_API_RD_Cart_QuoteTableRowCellVm.AccessLevel;
    /**
     * Gets or sets a value indicating whether this cell is editable.
     */
    IsEditable?: boolean;
    /**
     * Gets or sets a value indicating whether this cell is hidden.
     */
    IsHidden?: boolean;
    /**
     * Gets or sets broken validations for column cell
     */
    BrokenValidations?: Array<number>;
    /**
     * Gets or sets validation meesage for column cell
     */
    ValidationMessage?: string;
}

export namespace Webcom_API_RD_Cart_QuoteTableRowCellVm {

    /**
     * Gets or sets the access level.
     */
    export enum AccessLevel {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
