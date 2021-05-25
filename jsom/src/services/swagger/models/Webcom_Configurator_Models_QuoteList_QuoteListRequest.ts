/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_Configurator_Models_QuoteList_QuoteListRequest = {
    SearchString?: string;
    Columns?: Array<string>;
    Criteria?: Array<Array<string>>;
    Skip?: number;
    Take?: number;
    OrderBy?: Array<string>;
    UsePaging?: boolean;
    TabId?: number;
    LoadDelegatedApproversQuotes?: boolean;
}
