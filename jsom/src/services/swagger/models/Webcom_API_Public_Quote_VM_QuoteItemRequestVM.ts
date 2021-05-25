/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_VM_QuoteCommentVM } from './Webcom_API_Public_Quote_VM_QuoteCommentVM';

/**
 * Quote Item Request
 */
export type Webcom_API_Public_Quote_VM_QuoteItemRequestVM = {
    /**
     * Gets or sets the quantity.
     */
    Quantity?: number;
    /**
     * Gets or sets the part number.
     */
    PartNumber?: string;
    /**
     * Gets or sets the product system identifier.
     */
    ProductSystemId?: string;
    /**
     * Gets or sets the configuration identifier.
     */
    ConfigurationId?: string;
    /**
     * Gets or sets the external item identifier.
     */
    ExternalItemId?: string;
    /**
     * Quote Item Comments
     */
    Comments?: Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>;
}
