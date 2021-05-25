/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Used Guided Selling Simple Rule
 */
export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingSimpleRuleVM = {
    /**
     * Guided Selling Simple Rule Id
     */
    DefinitionId?: number;
    /**
     * Used Guided Selling Attribute Id
     */
    UsedGuidedSellingAttributeId?: number;
    /**
     * Used Guided Selling Attribute Value Ids
     */
    UsedGuidedSellingAttributeValueIds?: Array<number>;
    /**
     * Used Condition Guided Selling Attribute Value Ids
     */
    UsedConditionGuidedSellingAttributeValueIds?: Array<number>;
    /**
     * Guided Selling Simple Rule TypeOptions:Disallow = 1Allow = 2ResetAndSelect = 3Select = 4
     */
    RuleType?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingSimpleRuleVM.RuleType;
    /**
     * Created On
     */
    CreatedOn?: string;
    /**
     * Modified On
     */
    ModifiedOn?: string;
    Id?: number;
    Name?: string;
    Description?: string;
    Rank?: number;
    CreatedBy?: string;
    ModifiedBy?: string;
    StartDate?: string;
    EndDate?: string;
}

export namespace Webcom_API_Public_GuidedSellings_VM_GuidedSellingSimpleRuleVM {

    /**
     * Guided Selling Simple Rule TypeOptions:Disallow = 1Allow = 2ResetAndSelect = 3Select = 4
     */
    export enum RuleType {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }


}
