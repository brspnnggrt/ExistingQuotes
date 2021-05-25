/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Involved party request.
 */
export type Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyRequest = {
    /**
     * Selected partner function ID.
     */
    PartnerFunctionId?: number;
    /**
     * Flag which indicates if a new business partner will be created or existing one will be used.
     */
    CreateNewBusinessPartner?: boolean;
    /**
     * Business partner ID.
     */
    Id?: number;
    /**
     * Business partner name.
     */
    Name?: string;
    /**
     * Business partner external ID.
     */
    ExternalId?: string;
    /**
     * Business partner emailAddress.
     */
    EmailAddress?: string;
    /**
     * Business partner phone.
     */
    Phone?: string;
    /**
     * Business partner address.
     */
    AddressName?: string;
    /**
     * Business partner Partner Id.
     */
    PartnerId?: string;
}
