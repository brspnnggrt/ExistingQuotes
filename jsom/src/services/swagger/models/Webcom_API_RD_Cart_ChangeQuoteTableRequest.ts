/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents request to change quote table row
 */
export type Webcom_API_RD_Cart_ChangeQuoteTableRequest = {
    /**
     * Gets or sets the row identifier.
     */
    RowId?: number;
    /**
     * Gets or sets the quote table identifier.
     */
    QuoteTableId?: number;
    /**
     * Gets or sets a value indicating whether service should return only custom fields and quote tables.
     */
    ReturnReduced?: boolean;
    /**
     * FilterQuery get set
     */
    ItemsFilterQuery?: Array<Array<string>>;
}
