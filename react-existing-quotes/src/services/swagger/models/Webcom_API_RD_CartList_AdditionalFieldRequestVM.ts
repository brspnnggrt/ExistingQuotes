/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class AdditionalFieldRequestVM.
 */
export type Webcom_API_RD_CartList_AdditionalFieldRequestVM = {
    /**
     * Gets or sets a value indicating whether this instance has range.
     */
    HasRange?: boolean;
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the type of the operation.
     */
    OperationType?: Webcom_API_RD_CartList_AdditionalFieldRequestVM.OperationType;
    /**
     * Gets or sets the value.
     */
    Value?: string;
    /**
     * Gets or sets the value lower.
     */
    ValueLower?: string;
    /**
     * Gets or sets the value upper.
     */
    ValueUpper?: string;
}

export namespace Webcom_API_RD_CartList_AdditionalFieldRequestVM {

    /**
     * Gets or sets the type of the operation.
     */
    export enum OperationType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_-1' = -1,
    }


}
