/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_CustomerVM } from './Webcom_API_Public_Quote_CustomerVM';
import type { Webcom_API_Public_Quote_CustomFieldVM } from './Webcom_API_Public_Quote_CustomFieldVM';
import type { Webcom_API_Public_Quote_OpportunityReferenceVM } from './Webcom_API_Public_Quote_OpportunityReferenceVM';
import type { Webcom_API_Public_Quote_OrderStatusVM } from './Webcom_API_Public_Quote_OrderStatusVM';
import type { Webcom_API_Public_Quote_OwnerVM } from './Webcom_API_Public_Quote_OwnerVM';
import type { Webcom_API_Public_Quote_QuoteItemVM } from './Webcom_API_Public_Quote_QuoteItemVM';
import type { Webcom_API_Public_Quote_QuoteTableVM } from './Webcom_API_Public_Quote_QuoteTableVM';
import type { Webcom_API_Public_Quote_SalesAreaVM } from './Webcom_API_Public_Quote_SalesAreaVM';
import type { Webcom_API_Public_Quote_SelectedMarketVM } from './Webcom_API_Public_Quote_SelectedMarketVM';
import type { Webcom_API_Public_Quote_VM_QuoteCommentVM } from './Webcom_API_Public_Quote_VM_QuoteCommentVM';

/**
 * Quote data
 */
export type Webcom_API_Public_Quote_QuoteVM = {
    /**
     * Gets or sets Quote Composite Number
     */
    QuoteNumber?: string;
    /**
     * Gets or sets Quote ID
     */
    QuoteId?: number;
    /**
     * Gets or sets Revision Number
     */
    RevisionNumber?: string;
    /**
     * Gets or sets Date Created as string in ISO date and time format
     */
    DateCreated?: string;
    /**
     * Gets or sets Date Modified as string in ISO date and time format
     */
    DateModified?: string;
    /**
     * Gets or sets Date Ordered as string in ISO date and time format
     */
    DateOrdered?: string;
    /**
     * Gets or sets Date Closed as string in ISO date and time format
     */
    DateClosed?: string;
    /**
     * Gets or sets Effective Date as string in ISO date and time format
     */
    EffectiveDate?: string;
    /**
     * Gets or sets Origin
     */
    Origin?: string;
    /**
     * Gets or sets ExternalSystemId
     */
    ExternalSystemId?: string;
    /**
     * Gets or sets quote External Id
     */
    ExternalId?: string;
    /**
     * Gets or sets sales Order Id
     */
    OrderId?: string;
    /**
     * Gets or sets Pricing Procedure Name
     */
    PricingProcedureName?: string;
    /**
     * Gets or sets Country ISO Code
     */
    CountryISOCode?: string;
    /**
     * Gets or sets Document Type Code
     */
    DocumentTypeCode?: string;
    /**
     * Returns quote Comment
     */
    Comment?: string;
    /**
     * Returns team collaboration comments
     */
    CollaborationComments?: Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>;
    /**
     * Get or set Total Shipping Cost
     */
    TotalShippingCost?: string;
    /**
     * Get or set Total Net Price
     */
    TotalNetPrice?: string;
    /**
     * Get or set Total Amount
     */
    TotalAmount?: string;
    /**
     * Gets or sets Owner data
     */
    Owner?: Webcom_API_Public_Quote_OwnerVM;
    /**
     * Gets or sets Order Status
     */
    OrderStatus?: Webcom_API_Public_Quote_OrderStatusVM;
    /**
     * Get or set Selected Market
     */
    SelectedMarket?: Webcom_API_Public_Quote_SelectedMarketVM;
    /**
     * Gets or sets Sales Area
     */
    SalesArea?: Webcom_API_Public_Quote_SalesAreaVM;
    /**
     * Gets or sets Opportunity Reference data
     */
    OpportunityReference?: Webcom_API_Public_Quote_OpportunityReferenceVM;
    /**
     * Get or set quote Custom Fields
     */
    CustomFields?: Array<Webcom_API_Public_Quote_CustomFieldVM>;
    /**
     * Get all quote items
     */
    Items?: Array<Webcom_API_Public_Quote_QuoteItemVM>;
    /**
     * Get quote Customers
     */
    Customers?: Array<Webcom_API_Public_Quote_CustomerVM>;
    QuoteTables?: Array<Webcom_API_Public_Quote_QuoteTableVM>;
}
