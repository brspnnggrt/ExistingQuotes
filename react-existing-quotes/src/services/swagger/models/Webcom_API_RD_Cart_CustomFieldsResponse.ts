/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartActionsVM } from './Webcom_API_RD_Cart_CartActionsVM';
import type { Webcom_API_RD_Cart_CartTabsVM } from './Webcom_API_RD_Cart_CartTabsVM';
import type { Webcom_API_RD_Cart_CustomFieldVM } from './Webcom_API_RD_Cart_CustomFieldVM';
import type { Webcom_API_RD_Cart_QuoteTableVm } from './Webcom_API_RD_Cart_QuoteTableVm';

/**
 * Class CustomFieldsResponse.
 */
export type Webcom_API_RD_Cart_CustomFieldsResponse = {
    /**
     * Gets or sets the quote tables.
     */
    QuoteTables?: Array<Webcom_API_RD_Cart_QuoteTableVm>;
    /**
     * Gets or sets the WorkflowContext client data that will be sent to the client.
     */
    WorkflowClientData?: any;
    /**
     * Gets or sets the tabs data.
     */
    TabsData?: Webcom_API_RD_Cart_CartTabsVM;
    /**
     * Gets or sets a value indicating whether [save on tab change].
     */
    SaveOnTabChange?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is in view mode.
     */
    IsInViewMode?: boolean;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string;
    /**
     * Gets or sets the custom fields.
     */
    CustomFields?: Array<Webcom_API_RD_Cart_CustomFieldVM>;
    /**
     * Gets or sets the currency sign for current quote selected market.
     */
    CurrencySign?: string;
    /**
     * Gets or sets a value indicating whether save button should be available
     */
    IsSaveButtonAvailable?: boolean;
    /**
     * Cart actions view model.
     */
    CartActionsModel?: Webcom_API_RD_Cart_CartActionsVM;
}
