/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class MathCellVM.
 */
export type Webcom_API_RD_Cart_MathCellVM = {
    /**
     * Gets or sets the editable group.
     */
    EditableGroup?: number;
    /**
     * Gets or sets the identifier.
     */
    Id?: string;
    /**
     * Gets or sets a value indicating whether this instance is multiline.
     */
    IsMultiline?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is text.
     */
    IsText?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is date.
     */
    IsDate?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is attribute.
     */
    IsAttribute?: boolean;
    IsSubscriptionAttribute?: boolean;
    /**
     * Gets or sets the value.
     */
    Value?: string;
    /**
     * Gets or sets the computed value.
     */
    ComputedValue?: string;
    /**
     * Gets or sets standard attribute code for the reference attribute used in cell.
     */
    StdAttrCode?: number;
    /**
     * Gets or sets attribute value id used in attribute cell.
     */
    ValueId?: number;
    /**
     * Gets or sets default placeholder for autocomplete attribute cell.
     */
    Placeholder?: string;
    /**
     * Gets or sets a value indicating whether this instance is cost.
     */
    IsCost?: boolean;
    /**
     * Gets or sets the type of the cell.
     */
    CellType?: Webcom_API_RD_Cart_MathCellVM.CellType;
    /**
     * Gets or sets the type of the value.
     */
    ValueType?: Webcom_API_RD_Cart_MathCellVM.ValueType;
}

export namespace Webcom_API_RD_Cart_MathCellVM {

    /**
     * Gets or sets the type of the cell.
     */
    export enum CellType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }

    /**
     * Gets or sets the type of the value.
     */
    export enum ValueType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
