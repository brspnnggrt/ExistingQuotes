/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_Quote_CustomerVM } from './Webcom_API_Public_Quote_CustomerVM';
import type { Webcom_API_Public_Quote_CustomFieldVM } from './Webcom_API_Public_Quote_CustomFieldVM';
import type { Webcom_API_Public_Quote_VM_InvolvedPartyVM } from './Webcom_API_Public_Quote_VM_InvolvedPartyVM';
import type { Webcom_API_Public_Quote_VM_PriceVm } from './Webcom_API_Public_Quote_VM_PriceVm';
import type { Webcom_API_Public_Quote_VM_PricingConditionVM } from './Webcom_API_Public_Quote_VM_PricingConditionVM';
import type { Webcom_API_Public_Quote_VM_QuoteCommentVM } from './Webcom_API_Public_Quote_VM_QuoteCommentVM';

/**
 * Quote Response
 */
export type Webcom_API_Public_Quote_VM_QuoteVMResponse = {
    /**
     * The quote identifier.
     */
    QuoteId?: number;
    /**
     * Gets or sets the comment.
     */
    Comment?: string;
    /**
     * Gets or sets the date created.
     */
    DateCreated?: string;
    /**
     * Gets or sets the date modified.
     */
    DateModified?: string;
    /**
     * Gets or sets the date ordered.
     */
    DateOrdered?: string;
    /**
     * Gets or sets the date closed.
     */
    DateClosed?: string;
    /**
     * Gets or sets the effective date.
     */
    EffectiveDate?: string;
    /**
     * Gets or sets the external identifier.
     */
    ExternalId?: string;
    /**
     * Gets or sets the external system identifier.
     */
    ExternalSystemId?: string;
    /**
     * Gets or sets the market code.
     */
    MarketCode?: string;
    /**
     * Gets or sets the currency code.
     */
    CurrencyCode?: string;
    /**
     * Gets or sets the market identifier.
     */
    MarketId?: number;
    /**
     * Gets or sets the origin.
     */
    Origin?: string;
    /**
     * Gets or sets the owner identifier.
     */
    OwnerId?: number;
    /**
     * Gets or sets the price book identifier.
     */
    PriceBookId?: number;
    /**
     * Gets or sets the distribution channel.
     */
    DistributionChannel?: string;
    /**
     * Gets or sets the status identifier.
     */
    StatusId?: number;
    /**
     * Gets or sets the name of the status.
     */
    StatusName?: string;
    /**
     * Gets or sets the quote number.
     */
    QuoteNumber?: string;
    /**
     * Gets or sets the name of the revision.
     */
    RevisionNumber?: string;
    /**
     * Get or set opportunity identifier
     */
    OpportunityId?: string;
    /**
     * Get or set opporutnity name
     */
    OpportunityName?: string;
    /**
     * Get or set opportunity to be primary
     */
    IsPrimary?: boolean;
    /**
     * Get or set errror message
     */
    ErrorMessage?: string;
    /**
     * Gets or sets the customers.
     */
    Customers?: Array<Webcom_API_Public_Quote_CustomerVM>;
    /**
     * Gets or sets the comments.
     */
    Comments?: Array<Webcom_API_Public_Quote_VM_QuoteCommentVM>;
    /**
     * Gets or sets the involved parties.
     */
    InvolvedParties?: Array<Webcom_API_Public_Quote_VM_InvolvedPartyVM>;
    /**
     * Gets or sets the quote tables.
     */
    QuoteTables?: Array<string>;
    /**
     * Gets or sets the custom fields.
     */
    CustomFields?: Array<Webcom_API_Public_Quote_CustomFieldVM>;
    /**
     * Gets or sets the total amount.
     */
    TotalAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total MRC amount.
     */
    TotalMrcAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total list price.
     */
    TotalListPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total MRC list price.
     */
    TotalMRCListPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total net price.
     */
    TotalNetPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total MRC net price.
     */
    TotalMRCNetPrice?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the cost.
     */
    Cost?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total MRC cost.
     */
    TotalMRCCost?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total product discount amount.
     */
    TotalProductDiscountAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the total MRC product discount amount.
     */
    TotalMRCProductDiscountAmount?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the average product discount percent.
     */
    AverageProductDiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the average MRC product discount percent.
     */
    AverageMRCProductDiscountPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the average gross margin percent.
     */
    AverageGrossMarginPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the average MRC gross margin percent.
     */
    AverageMRCGrossMarginPercent?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the order id
     */
    OrderId?: string;
    /**
     * Gets or sets the Recurring Net Price Monthly.
     */
    RecurringNetPriceMonthly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring Net Price Yearly.
     */
    RecurringNetPriceYearly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring Cost Monthly.
     */
    RecurringCostMonthly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring Cost Yearly.
     */
    RecurringCostYearly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring Discount Amount Monthly.
     */
    RecurringDiscountAmountMonthly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring Discount Amount Yearly.
     */
    RecurringDiscountAmountYearly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring List Price Monthly.
     */
    RecurringListPriceMonthly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Recurring List Price Yearly.
     */
    RecurringListPriceYearly?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the Estimated Contract Total Value.
     */
    EstimatedContractTotalValue?: Webcom_API_Public_Quote_VM_PriceVm;
    /**
     * Gets or sets the pricing conditions.
     */
    PricingConditions?: Array<Webcom_API_Public_Quote_VM_PricingConditionVM>;
    /**
     * Get or set the division
     */
    Division?: string;
}
