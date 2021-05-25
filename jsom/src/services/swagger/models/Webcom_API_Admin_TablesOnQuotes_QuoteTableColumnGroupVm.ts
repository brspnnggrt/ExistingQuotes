/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm';

/**
 * Quote table column group representation
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the rank.
     */
    Rank?: number;
    /**
     * Gets or sets the Label.
     */
    Label?: string;
    /**
     * List of quote table columns
     */
    Columns?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnVm>;
    /**
     * List of quote table columns
     */
    Groups?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm>;
}
