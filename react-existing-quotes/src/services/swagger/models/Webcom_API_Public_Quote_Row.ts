/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_Cell } from './Webcom_API_Public_Quote_Cell';

/**
 * A single quote table row.
 */
export type Webcom_API_Public_Quote_Row = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the cells.
     */
    Cells?: Array<Webcom_API_Public_Quote_Cell>;
}
