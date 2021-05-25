/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_Providers_CommerceUserVM } from './Webcom_API_Admin_Providers_CommerceUserVM';
import type { Webcom_API_Admin_Providers_NotificationVM } from './Webcom_API_Admin_Providers_NotificationVM';

/**
 * SAP Commerce Settings view model class
 */
export type Webcom_API_Admin_Providers_SAPCommerceSettingsVM = {
    /**
     * Gets or sets selected commerce users
     */
    SelectedCommerceUsers?: Array<Webcom_API_Admin_Providers_CommerceUserVM>;
    /**
     * Gets or sets commerce users
     */
    CommerceUsers?: Array<number>;
    /**
     * Gets or sets notifications
     */
    NotificationsCollections?: Array<Webcom_API_Admin_Providers_NotificationVM>;
    /**
     * Get or sets selected notification Id
     */
    SelectedNotificationId?: number;
    /**
     * Get or sets selected revision notification Id
     */
    SelectedRevisionNotificationId?: number;
    /**
     * Get or sets release quote end point
     */
    ReleaseQuoteEndPoint?: string;
    /**
     * Get or sets release quote and proposal end point
     */
    ReleaseQuoteAndProposalEndPoint?: string;
    /**
     * Get or sets whether integration with Commerce is enabled
     */
    CommerceIsConnected?: boolean;
    /**
     * Get or sets email Id
     */
    EmailId?: number;
    /**
     * Get or sets for Use New Quote Engine
     */
    UseNewQuoteEngine?: boolean;
}
