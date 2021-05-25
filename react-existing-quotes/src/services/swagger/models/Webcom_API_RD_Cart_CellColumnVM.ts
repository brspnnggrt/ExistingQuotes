/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class CellColumnVM.
 */
export type Webcom_API_RD_Cart_CellColumnVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the column name.
     */
    Name?: string;
    /**
     * Gets or sets the header label.
     */
    HeaderLabel?: string;
    /**
     * Gets or sets a value indicating whether this instance is price.
     */
    IsPrice?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is standard column
     */
    Type?: Webcom_API_RD_Cart_CellColumnVM.Type;
}

export namespace Webcom_API_RD_Cart_CellColumnVM {

    /**
     * Gets or sets a value indicating whether this instance is standard column
     */
    export enum Type {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
