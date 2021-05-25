/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_ProductVersionSimpleVM } from './Webcom_API_SetupSPA_Products_VM_ProductVersionSimpleVM';

/**
 * Product for sending to client
 */
export type Webcom_API_SetupSPA_Products_VM_ProductsTableRowVM = {
    /**
     * Identitifier
     */
    Id?: number;
    /**
     * Name
     */
    Name?: string;
    /**
     * Part number
     */
    PartNumber?: string;
    /**
     * Product type
     */
    Type?: string;
    /**
     * Category
     */
    Category?: string;
    /**
     * Permissions
     */
    Permissions?: string;
    /**
     * Display Type
     */
    DisplayType?: string;
    /**
     * Date of last modification
     */
    ModifiedDate?: string;
    /**
     * Is active
     */
    Active?: boolean;
    /**
     * System Id
     */
    SystemId?: string;
    /**
     * Description
     */
    Description?: string;
    /**
     * Is product simple
     */
    IsSimple?: boolean;
    /**
     * Is product actually product alias
     */
    IsProductAlias?: boolean;
    /**
     * Is SAP product
     */
    IsSapProduct?: boolean;
    /**
     * Is Subscrption
     */
    IsSubscription?: boolean;
    /**
     * Alias Parent Product Id
     */
    AliasParentProductId?: number;
    /**
     * Is product that uses Subscription Billing pricing
     */
    IsSbProduct?: boolean;
    /**
     * Product version info
     */
    Version?: Webcom_API_SetupSPA_Products_VM_ProductVersionSimpleVM;
}
