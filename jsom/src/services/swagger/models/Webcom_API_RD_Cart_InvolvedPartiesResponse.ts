/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_RD_Cart_AdditionalDiscountVM } from './Webcom_API_RD_Cart_AdditionalDiscountVM';
import type { Webcom_API_RD_Cart_ApprovalVM } from './Webcom_API_RD_Cart_ApprovalVM';
import type { Webcom_API_RD_Cart_CartActionsVM } from './Webcom_API_RD_Cart_CartActionsVM';
import type { Webcom_API_RD_Cart_CartActionVM } from './Webcom_API_RD_Cart_CartActionVM';
import type { Webcom_API_RD_Cart_CartInitDataVM } from './Webcom_API_RD_Cart_CartInitDataVM';
import type { Webcom_API_RD_Cart_CartLineItemVM } from './Webcom_API_RD_Cart_CartLineItemVM';
import type { Webcom_API_RD_Cart_CartTabsVM } from './Webcom_API_RD_Cart_CartTabsVM';
import type { Webcom_API_RD_Cart_CustomFieldVM } from './Webcom_API_RD_Cart_CustomFieldVM';
import type { Webcom_API_RD_Cart_EditableCellVM } from './Webcom_API_RD_Cart_EditableCellVM';
import type { Webcom_API_RD_Cart_InvalidAutocompleteEntitiesVM } from './Webcom_API_RD_Cart_InvalidAutocompleteEntitiesVM';
import type { Webcom_API_RD_Cart_MathCellVM } from './Webcom_API_RD_Cart_MathCellVM';
import type { Webcom_API_RD_Cart_MessageVM } from './Webcom_API_RD_Cart_MessageVM';
import type { Webcom_API_RD_Cart_ProductTypeRowVM } from './Webcom_API_RD_Cart_ProductTypeRowVM';
import type { Webcom_API_RD_Cart_PromotionsCartInfoVM } from './Webcom_API_RD_Cart_PromotionsCartInfoVM';
import type { Webcom_API_RD_Cart_QuoteTableVm } from './Webcom_API_RD_Cart_QuoteTableVm';
import type { Webcom_API_RD_Cart_RowVM } from './Webcom_API_RD_Cart_RowVM';
import type { Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm } from './Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm';

/**
 * InvolvedPartiesResponse
 */
export type Webcom_API_RD_Cart_InvolvedPartiesResponse = {
    /**
     * Gets or sets the owner identifier.
     */
    OwnerId?: number;
    /**
     * Gets or sets the quote identifier.
     */
    QuoteId?: number;
    /**
     * Gets or sets the quote number.
     */
    QuoteNumber?: string;
    /**
     * Involved parties
     */
    InvolvedParties?: Array<Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm>;
    /**
     * Gets or sets the WorkflowContext client data that will be sent to the client.
     */
    WorkflowClientData?: any;
    /**
     * Gets or sets the active editable group.
     */
    ActiveEditableGroup?: number;
    /**
     * Gets or sets the main items number.
     */
    MainItemsNumber?: number;
    /**
     * Gets or sets the additional discounts.
     */
    AdditionalDiscounts?: Array<Webcom_API_RD_Cart_AdditionalDiscountVM>;
    /**
     * Gets or sets a value indicating whether [are additional discounts editable].
     */
    AreAdditionalDiscountsEditable?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can redo.
     */
    CanRedo?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can undo.
     */
    CanUndo?: boolean;
    /**
     * Gets or sets the cart comment.
     */
    CartComment?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the currency sign.
     */
    CurrencySign?: string;
    /**
     * Gets or sets the custom fields.
     */
    CustomFields?: Array<Webcom_API_RD_Cart_CustomFieldVM>;
    /**
     * Gets or sets a value indicating whether [diplay add product section].
     */
    DiplayAddProdSection?: boolean;
    /**
     * Gets or sets the cart tables.
     */
    QuoteTables?: Array<Webcom_API_RD_Cart_QuoteTableVm>;
    /**
     * Gets or sets pricebooks.
     */
    Pricebooks?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the date modified.
     */
    DateModified?: string;
    /**
     * Gets or sets a value indicating whether this instance has updatable products.
     */
    HasUpdatableProducts?: boolean;
    /**
     * Gets or sets the initialize data.
     */
    InitData?: Webcom_API_RD_Cart_CartInitDataVM;
    /**
     * Gets or sets the items.
     */
    Items?: Array<Webcom_API_RD_Cart_CartLineItemVM>;
    /**
     * Gets or sets the market identifier.
     */
    MarketId?: number;
    /**
     * Gets or sets the pricebook identifier.
     */
    PricebookId?: number;
    /**
     * Gets or sets pricebook availability.
     */
    IsPricebookAvailable?: boolean;
    /**
     * Gets or sets the message.
     */
    Message?: Webcom_API_RD_Cart_MessageVM;
    /**
     * Gets or sets the message on landing.
     */
    MessageOnLanding?: Webcom_API_RD_Cart_MessageVM;
    /**
     * Gets or sets the scripting messages.
     */
    ScriptingMessages?: Array<string>;
    /**
     * Gets or sets the error information.
     */
    ErrorInfo?: string;
    /**
     * Gets or sets the success information.
     */
    SuccessInfo?: string;
    /**
     * Gets or sets the non primary actions.
     */
    NonPrimaryActions?: Array<Webcom_API_RD_Cart_CartActionVM>;
    /**
     * Gets or sets the order status identifier.
     */
    OrderStatusId?: number;
    /**
     * Gets or sets the order statuses.
     */
    OrderStatuses?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the primary actions.
     */
    PrimaryActions?: Array<Webcom_API_RD_Cart_CartActionVM>;
    /**
     * Gets or sets the product types.
     */
    ProductTypes?: Array<Webcom_API_RD_Cart_ProductTypeRowVM>;
    /**
     * Gets or sets the product types total.
     */
    ProductTypesTotal?: Webcom_API_RD_Cart_RowVM;
    /**
     * Gets or sets the shipping option identifier.
     */
    ShippingOptionId?: number;
    /**
     * Gets or sets the sub totals with discounts.
     */
    SubTotalsWithDiscounts?: Array<Webcom_API_RD_Cart_RowVM>;
    /**
     * Gets or sets the total shipping cost.
     */
    TotalShippingCost?: Webcom_API_RD_Cart_EditableCellVM;
    /**
     * Gets or sets the total state tax.
     */
    TotalStateTax?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the MRC total state tax.
     */
    MRCTotalStateTax?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the NRC total state tax.
     */
    NRCTotalStateTax?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the total vat.
     */
    TotalVat?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the MRC total vat.
     */
    MRCTotalVat?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the NRC total vat.
     */
    NRCTotalVat?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the totals.
     */
    Totals?: Array<Webcom_API_RD_Cart_RowVM>;
    /**
     * Gets or sets the approval.
     */
    Approval?: Webcom_API_RD_Cart_ApprovalVM;
    /**
     * Gets or sets the total amount.
     */
    TotalAmount?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the MRC total amount.
     */
    MRCTotalAmount?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Gets or sets the promotions cart information.
     */
    PromotionsCartInfo?: Webcom_API_RD_Cart_PromotionsCartInfoVM;
    /**
     * Gets or sets the total number of all items in cart.
     */
    TotalItems?: number;
    /**
     * Gets or sets the cart item to highlight.
     */
    CartItemToHighlight?: number;
    /**
     * Gets or sets the tabs data.
     */
    TabsData?: Webcom_API_RD_Cart_CartTabsVM;
    /**
     * Gets or sets invalid autocomplete entities to display as a warning message on the cart page
     */
    InvalidAutocompleteEntities?: Webcom_API_RD_Cart_InvalidAutocompleteEntitiesVM;
    /**
     * Gets or sets the effective date.
     */
    EffectiveDate?: string;
    /**
     * Gets or sets the visitor id.
     */
    VisitorId?: number;
    /**
     * Gets externalid
     */
    ExternalId?: string;
    /**
     * Gets Is Primary On Opportunity
     */
    IsPrimaryOnOpportunity?: boolean;
    /**
     * Indicates if pricing procedure field should be visible
     */
    IsPricingProcedureVisible?: boolean;
    /**
     * Cart's pricing procedure
     */
    PricingProcedure?: string;
    /**
     * Cart's document pricing procedure
     */
    DocumentPricingProcedure?: string;
    /**
     * Cart's customer pricing procedure
     */
    CustomerPricingProcedure?: string;
    /**
     * Gets or sets the estimated contract total value.
     */
    EstimatedContractTotalValue?: Webcom_API_RD_Cart_MathCellVM;
    /**
     * Cart actions view model.
     */
    CartActionsModel?: Webcom_API_RD_Cart_CartActionsVM;
}
