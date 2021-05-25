/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationVM } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationVM';
import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * Quote table translations view model
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationsVM = {
    /**
     * Gets or sets list of system and custom dictionaries
     */
    Dictionaries?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets list of dictionary translations
     */
    AllTranslations?: Record<string, Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationVM>>;
}
