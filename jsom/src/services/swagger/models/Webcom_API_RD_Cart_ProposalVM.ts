/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_AdditionalDocument } from './Webcom_API_RD_Cart_AdditionalDocument';

/**
 * Class ProposalVM.
 */
export type Webcom_API_RD_Cart_ProposalVM = {
    /**
     * Gets or sets the message.
     */
    Message?: string;
    /**
     * Gets or sets the type of the document.
     */
    DocType?: string;
    /**
     * Gets or sets the document download link.
     */
    DocDownloadLink?: string;
    /**
     * Additional documents in case of zip
     */
    AdditionalDocuments?: Array<Webcom_API_RD_Cart_AdditionalDocument>;
}
