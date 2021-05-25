/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Quote layout item view-model
 */
export type Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemVM = {
    /**
     * Item id
     */
    Id?: number;
    /**
     * Item name
     */
    Name?: string;
    /**
     * Quote layout item type:StandardColumn = 1, CustomColumn = 2, KeyAttribute = 3 (used only on quote v1), Section = 4, Subscription = 5 (used only on quote v2 with subscription billing integration)
     */
    Type?: Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemVM.Type;
}

export namespace Webcom_API_Public_QuoteLayout_VM_QuoteLayoutItemVM {

    /**
     * Quote layout item type:StandardColumn = 1, CustomColumn = 2, KeyAttribute = 3 (used only on quote v1), Section = 4, Subscription = 5 (used only on quote v2 with subscription billing integration)
     */
    export enum Type {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
