/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_CustomFieldVM } from './Webcom_API_Public_Quote_CustomFieldVM';
import type { Webcom_API_Public_Quote_FixedAndRecurringPricingVM } from './Webcom_API_Public_Quote_FixedAndRecurringPricingVM';
import type { Webcom_API_Public_Quote_SubscriptionDetailsVM } from './Webcom_API_Public_Quote_SubscriptionDetailsVM';
import type { Webcom_API_Public_Quote_VM_QuoteCommentVM } from './Webcom_API_Public_Quote_VM_QuoteCommentVM';

/**
 * Data of Quote Item
 */
export type Webcom_API_Public_Quote_QuoteItemVM = {
    /**
     * Get or set Item Id
     */
    ItemId?: number;
    /**
     * Get or set item raning number in the quote
     */
    ItemNumber?: number;
    /**
     * Get or set Parent Item Id
     */
    ParentItemId?: number;
    /**
     * Get or set parent item raning number in the quote
     */
    ParentItemNumber?: number;
    /**
     * Get or set Rolled Up Item Number. This is item ID that users see on a quote, which takes into account items hierarchy. For example: 1.1.1.
     */
    RolledUpItemNumber?: string;
    /**
     * Gets or sets item ID from an external system where the item is sourced from
     */
    ExternalItemId?: string;
    /**
     * Get or set Date Added
     */
    DateAdded?: string;
    /**
     * Get or set Description
     */
    Description?: string;
    /**
     * Get or set Description Long
     */
    DescriptionLong?: string;
    /**
     * Get or set Is Line Item
     */
    IsLineItem?: boolean;
    /**
     * Get or set Is Main Item
     */
    IsMainItem?: boolean;
    /**
     * Get or set Is Optional item
     */
    IsOptional?: boolean;
    /**
     * Get or set Is Variant
     */
    IsVariant?: boolean;
    /**
     * Get or set Is Alternative
     */
    IsAlternative?: boolean;
    /**
     * Get or set Is Subscription Item
     */
    IsSubscriptionItem?: boolean;
    /**
     * Get or set Item Type
     */
    ItemClassificationType?: string;
    /**
     * Get or set Item Type
     */
    ItemType?: string;
    /**
     * Get or set Quantity
     */
    Quantity?: string;
    /**
     * Get or set Unit of Measure code
     */
    UnitOfMeasure?: string;
    /**
     * Get or set Part Number
     */
    PartNumber?: string;
    /**
     * Get or set Product System Id
     */
    ProductSystemId?: string;
    /**
     * Get or set Product Id
     */
    ProductId?: number;
    /**
     * Get or set Product Name
     */
    ProductName?: string;
    /**
     * Get or set Product Name Translated
     */
    ProductNameTranslated?: string;
    /**
     * Get or set Product Type Id
     */
    ProductTypeId?: number;
    /**
     * Get or set Product Type Name
     */
    ProductTypeName?: string;
    /**
     * Get or set Product Type Name Translated
     */
    ProductTypeNameTranslated?: string;
    /**
     * Get or set item comment
     */
    Comment?: string;
    /**
     * Returns team collaboration comments
     */
    CollaborationComments?: Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>;
    /**
     * Get or set Pricing Details
     */
    PricingDetails?: Webcom_API_Public_Quote_FixedAndRecurringPricingVM;
    /**
     * Get or set Subscription Details
     */
    SubscriptionDetails?: Webcom_API_Public_Quote_SubscriptionDetailsVM;
    /**
     * Get or set quote item Custom Fields
     */
    CustomFields?: Array<Webcom_API_Public_Quote_CustomFieldVM>;
}
