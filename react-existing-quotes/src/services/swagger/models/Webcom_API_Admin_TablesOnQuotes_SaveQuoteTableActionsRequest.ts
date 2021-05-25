/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm';

/**
 * Represents request for saving quote table actions
 */
export type Webcom_API_Admin_TablesOnQuotes_SaveQuoteTableActionsRequest = {
    /**
     * Gets or sets the table identifier.
     */
    TableId?: number;
    /**
     * Gets or sets the actions.
     */
    Actions?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm>;
}
