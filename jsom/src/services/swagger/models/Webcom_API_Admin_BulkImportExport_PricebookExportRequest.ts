/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_Admin_BulkImportExport_PricebookExportRequest = {
    PricebookCode?: string;
    PartNumbers?: Array<string>;
    PriceCodes?: Array<string>;
    Prices?: Array<string>;
    Costs?: Array<string>;
    RecurringPrices?: Array<string>;
    RecurringCosts?: Array<string>;
    RecurringPricePeriod?: string;
    RecurringCostPeriod?: string;
    Descriptions?: Array<string>;
    ValidFrom?: string;
    ValidUntil?: string;
    Columns?: Array<string>;
}
