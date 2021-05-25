/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class PartialOrderItemVM.
 */
export type Webcom_API_RD_Cart_PartialOrderItemVM = {
    /**
     * Gets or sets a value indicating whether row's selection is editable.
     */
    IsSelectedEditable?: boolean;
    /**
     * Gets or sets the cart item.
     */
    CartItem?: number;
    /**
     * Gets or sets the rolled up cart item.
     */
    RolledUpCartItem?: string;
    /**
     * Gets or sets the items part number.
     */
    PartNumber?: string;
    /**
     * Gets or sets the items net price.
     */
    NetPrice?: string;
    /**
     * Gets or sets the items quantity negotiated in master quote.
     */
    NegotiatedQtyInMasterQuote?: number;
    /**
     * Gets or sets the items quantity ordered in previous partial orders.
     */
    QtyOrderedInPreviousPartialOrders?: number;
    /**
     * Gets or sets the new items quantity.
     */
    NewQty?: number;
    /**
     * Gets or sets a value indicating whether items quantity is editable.
     */
    IsQtyEditable?: boolean;
    /**
     * Gets or sets the partial order line items.
     */
    PartialOrderLineItems?: Array<Webcom_API_RD_Cart_PartialOrderItemVM>;
}
