/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class EditableCellVM.
 */
export type Webcom_API_RD_Cart_EditableCellVM = {
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Cart.EditableCellVM} is editable.
     */
    Editable?: boolean;
    /**
     * Gets or sets the identifier.
     */
    Id?: string;
    /**
     * Gets or sets the value.
     */
    Value?: string;
    /**
     * Gets or sets the type of the cell.
     */
    CellType?: Webcom_API_RD_Cart_EditableCellVM.CellType;
    /**
     * Gets or sets the type of the value.
     */
    ValueType?: Webcom_API_RD_Cart_EditableCellVM.ValueType;
}

export namespace Webcom_API_RD_Cart_EditableCellVM {

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
