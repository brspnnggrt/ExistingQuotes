/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Calculation definition view-model
 */
export type Webcom_API_Public_Scripts_CustomCalculation_VM_CalculationDefinitionVM = {
    /**
     * Custom calculation id
     */
    Id?: number;
    /**
     * Custom calculation name
     */
    Name: string;
    /**
     * Is custom calculation active
     */
    IsActive?: boolean;
    /**
     * Calculation row type:Generic item = 0 (used only on old quote), ProductType = 1, CartTotal = 2, Sections = 3 (used only on quote v2), CartItem = 4 (used only on quote v2), SectionsTotal = 5 (used only on quote v2), SubscriptionItem = 6 (used only on quote v2)
     */
    RowType?: Webcom_API_Public_Scripts_CustomCalculation_VM_CalculationDefinitionVM.RowType;
    /**
     * Custom calculation description
     */
    Description?: string;
    /**
     * Username of user who modified the custom calculation
     */
    ModifiedBy?: string;
    /**
     * Date and time when the custom calculation was modified (ISO format)
     */
    ModifiedOn?: string;
    /**
     * Custom calculation script code
     */
    Script?: string;
    /**
     * Unique system id
     */
    SystemId: string;
}

export namespace Webcom_API_Public_Scripts_CustomCalculation_VM_CalculationDefinitionVM {

    /**
     * Calculation row type:Generic item = 0 (used only on old quote), ProductType = 1, CartTotal = 2, Sections = 3 (used only on quote v2), CartItem = 4 (used only on quote v2), SectionsTotal = 5 (used only on quote v2), SubscriptionItem = 6 (used only on quote v2)
     */
    export enum RowType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
    }


}
