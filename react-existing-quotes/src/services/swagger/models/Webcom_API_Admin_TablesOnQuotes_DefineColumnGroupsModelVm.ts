/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm';

/**
 * Define column group model response
 */
export type Webcom_API_Admin_TablesOnQuotes_DefineColumnGroupsModelVm = {
    /**
     * Gets or sets the identifier.
     */
    Id?: string;
    /**
     * List of quote table Groups
     */
    Groups?: Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableColumnGroupVm>;
    /**
     * Gets or sets the error message
     */
    TableId?: number;
    /**
     * Gets or sets the error message
     */
    ParentGroupId?: string;
    /**
     * Gets or sets the error message
     */
    ErrorMessage?: string;
}
