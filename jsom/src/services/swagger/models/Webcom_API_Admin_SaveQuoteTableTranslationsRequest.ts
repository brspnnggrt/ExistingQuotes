/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationVM } from './Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationVM';

export type Webcom_API_Admin_SaveQuoteTableTranslationsRequest = {
    TableId?: number;
    DictionariesTranslations?: Record<string, Array<Webcom_API_Admin_TablesOnQuotes_QuoteTableTranslationVM>>;
}
