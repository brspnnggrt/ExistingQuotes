/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataModel_Model_ConfigurationTreeItem } from './DataModel_Model_ConfigurationTreeItem';
import type { Webcom_API_RD_Configurator_ABSSummaryVM } from './Webcom_API_RD_Configurator_ABSSummaryVM';
import type { Webcom_API_RD_Configurator_AttributeVM } from './Webcom_API_RD_Configurator_AttributeVM';
import type { Webcom_API_RD_Configurator_BreadcrumbsVM } from './Webcom_API_RD_Configurator_BreadcrumbsVM';
import type { Webcom_API_RD_Configurator_ConfigurationImportVM } from './Webcom_API_RD_Configurator_ConfigurationImportVM';
import type { Webcom_API_RD_Configurator_ProductFavoritesInfoVM } from './Webcom_API_RD_Configurator_ProductFavoritesInfoVM';
import type { Webcom_API_RD_Configurator_ResponderVM } from './Webcom_API_RD_Configurator_ResponderVM';
import type { Webcom_API_RD_Configurator_TabVM } from './Webcom_API_RD_Configurator_TabVM';
import type { Webcom_API_RD_Configurator_VM_Attribute_HiddenAttributeVm } from './Webcom_API_RD_Configurator_VM_Attribute_HiddenAttributeVm';

/**
 * Class ConfiguratorResponse.
 */
export type Webcom_API_RD_Configurator_ConfiguratorResponse = {
    /**
     * Gets or sets the product identifier.
     */
    ProductId?: number;
    /**
     * Gets or sets the product name.
     */
    ProductName?: string;
    /**
     * Gets or sets the product system id.
     */
    ProductSystemId?: string;
    /**
     * Gets or sets a value indicating whether favorites are enabled.
     */
    FavoritesEnabled?: boolean;
    /**
     * Gets or sets the product favorites information.
     */
    ProductFavoritesInfo?: Webcom_API_RD_Configurator_ProductFavoritesInfoVM;
    /**
     * Gets or sets a value indicating whether [cart exists].
     */
    CartExists?: boolean;
    /**
     * Gets or sets the success message.
     */
    SuccessMessage?: string;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
    /**
     * Gets or sets the value.
     */
    Value?: string;
    /**
     * Gets or sets the standard attribute code.
     */
    StdAttrCode?: number;
    /**
     * Gets or sets the currency sign.
     */
    CurrencySign?: string;
    /**
     * Gets or sets the currency ISO code.
     */
    CurrencyISOCode?: string;
    /**
     * Gets or sets a value indicating whether this instance can add to quote.
     */
    CanAddToQuote?: boolean;
    /**
     * Returns whether changes on product configuration can be cancelled
     */
    CanCancel?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is nested product.
     */
    IsNestedProduct?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is abs.
     */
    IsABS?: boolean;
    /**
     * Gets or sets the name of the parent product.
     */
    ParentProductName?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Configurator.ConfiguratorResponse} is completed.
     */
    Completed?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has incomplete children.
     */
    HasIncompleteChildren?: boolean;
    /**
     * Gets or sets the incomplete messages.
     */
    IncompleteMessages?: Array<string>;
    /**
     * Gets or sets the incomplete attributes.
     */
    IncompleteAttributes?: Array<string>;
    /**
     * Gets or sets the invalid messages
     */
    InvalidMessages?: Array<string>;
    /**
     * Gets or sets the incomplete messages.
     */
    ConfigurationTree?: DataModel_Model_ConfigurationTreeItem;
    /**
     * Gets or sets the failed validations.
     */
    FailedValidations?: Array<string>;
    /**
     * Gets or sets the product error messages.
     */
    ErrorMessages?: Array<string>;
    /**
     * Gets or sets the abs.
     */
    ABS?: Webcom_API_RD_Configurator_ABSSummaryVM;
    /**
     * Gets or sets the responder.
     */
    Responder?: Webcom_API_RD_Configurator_ResponderVM;
    /**
     * Gets or sets the breadcrumbs.
     */
    Breadcrumbs?: Webcom_API_RD_Configurator_BreadcrumbsVM;
    /**
     * Gets or sets the tabs.
     */
    Tabs?: Array<Webcom_API_RD_Configurator_TabVM>;
    /**
     * Gets or sets the attributes.
     */
    Attributes?: Array<Webcom_API_RD_Configurator_AttributeVM>;
    /**
     * Gets or sets the configuration import.
     */
    ConfigurationImport?: Webcom_API_RD_Configurator_ConfigurationImportVM;
    /**
     * Gets or sets the name of the current template.
     */
    CurrentTemplateName?: string;
    /**
     * Gets or sets the number of current quote main items.
     */
    MainItemsNumber?: number;
    /**
     * Gets or sets a value indicating whether this instance has unique identifier.
     */
    HasGuid?: boolean;
    /**
     * Gets or sets the hidden attributes.
     */
    HiddenAttributes?: Array<Webcom_API_RD_Configurator_VM_Attribute_HiddenAttributeVm>;
    /**
     * Gets or sets the conflict messages.
     */
    ConflictMessages?: Array<string>;
    /**
     * Gets or sets flag to indicate if Product has been loaded into current Product Logic
     */
    ProductNotLoaded?: boolean;
    /**
     * Gets or sets flag to indicate if the conflicts tab in responder shoud be shown of not (used for VC integration)
     */
    ShouldShowConflictsTab?: boolean;
    /**
     * Number of conflicts for the current configuration to be shown in responder (used for VC integration)
     */
    NumberOfConflicts?: number;
    /**
     * Gets whether or not this is a configurable SAP product
     */
    IsSapConfigurableProduct?: boolean;
}
