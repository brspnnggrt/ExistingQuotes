/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary } from './Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary';

export type Webcom_API_SetupSPA_Users_VM_UserTypeVM = {
    Id?: number;
    SystemId?: string;
    Name?: string;
    Description?: string;
    StartCategoryName?: string;
    StartCategoryId?: number;
    StartPage?: string;
    DefaultCategoryViewId?: number;
    AllowIncomplete?: boolean;
    HasSearch?: boolean;
    CustomerRequired?: boolean;
    ShowPrices?: boolean;
    CartTypeXslt?: string;
    CheckoutXslt?: string;
    PlaceOrderXslt?: string;
    MyQuoteXslt?: string;
    WaitingApprovalXslt?: string;
    OtherQuotesXslt?: string;
    PreviewStylesXslt?: string;
    LandingProductSystemId?: string;
    UserEntryStartPage?: boolean;
    NotVisibleViewIds?: Array<number>;
    DisplayTreeNavigation?: boolean;
    CustomTemplates?: Array<Webcom_Configurator_Core_Customizations_CustomResponsiveTemplatesSummary>;
}
