/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ItemsTypeRequest class is needed because we are passing a list of cart items via Post Methods, and we want to send those parameters in a body.
 */
export type Webcom_API_RD_Cart_ItemsTypeRequest = {
    /**
     * Gets or sets the cart items.
     */
    CartItems?: Array<number>;
    /**
     * Set items to ItemType type
     */
    ItemType?: Webcom_API_RD_Cart_ItemsTypeRequest.ItemType;
    /**
     * FilterQuery get set
     */
    ItemsFilterQuery?: Array<Array<string>>;
}

export namespace Webcom_API_RD_Cart_ItemsTypeRequest {

    /**
     * Set items to ItemType type
     */
    export enum ItemType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }


}
