/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Attributes_VM_AttributeValueVM } from './Webcom_API_Public_Attributes_VM_AttributeValueVM';
import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Products_VM_AttributeValueProductRefVM } from './Webcom_API_SetupSPA_Products_VM_AttributeValueProductRefVM';

export type Webcom_API_SetupSPA_Products_VM_AttributeValueInstanceVM = {
    Id?: number;
    DisplaytoUser?: boolean;
    /**
     * from attributevalue
     */
    Display?: string;
    ListAsLineItemWhenPriceIsZero?: boolean;
    SortRank?: number;
    Price?: number;
    DefaultQuantity?: number;
    PriceBuilder?: string;
    RecurringPriceBuilder?: string;
    CatalogCode?: string;
    CostBuilder?: string;
    RecurringCostBuilder?: string;
    DescriptionBuilder?: string;
    PricingCode?: string;
    UsePricebook?: boolean;
    Preselected?: boolean;
    RefProduct?: Webcom_API_SetupSPA_Products_VM_AttributeValueProductRefVM;
    ImageOn?: string;
    ImageOff?: string;
    ImageOnAltText?: string;
    ImageOffAltText?: string;
    Value?: Webcom_API_Public_Attributes_VM_AttributeValueVM;
    VariantConditionKey?: string;
    ABSCategories?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
}
