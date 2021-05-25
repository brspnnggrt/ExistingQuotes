/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents filter
 */
export type Webcom_API_Common_Models_FilterVM = {
    /**
     * Filter name
     */
    Name?: string;
    /**
     * Filter value
     */
    Value?: string;
    /**
     * Filter value to
     */
    ValueTo?: string;
    /**
     * Filter operator (bigger, smaller, equal), used on dates and similar
     */
    Operator?: Webcom_API_Common_Models_FilterVM.Operator;
}

export namespace Webcom_API_Common_Models_FilterVM {

    /**
     * Filter operator (bigger, smaller, equal), used on dates and similar
     */
    export enum Operator {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
    }


}
