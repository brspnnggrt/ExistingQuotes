/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Tenant VM
 */
export type Webcom_API_SetupSPA_Tenant_VM_TenantVM = {
    /**
     * Unit of measurement
     */
    UnitOfMeasurement?: string;
    /**
     * Default Country from AppParam (DEFAULT_COUNTRY)
     */
    DefaultCountry?: string;
    /**
     * Default dictionary from AppParam (SEL_DEFAULT_DICT)
     */
    DefaultDictionary?: number;
    /**
     * Hide Obsolete Features
     */
    HideObsoleteFeatures?: boolean;
    /**
     * Display simple rules data table on products
     */
    DisplayTableForSimpleProductRules?: boolean;
    /**
     * Default managing parent id
     */
    DefaultManagingParentId?: number;
    /**
     * Default ordering parent id
     */
    DefaultOrderingParentId?: number;
    /**
     * List of allowed image extensions
     */
    AllowedImageExtensions?: Array<string>;
    /**
     * List of allowed product configuration extensions
     */
    AllowedProductConfigurationExtensions?: Array<string>;
    /**
     * Are segregation settings applied
     */
    SegregationSettingsApplied?: boolean;
    /**
     * Is ERP integration enabled
     */
    IsErpConnected?: boolean;
    /**
     * Should use recurring price
     */
    UseRecurringPrice?: boolean;
    /**
     * Use Deal structure
     */
    UseDealStructure?: boolean;
    /**
     * Can Add/Edit Change Set
     */
    CanAddEditChangeSet?: boolean;
    /**
     * Gets or sets a value indicating whether [use old user import export].
     */
    ShowOldUserImportExport?: boolean;
    /**
     * Gets or sets value indicating weather editing right is preferred
     */
    IsEditingRightPreferred?: boolean;
    /**
     * Gets or sets value indicating weather user can set purpose on certificate
     */
    CanSetPurposeOnCertificate?: boolean;
    /**
     * Gets or sets number of decimal places used for formatting values in SAP integrations
     */
    CpiNumberOfDecimalPlaces?: number;
    /**
     * Gets max number of search columns for autocomplete attribute
     */
    AutocompleteMaxSearchColumns?: number;
    /**
     * Gets max number of display columns for autocomplete attribute
     */
    AutocompleteMaxDisplayColumns?: number;
    /**
     * Gets or sets a value indicating whether product list will only contain active products
     */
    ShowOnlyActiveProducts?: boolean;
    /**
     * Gets or sets the password expiration days
     */
    PasswordExpirationDays?: number;
    /**
     * Gets or sets the password validation expression
     */
    PasswordValidationExpression?: string;
    PricebookAuditTrailStatus?: Webcom_API_SetupSPA_Tenant_VM_TenantVM.PricebookAuditTrailStatus;
    /**
     * Gets or sets UseNewQuoteEngine
     */
    UseNewQuoteEngine?: boolean;
    /**
     * Gets or sets USE_TEMPORARY_PASSWORD
     */
    AvailableTemporaryPassword?: boolean;
    /**
     * Gets or sets SAP_SB_ENABLED
     */
    IsSapSBEnabled?: boolean;
    /**
     * Gets or sets SAP_CPS_IsConnected
     */
    IsCpsConnected?: boolean;
    /**
     * Gets or sets the default billing cycle attribute system identifier.
     */
    DefaultBillingCycleAttributeSystemId?: string;
    /**
     * Gets or sets the default contract duration attribute system identifier.
     */
    DefaultContractDurationAttributeSystemId?: string;
    /**
     * Gets or sets USE_RESPONSIVE_GUI
     */
    UseResponsiveGui?: boolean;
    /**
     * Gets or sets RESPONSIVE_GUI_PER_USER
     */
    ResponsiveGuiPerUser?: boolean;
    /**
     * Gets or sets show custom pricing recurring period fields
     */
    ShowCustomPricingRecurringPeriodFields?: boolean;
    /**
     * Gets or sets ShouldProductsUseAlternativePricing
     */
    ShouldProductsUseAlternativePricing?: boolean;
    /**
     * Gets or sets whether products should use alternative pricing
     */
    UseBusinessPartnerConcept?: boolean;
    /**
     * Gets or sets IsBusinessPartnersEnabled
     */
    IsBusinessPartnersEnabled?: boolean;
    /**
     * Gets or sets IsBusinessPartnersEnabled
     */
    BusinessPartnersUseTwoLetterAbbreviation?: boolean;
    IsCPSDocumentPricingUsed?: boolean;
}

export namespace Webcom_API_SetupSPA_Tenant_VM_TenantVM {

    export enum PricebookAuditTrailStatus {
        '_0' = 0,
        '_1' = 1,
    }


}
