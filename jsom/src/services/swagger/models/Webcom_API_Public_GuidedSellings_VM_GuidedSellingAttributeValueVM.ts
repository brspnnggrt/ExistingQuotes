/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_ProductCategoryVM } from './Webcom_API_SetupSPA_Products_VM_ProductCategoryVM';

/**
 * Guided Selling Attribute Value view model
 */
export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM = {
    /**
     * Guided Selling Attribute Value Id
     */
    Id?: number;
    /**
     * Attribute Value definition Id
     */
    DefinitionId?: number;
    /**
     * Value
     */
    Value?: string;
    /**
     * Value Code
     */
    ValueCode?: string;
    /**
     * Is attribute displayed to user
     */
    IsDisplayed?: boolean;
    /**
     * Rank
     */
    Rank?: number;
    /**
     * Is Attribute Value preselected
     */
    IsPreselected?: boolean;
    /**
     * Image to display when value is selected. Applicable only for Image Button display type.
     */
    ImageOn?: string;
    /**
     * Text displayed image when value is selected. Applicable only for Image Button display type.
     */
    ImageOnAltText?: string;
    /**
     * Image to display when value is deselected. Applicable only for Image Button display type.
     */
    ImageOff?: string;
    /**
     * Text for displayed image when value is deselected. Applicable only for Image Button display type.
     */
    ImageOffAltText?: string;
    /**
     * Attribute value unit
     */
    Unit?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM.Unit;
    /**
     * Attribute value billing period
     */
    BillingPeriod?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM.BillingPeriod;
    /**
     * Categories which are only included in search
     */
    SearchProductCategories?: Array<Webcom_API_SetupSPA_Products_VM_ProductCategoryVM>;
}

export namespace Webcom_API_Public_GuidedSellings_VM_GuidedSellingAttributeValueVM {

    /**
     * Attribute value unit
     */
    export enum Unit {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }

    /**
     * Attribute value billing period
     */
    export enum BillingPeriod {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
    }


}
