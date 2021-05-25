/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SAP_CPQ_Quote_Common_DTO_QuoteItemCfDefinitionDto = {
    Name?: string;
    Label?: string;
    Type?: SAP_CPQ_Quote_Common_DTO_QuoteItemCfDefinitionDto.Type;
    StdAttrCode?: number;
    DecimalPlaces?: number;
}

export namespace SAP_CPQ_Quote_Common_DTO_QuoteItemCfDefinitionDto {

    export enum Type {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
