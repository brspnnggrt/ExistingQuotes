/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Represents pricebooks main page response
 */
export type Webcom_API_Admin_Pricebooks_PricebooksResponse = {
    /**
     * Markets
     */
    Markets?: Array<Webcom_API_IdNamePair>;
    /**
     * Market filter
     */
    MarketFilter?: string;
}
