/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Guided Selling Permission
 */
export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingPermissionVM = {
    /**
     * Permission Group id
     */
    Id?: number;
    /**
     * Permission Group name
     */
    Name?: string;
    /**
     * Permission Group typeOptions:ManuallyCreated = 0UserType = 1Company = 2Market = 3Multibranding = 4Users = 5
     */
    Type?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingPermissionVM.Type;
}

export namespace Webcom_API_Public_GuidedSellings_VM_GuidedSellingPermissionVM {

    /**
     * Permission Group typeOptions:ManuallyCreated = 0UserType = 1Company = 2Market = 3Multibranding = 4Users = 5
     */
    export enum Type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
