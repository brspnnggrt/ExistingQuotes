/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartActionsVM } from './Webcom_API_RD_Cart_CartActionsVM';
import type { Webcom_API_RD_Cart_CartTabsVM } from './Webcom_API_RD_Cart_CartTabsVM';
import type { Webcom_API_RD_Customers_CustomerRoleResponse } from './Webcom_API_RD_Customers_CustomerRoleResponse';

/**
 * Class ShippingInfoResponse.
 */
export type Webcom_API_RD_Customers_ShippingInfoResponse = {
    /**
     * Gets or sets the customer roles.
     */
    CustomerRoles?: Array<Webcom_API_RD_Customers_CustomerRoleResponse>;
    /**
     * Gets or sets a value indicating whether this instance is in view mode.
     */
    IsInViewMode?: boolean;
    /**
     * Determines whether Predictive feature should be displayed
     */
    ShowPredictive?: boolean;
    /**
     * Gets or sets the tabs data.
     */
    TabsData?: Webcom_API_RD_Cart_CartTabsVM;
    /**
     * Cart actions arguments view model.
     */
    CartActionsModel?: Webcom_API_RD_Cart_CartActionsVM;
}
