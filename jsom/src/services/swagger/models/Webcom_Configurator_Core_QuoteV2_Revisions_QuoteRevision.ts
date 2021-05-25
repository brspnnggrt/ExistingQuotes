/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevisionAction } from './Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevisionAction';

export type Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevision = {
    QuoteId?: string;
    OwnerId?: string;
    Name?: string;
    Description?: string;
    DateCreated?: string;
    DateModified?: string;
    StatusId?: number;
    Status?: string;
    RevisionId?: number;
    TotalAmount?: string;
    TotalAmountValue?: string;
    ParentRevision?: string;
    Actions?: Array<Webcom_Configurator_Core_QuoteV2_Revisions_QuoteRevisionAction>;
    IsActive?: boolean;
    MarketId?: number;
    MarketName?: string;
    CurrencyCode?: string;
    CurrencySign?: string;
    readonly EntityIdentificator?: string;
    readonly EntityName?: string;
}
