/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represent request for executing quote table custom action
 */
export type Webcom_API_RD_Cart_ExecuteQuoteTableCustomActionRequest = {
    /**
     * Gets or sets the tab identifier.
     */
    TabId?: number;
    /**
     * Gets or sets a value indicating whether action should return only custom fields and quote tables
     */
    Reduced?: boolean;
    /**
     * Gets or sets the quote table identifier.
     */
    QuoteTableId?: number;
    /**
     * Gets or sets the action identifier.
     */
    ActionId?: number;
    /**
     * FilterQuery get set
     */
    ItemsFilterQuery?: Array<Array<string>>;
}
