/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_Public_Attributes_VM_AttributeValueVM = {
    Id?: number;
    ProductId?: number;
    RefProductDisplayName?: string;
    ValueCode?: string;
    Value?: string;
    SystemId?: string;
    Rank?: number;
    Unit?: Webcom_API_Public_Attributes_VM_AttributeValueVM.Unit;
    BillingPeriod?: Webcom_API_Public_Attributes_VM_AttributeValueVM.BillingPeriod;
}

export namespace Webcom_API_Public_Attributes_VM_AttributeValueVM {

    export enum Unit {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }

    export enum BillingPeriod {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
    }


}
