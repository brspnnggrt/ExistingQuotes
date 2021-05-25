/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Pricebook visibility builder
 */
export type Webcom_API_Admin_Pricebooks_PricebookVisibilityBuilderVM = {
    /**
     * Field types
     */
    FieldTypes?: Array<Webcom_API_IdNamePair>;
    /**
     * User fields
     */
    UserFields?: Array<Webcom_API_IdNamePair>;
    /**
     * Custom fields
     */
    CustomFields?: Array<Array<Webcom_API_IdNamePair>>;
    /**
     * Customer fields
     */
    CustomerFields?: Array<Webcom_API_IdNamePair>;
    /**
     * Operators
     */
    Operators?: Array<Webcom_API_IdNamePair>;
}
