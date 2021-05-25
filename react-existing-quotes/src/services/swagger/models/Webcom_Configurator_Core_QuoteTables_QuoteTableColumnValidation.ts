/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_Configurator_Core_QuoteTables_QuoteTableColumnValidation = {
    Id?: number;
    ColumnId?: number;
    ValidationType?: Webcom_Configurator_Core_QuoteTables_QuoteTableColumnValidation.ValidationType;
    ValidationCompareValue?: string;
    ValidationMessage?: string;
    Active?: boolean;
    readonly EntityIdentificator?: string;
    readonly EntityName?: string;
}

export namespace Webcom_Configurator_Core_QuoteTables_QuoteTableColumnValidation {

    export enum ValidationType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }


}
