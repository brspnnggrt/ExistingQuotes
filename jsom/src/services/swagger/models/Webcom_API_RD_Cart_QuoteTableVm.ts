/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_RD_Cart_QuoteTableColumnVm } from './Webcom_API_RD_Cart_QuoteTableColumnVm';
import type { Webcom_API_RD_Cart_QuoteTableGroupVm } from './Webcom_API_RD_Cart_QuoteTableGroupVm';
import type { Webcom_API_RD_Cart_QuoteTableRowVm } from './Webcom_API_RD_Cart_QuoteTableRowVm';
import type { Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableColumnFilterVM } from './Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableColumnFilterVM';

/**
 * Represent quote table view model
 */
export type Webcom_API_RD_Cart_QuoteTableVm = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets the rank.
     */
    Rank?: number;
    /**
     * Gets or sets the rows.
     */
    Rows?: Array<Webcom_API_RD_Cart_QuoteTableRowVm>;
    /**
     * Gets or sets the columns.
     */
    Columns?: Array<Webcom_API_RD_Cart_QuoteTableColumnVm>;
    /**
     * Gets or sets the columns.
     */
    Groups?: Array<Webcom_API_RD_Cart_QuoteTableGroupVm>;
    /**
     * Gets or sets a value indicating whether this instance can add row.
     */
    CanAddRow?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can copy row.
     */
    CanCopyRow?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can delete row.
     */
    CanDeleteRow?: boolean;
    /**
     * Gets or sets the number of rows.
     */
    NumberOfRows?: number;
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the size of the page.
     */
    PageSize?: number;
    /**
     * Gets or sets a value indicating whether this table is editable.
     */
    IsEditable?: boolean;
    /**
     * Gets or sets the custom actions.
     */
    CustomActions?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the list of violated validation messages
     */
    ViolatedValidations?: Array<string>;
    /**
     * Gets or sets a value indicating whether search is enabled for this table
     */
    readonly EnableSearch?: boolean;
    /**
     * List of filters applied to quote table<seealso cref= />
     */
    Filters?: Array<Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableColumnFilterVM>;
    /**
     * Gets or sets a HasValidationsFailed flag whether is executed validations for this table
     */
    HasValidationsFailed?: boolean;
    /**
     * Get or sets if the table excel file upload is allowed.
     */
    AllowExcelUpload?: boolean;
}
