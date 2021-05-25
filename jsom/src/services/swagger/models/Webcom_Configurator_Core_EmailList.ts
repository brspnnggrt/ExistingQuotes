/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_EmailListRecipient } from './Webcom_Configurator_Core_EmailListRecipient';

export type Webcom_Configurator_Core_EmailList = {
    FullyLoaded?: boolean;
    ListId?: number;
    Name?: string;
    ContentId?: number;
    Recipient?: Array<Webcom_Configurator_Core_EmailListRecipient>;
    readonly EntityIdentificator?: string;
    readonly EntityName?: string;
}
