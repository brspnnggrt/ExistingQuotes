/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_AlternativeProductPricingVM } from './Webcom_API_SetupSPA_Products_VM_AlternativeProductPricingVM';
import type { Webcom_API_SetupSPA_Products_VM_CodeMatchVM } from './Webcom_API_SetupSPA_Products_VM_CodeMatchVM';
import type { Webcom_API_SetupSPA_Products_VM_ProductCategoryVM } from './Webcom_API_SetupSPA_Products_VM_ProductCategoryVM';
import type { Webcom_API_SetupSPA_Products_VM_ProductLayoutVM } from './Webcom_API_SetupSPA_Products_VM_ProductLayoutVM';
import type { Webcom_API_SetupSPA_Products_VM_ShippingCostVM } from './Webcom_API_SetupSPA_Products_VM_ShippingCostVM';
import type { Webcom_API_SetupSPA_Products_VM_SubscriptionBillingInfoVM } from './Webcom_API_SetupSPA_Products_VM_SubscriptionBillingInfoVM';

export type Webcom_API_SetupSPA_Products_VM_ProductVM = {
    SubscriptionBillingInfo?: Webcom_API_SetupSPA_Products_VM_SubscriptionBillingInfoVM;
    Id?: number;
    SystemId?: string;
    Name?: string;
    DisplayTypeId?: Webcom_API_SetupSPA_Products_VM_ProductVM.DisplayTypeId;
    ConfigurationTypeId?: Webcom_API_SetupSPA_Products_VM_ProductVM.ConfigurationTypeId;
    ProductTypeId?: number;
    CatalogCode?: string;
    UnitOfMeasure?: string;
    Description?: string;
    Categories?: Array<Webcom_API_SetupSPA_Products_VM_ProductCategoryVM>;
    CreatedDate?: string;
    ModifiedDate?: string;
    CreatedBy?: string;
    ModifiedBy?: string;
    ProductVersion?: string;
    Image?: string;
    AlternativeText?: string;
    IsProductUsingAlternativePricing?: boolean;
    DisplayTypePricingId?: Webcom_API_SetupSPA_Products_VM_ProductVM.DisplayTypePricingId;
    PricingCode?: string;
    Price?: number;
    CostBuilder?: string;
    PriceBuilder?: string;
    BaseRecurringPrice?: number;
    RecurringPricePeriodFormula?: string;
    RecurringPriceFormula?: string;
    RecurringCostPeriodFormula?: string;
    RecurringCostFormula?: string;
    UseCustomPricing?: boolean;
    AlternativePricing?: Webcom_API_SetupSPA_Products_VM_AlternativeProductPricingVM;
    Active?: boolean;
    VisibleToEveryone?: boolean;
    PermissionSelected?: Array<number>;
    PermissionStartDate?: string;
    PermissionEndDate?: string;
    EndStatus?: Webcom_API_SetupSPA_Products_VM_ProductVM.EndStatus;
    ReplacementProductSystemId?: string;
    ReplacementProductName?: string;
    ExternalId?: string;
    UPC?: string;
    MPN?: string;
    Inventory?: number;
    LeadTime?: string;
    FamilyCode?: string;
    Weight?: string;
    ImageLarge?: string;
    DescriptionLong?: string;
    ExecuteRulesOnce?: boolean;
    AllowConfigurationImport?: boolean;
    Script?: string;
    ConfigurationTemplate?: string;
    UpdateAsset?: boolean;
    AlwaysAllowRenewal?: boolean;
    IsSapProduct?: boolean;
    IsSubscription?: boolean;
    RatePlanTemplateId?: string;
    DescriptionBuilder?: string;
    UserCanEnterQuantity?: string;
    SkipRelatedProductsLoading?: boolean;
    DefaultItemType?: string;
    UserCanChangeItemType?: string;
    Value3?: string;
    Shippings?: Array<Webcom_API_SetupSPA_Products_VM_ShippingCostVM>;
    Layout?: Webcom_API_SetupSPA_Products_VM_ProductLayoutVM;
    CodeMatching?: Array<Webcom_API_SetupSPA_Products_VM_CodeMatchVM>;
}

export namespace Webcom_API_SetupSPA_Products_VM_ProductVM {

    export enum DisplayTypeId {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }

    export enum ConfigurationTypeId {
        '_0' = 0,
        '_1' = 1,
    }

    export enum DisplayTypePricingId {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }

    export enum EndStatus {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
