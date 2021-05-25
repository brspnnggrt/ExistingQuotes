/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Config_ABSPriceRange } from './Webcom_Configurator_Config_ABSPriceRange';

/**
 * Class ABSSummaryVM.
 */
export type Webcom_API_RD_Configurator_ABSSummaryVM = {
    /**
     * Gets or sets the total matches.
     */
    TotalMatches?: number;
    /**
     * Gets or sets a value indicating whether this instance has price ranges.
     */
    HasPriceRanges?: boolean;
    /**
     * Gets the price ranges.
     */
    readonly PriceRanges?: Array<Webcom_Configurator_Config_ABSPriceRange>;
}
