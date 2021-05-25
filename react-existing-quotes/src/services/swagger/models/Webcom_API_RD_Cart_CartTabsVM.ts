/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartTabItemVM } from './Webcom_API_RD_Cart_CartTabItemVM';

/**
 * Class CartTabsVM.
 */
export type Webcom_API_RD_Cart_CartTabsVM = {
    /**
     * Gets or sets the title.
     */
    Title?: string;
    /**
     * Gets or sets the name of the current tab.
     */
    CurrentTabName?: string;
    /**
     * Gets or sets the tabs.
     */
    Tabs?: Array<Webcom_API_RD_Cart_CartTabItemVM>;
    /**
     * Gets or sets the current tab identifier.
     */
    CurrentTabId?: number;
    /**
     * Determines whether Predictive feature should be displayed to the user
     */
    ShowPredictive?: boolean;
    /**
     * Determines whether Clm provider is enabled.
     */
    ClmProviderEnabled?: boolean;
}
