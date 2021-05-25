/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Quote table column definition.
 */
export type Webcom_API_Public_Quote_ColumnDefinition = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the type of the data.
     */
    Type?: Webcom_API_Public_Quote_ColumnDefinition.Type;
}

export namespace Webcom_API_Public_Quote_ColumnDefinition {

    /**
     * Gets or sets the type of the data.
     */
    export enum Type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }


}
