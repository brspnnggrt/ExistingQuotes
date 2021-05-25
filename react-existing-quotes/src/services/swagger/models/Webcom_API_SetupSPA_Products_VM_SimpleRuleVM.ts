/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_SetupSPA_Products_VM_SimpleRuleVM = {
    DependanceId?: number;
    ProductId?: number;
    DependantPaId?: number;
    DependantPavIds?: Array<number>;
    ConditioningPavIds?: Array<number>;
    RuleType?: Webcom_API_SetupSPA_Products_VM_SimpleRuleVM.RuleType;
    CreatedDate?: string;
    ModifiedDate?: string;
    Id?: number;
    Name?: string;
    Description?: string;
    Rank?: number;
    CreatedBy?: string;
    ModifiedBy?: string;
    StartDate?: string;
    EndDate?: string;
}

export namespace Webcom_API_SetupSPA_Products_VM_SimpleRuleVM {

    export enum RuleType {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }


}
