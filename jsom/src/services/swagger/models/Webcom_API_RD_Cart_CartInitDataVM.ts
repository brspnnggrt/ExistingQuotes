/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';
import type { Webcom_API_RD_Cart_CartTabsVM } from './Webcom_API_RD_Cart_CartTabsVM';
import type { Webcom_API_RD_Cart_CartUsageVM } from './Webcom_API_RD_Cart_CartUsageVM';
import type { Webcom_API_RD_Cart_CellColumnVM } from './Webcom_API_RD_Cart_CellColumnVM';
import type { Webcom_API_RD_Cart_ProposalVM } from './Webcom_API_RD_Cart_ProposalVM';

/**
 * Class CartInitDataVM.
 */
export type Webcom_API_RD_Cart_CartInitDataVM = {
    /**
     * Gets or sets a value indicating whether favorites are enabled.
     */
    FavoritesEnabled?: boolean;
    /**
     * Gets or sets the allow to share with company users.
     */
    AllowToShareWithCompanyUsers?: boolean;
    /**
     * Gets or sets the allow to share with all users.
     */
    AllowToShareWithAllUsers?: boolean;
    /**
     * Gets or sets automatically save cart comment
     */
    ShouldCartCommentBeAutomaticallySaved?: boolean;
    /**
     * Gets or sets the owner identifier.
     */
    OwnerId?: number;
    /**
     * Gets or sets the cart identifier.
     */
    CartId?: number;
    /**
     * Gets or sets the owner identifier crypted.
     */
    OwnerIdCrypted?: string;
    /**
     * Gets or sets the cart identifier crypted.
     */
    CartIdCrypted?: string;
    /**
     * Gets or sets the tabs data.
     */
    TabsData?: Webcom_API_RD_Cart_CartTabsVM;
    /**
     * Gets or sets a value indicating whether this instance can reorder line items.
     */
    CanReorderLineItems?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can reorder main items.
     */
    CanReorderMainItems?: boolean;
    /**
     * Gets or sets the part number editable group.
     */
    PartNumberEditableGroup?: number;
    /**
     * Gets or sets the cart composite number.
     */
    CartCompositeNumber?: string;
    /**
     * Gets or sets the bill to customer company.
     */
    BillToCustomerCompany?: string;
    /**
     * Gets or sets the date created.
     */
    DateCreated?: string;
    /**
     * Gets or sets order ID.
     */
    OrderId?: string;
    /**
     * Gets or sets ExternalId
     */
    ExternalId?: string;
    /**
     * Gets or sets a value indicating whether [display images for cart actions].
     */
    DisplayImagesForCartActions?: boolean;
    /**
     * Gets or sets the item columns.
     */
    ItemColumns?: Array<Webcom_API_RD_Cart_CellColumnVM>;
    /**
     * Gets or sets the markets.
     */
    Markets?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the product type columns.
     */
    ProductTypeColumns?: Array<Webcom_API_RD_Cart_CellColumnVM>;
    /**
     * Gets or sets the revision number.
     */
    RevisionNumber?: string;
    /**
     * Gets or sets the shipping options.
     */
    ShippingOptions?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the sub total with discount columns.
     */
    SubTotalWithDiscountColumns?: Array<Webcom_API_RD_Cart_CellColumnVM>;
    /**
     * Gets or sets the total columns.
     */
    TotalColumns?: Array<Webcom_API_RD_Cart_CellColumnVM>;
    /**
     * Gets or sets a value indicating whether [use recurring price and cost].
     */
    UseRecurringPriceAndCost?: boolean;
    /**
     * Gets or sets the prompt for upgrade message.
     */
    PromptForUpgradeMessage?: string;
    /**
     * Gets or sets the cart usage.
     */
    CartUsage?: Array<Webcom_API_RD_Cart_CartUsageVM>;
    /**
     * Gets or sets the proposal.
     */
    Proposal?: Webcom_API_RD_Cart_ProposalVM;
    /**
     * Gets or sets the sections.
     */
    Sections?: Array<string>;
    /**
     * Gets or sets a value indicating whether Cart Items should be expanded by default.
     */
    ExpandItemsByDefault?: boolean;
    /**
     * Gets the opportunity identifier. In order to link CPQ quote and opportunity use LinkToOpportunity method.
     */
    OpportunityId?: string;
    /**
     * Gets or sets a value indicating whether [show quick configuration].
     */
    ShowQuickConfig?: boolean;
    /**
     * Gets or sets a value indicating whether main items support alternative and variant item type.
     */
    AreVariantAndAlternativeAllowd?: boolean;
    /**
     * Gets or sets a value indicating whether Cart items are paged.
     */
    AreItemsPaged?: boolean;
    /**
     * Gets or sets the items page size.
     */
    ItemsPageSize?: number;
    /**
     * Gets or sets a value indicating whether item type is editable
     */
    IsItemTypeEditable?: boolean;
    /**
     * Gets or sets a value for Is Primary On Opportunity
     */
    IsPrimaryOnOpportunity?: boolean;
    /**
     * Gets or sets a value for Opportunity Name
     */
    OpportunityName?: string;
    /**
     * Gets or sets a value for Origin
     */
    Origin?: string;
    /**
     * IsInitializeData
     */
    IsInitializeData?: boolean;
    /**
     * ErrorMessage
     */
    ErrorMessage?: string;
}
