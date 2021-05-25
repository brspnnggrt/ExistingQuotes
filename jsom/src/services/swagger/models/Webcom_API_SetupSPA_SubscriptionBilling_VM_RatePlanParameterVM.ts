/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanParameterVM = {
    /**
     * RatePlanParameter Code
     */
    Code?: string;
    /**
     * RatePlanParameter Value
     */
    Value?: string;
    /**
     * RatePlanParameter InputValue
     */
    InputValue?: string;
    /**
     * RatePlanParameter Type.
     */
    Type?: Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanParameterVM.Type;
    /**
     * RatePlanParameter PercentageOperation.
     */
    PercentageOperation?: Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanParameterVM.PercentageOperation;
}

export namespace Webcom_API_SetupSPA_SubscriptionBilling_VM_RatePlanParameterVM {

    /**
     * RatePlanParameter Type.
     */
    export enum Type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
    }

    /**
     * RatePlanParameter PercentageOperation.
     */
    export enum PercentageOperation {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
