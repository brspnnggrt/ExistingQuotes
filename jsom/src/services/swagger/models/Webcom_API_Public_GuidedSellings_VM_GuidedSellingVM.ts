/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_GuidedSellings_GuidedSellingAttributeTriggerVM } from './Webcom_API_Public_GuidedSellings_GuidedSellingAttributeTriggerVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingFromulaRuleVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingFromulaRuleVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingPermissionVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingPermissionVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingSimpleRuleVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingSimpleRuleVM';
import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingTabVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingTabVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Products_VM_ProductCategoryVM } from './Webcom_API_SetupSPA_Products_VM_ProductCategoryVM';

/**
 * Guided Selling VM
 */
export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM = {
    /**
     * Guided Selling id
     */
    Id?: number;
    /**
     * Guided Selling systemId
     */
    SystemId?: string;
    /**
     * Guided Selling name
     */
    Name?: string;
    /**
     * Guided Selling description
     */
    Description?: string;
    /**
     * Guided Selling created By
     */
    CreatedBy?: string;
    /**
     * Guided Selling created On
     */
    CreatedOn?: string;
    /**
     * Guided Selling modified By
     */
    ModifiedBy?: string;
    /**
     * Guided Selling modified On
     */
    ModifiedOn?: string;
    /**
     * Is Guided Selling Active
     */
    IsActive?: boolean;
    /**
     * Guided Selling start date
     */
    StartDate?: string;
    /**
     * Guided Selling end date
     */
    EndDate?: string;
    /**
     * Number of pricing groups of Guided Selling search results
     */
    NumberOfPricingGroups?: number;
    /**
     * Guided Selling search results split group typeOptions:ByProductPrice = 0ByProductCount = 1
     */
    SplitGroupType?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM.SplitGroupType;
    /**
     * Is Guided Selling visible to everyone
     */
    IsVisibleToEveryOne?: boolean;
    /**
     * Guided Selling image
     */
    Image?: string;
    /**
     * Guided Selling image alt text
     */
    ImageAltText?: string;
    /**
     * Guided Selling logic:AND = 0, OR = 1
     */
    Logic?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM.Logic;
    /**
     * Guided Selling permissions
     */
    Permissions?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingPermissionVM>;
    /**
     * Guided Selling product categories
     */
    ProductCategories?: Array<Webcom_API_SetupSPA_Products_VM_ProductCategoryVM>;
    /**
     * Guided Selling attributes
     */
    Attributes?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeVM>;
    /**
     * Guided Selling formula rules
     */
    FormulaRules?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingFromulaRuleVM>;
    /**
     * Guided Selling simple rules
     */
    SimpleRules?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingSimpleRuleVM>;
    /**
     * Guided Selling attribute triggers
     */
    AttributeTriggers?: Array<Webcom_API_Public_GuidedSellings_GuidedSellingAttributeTriggerVM>;
    /**
     * Guided Selling scripts
     */
    Scripts?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptVM>;
    Tabs?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingTabVM>;
    Templates?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    ResponsiveTemplates?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
}

export namespace Webcom_API_Public_GuidedSellings_VM_GuidedSellingVM {

    /**
     * Guided Selling search results split group typeOptions:ByProductPrice = 0ByProductCount = 1
     */
    export enum SplitGroupType {
        '_0' = 0,
        '_1' = 1,
    }

    /**
     * Guided Selling logic:AND = 0, OR = 1
     */
    export enum Logic {
        '_0' = 0,
        '_1' = 1,
    }


}
