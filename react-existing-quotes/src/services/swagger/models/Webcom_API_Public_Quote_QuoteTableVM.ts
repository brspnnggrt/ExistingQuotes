/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_ColumnDefinition } from './Webcom_API_Public_Quote_ColumnDefinition';
import type { Webcom_API_Public_Quote_Row } from './Webcom_API_Public_Quote_Row';

/**
 * A single quote table.
 */
export type Webcom_API_Public_Quote_QuoteTableVM = {
    /**
     * Gets or sets the quote table name.
     */
    Name?: string;
    /**
     * Gets or sets the column definitions.
     */
    Columns?: Array<Webcom_API_Public_Quote_ColumnDefinition>;
    /**
     * Gets or sets the rows.
     */
    Rows?: Array<Webcom_API_Public_Quote_Row>;
}
