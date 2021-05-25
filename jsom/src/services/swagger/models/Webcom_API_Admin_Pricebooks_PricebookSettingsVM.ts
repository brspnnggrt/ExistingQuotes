/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents pricebook settings
 */
export type Webcom_API_Admin_Pricebooks_PricebookSettingsVM = {
    /**
     * Default source for product and attribute prices use
     */
    PriceSource?: Webcom_API_Admin_Pricebooks_PricebookSettingsVM.PriceSource;
    /**
     * Hide simple products without prices when using pricebook lookups
     */
    HideProductsWithoutPrices?: boolean;
    /**
     * Hide attribute values without prices when using pricebook lookups
     */
    HideAttributeValuesWithoutPrices?: boolean;
    /**
     * Prevent users from quoting part numbers that haven't got a price in pricebooks
     */
    PreventQuotingPartNumbers?: boolean;
    /**
     * Prevent users from adding product selections containing attributes that don’t have a price in pricebooks
     */
    PreventAddingProductSelections?: boolean;
}

export namespace Webcom_API_Admin_Pricebooks_PricebookSettingsVM {

    /**
     * Default source for product and attribute prices use
     */
    export enum PriceSource {
        '_0' = 0,
        '_1' = 1,
    }


}
