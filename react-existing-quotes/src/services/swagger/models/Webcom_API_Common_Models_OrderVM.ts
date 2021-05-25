/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents order
 */
export type Webcom_API_Common_Models_OrderVM = {
    /**
     * Field name used for sorting
     */
    Name?: string;
    /**
     * Sorting direction (asc/desc)
     */
    Direction?: Webcom_API_Common_Models_OrderVM.Direction;
}

export namespace Webcom_API_Common_Models_OrderVM {

    /**
     * Sorting direction (asc/desc)
     */
    export enum Direction {
        '_0' = 0,
        '_1' = 1,
    }


}
