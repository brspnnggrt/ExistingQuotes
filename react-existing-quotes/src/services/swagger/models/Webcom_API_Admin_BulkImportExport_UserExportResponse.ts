/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * UserExportResponse class
 */
export type Webcom_API_Admin_BulkImportExport_UserExportResponse = {
    /**
     * Gets or sets the filter fields.
     */
    FilterFields?: Array<string>;
    /**
     * Gets or sets the operators.
     */
    Operators?: Array<Webcom_API_IdNamePair>;
}
