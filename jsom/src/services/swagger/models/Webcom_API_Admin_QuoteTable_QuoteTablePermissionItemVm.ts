/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents quote table permission item
 */
export type Webcom_API_Admin_QuoteTable_QuoteTablePermissionItemVm = {
    /**
     * Gets or sets quote table permission id
     */
    Id?: number;
    /**
     * Gets or sets quote table id
     */
    TableId?: number;
    /**
     * Gets or sets quote table name
     */
    TableName?: string;
    /**
     * Gets or sets quote table permission
     */
    Permission?: string;
    /**
     * Gets or sets selected statuses
     */
    Statuses?: Array<number>;
    /**
     * Gets or sets list of selected permissions groups
     */
    PermissionGroups?: Array<number>;
}
