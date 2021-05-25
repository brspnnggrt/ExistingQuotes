/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_InvalidAutocompleteCartEntityVM } from './Webcom_API_RD_Cart_InvalidAutocompleteCartEntityVM';
import type { Webcom_API_RD_Cart_InvalidAutocompleteCartItemEntityVM } from './Webcom_API_RD_Cart_InvalidAutocompleteCartItemEntityVM';
import type { Webcom_API_RD_Cart_InvalidAutocompleteConfigurationEntityVM } from './Webcom_API_RD_Cart_InvalidAutocompleteConfigurationEntityVM';

export type Webcom_API_RD_Cart_InvalidAutocompleteEntitiesVM = {
    InvalidItemCustomFields?: Array<Webcom_API_RD_Cart_InvalidAutocompleteCartItemEntityVM>;
    InvalidQuoteCustomFields?: Array<Webcom_API_RD_Cart_InvalidAutocompleteCartEntityVM>;
    InvalidConfigurationEntities?: Array<Webcom_API_RD_Cart_InvalidAutocompleteConfigurationEntityVM>;
    IsEmpty?: boolean;
}
