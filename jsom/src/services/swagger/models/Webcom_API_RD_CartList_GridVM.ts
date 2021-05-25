/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_ColumnVM } from './Webcom_API_RD_CartList_ColumnVM';
import type { Webcom_API_RD_CartList_PagerVM } from './Webcom_API_RD_CartList_PagerVM';
import type { Webcom_API_RD_CartList_RowVM } from './Webcom_API_RD_CartList_RowVM';

/**
 * Class GridVM.
 */
export type Webcom_API_RD_CartList_GridVM = {
    /**
     * Gets or sets the columns.
     */
    Columns?: Array<Webcom_API_RD_CartList_ColumnVM>;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_RD_CartList_PagerVM;
    /**
     * Gets or sets the rows.
     */
    Rows?: Array<Webcom_API_RD_CartList_RowVM>;
}
