/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class CartItemsRequest.
 */
export type Webcom_API_RD_Cart_CartItemsRequest = {
    /**
     * Gets or sets the page number.
     */
    PageNumber?: number;
    /**
     * Gets or sets the page size.
     */
    PageSize?: number;
    /**
     * Gets or sets the list of query criteria.
     */
    FilterQuery?: Array<Array<string>>;
    /**
     * The cart item that should be loaded in data page.If supplied pageNumber is ignored.System will also expand some items if required so that requested item is visible///
     */
    CartItem?: number;
}
