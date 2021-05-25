/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_DirtyQuoteTableVm } from './Webcom_API_RD_Cart_DirtyQuoteTableVm';

/**
 * Class CartActionRequest.
 */
export type Webcom_API_RD_Cart_CartActionRequest = {
    /**
     * Gets or sets the group to activate.
     */
    GroupToActivate?: string;
    /**
     * Gets or sets the dirty cells.
     */
    DirtyCells?: Record<string, string>;
    /**
     * Gets or sets the dirty custom fields.
     */
    DirtyCustomFields?: Record<string, string>;
    /**
     * Gets or sets the dirty quote tables.
     */
    DirtyQuoteTables?: Array<Webcom_API_RD_Cart_DirtyQuoteTableVm>;
    /**
     * Gets or sets the action comment.
     */
    ActionComment?: string;
    /**
     * FilterQuery get set
     */
    ItemsFilterQuery?: Array<Array<string>>;
}
