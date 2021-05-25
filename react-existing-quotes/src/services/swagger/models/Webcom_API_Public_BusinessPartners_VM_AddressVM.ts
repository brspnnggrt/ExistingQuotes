/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_BusinessPartners_VM_CommunicationVM } from './Webcom_API_Public_BusinessPartners_VM_CommunicationVM';
import type { Webcom_API_Public_BusinessPartners_VM_PhysicalAddressVM } from './Webcom_API_Public_BusinessPartners_VM_PhysicalAddressVM';

/**
 * Address View-Model
 */
export type Webcom_API_Public_BusinessPartners_VM_AddressVM = {
    /**
     * Gets or sets the form of address.
     */
    FormOfAddress?: string;
    /**
     * Gets or sets the address name.
     */
    AddressName?: string;
    /**
     * Gets or sets the address additional name.
     */
    AddressAdditionalName?: string;
    /**
     * Gets or sets the address name 3.
     */
    AddressName3?: string;
    /**
     * Gets or sets the address name 4.
     */
    AddressName4?: string;
    /**
     * Gets or sets the tax jurisdiction.
     */
    TaxJurisdiction?: string;
    /**
     * Gets or sets the physical address.
     */
    PhysicalAddress?: Webcom_API_Public_BusinessPartners_VM_PhysicalAddressVM;
    /**
     * Gets or sets the communication.
     */
    Communication?: Webcom_API_Public_BusinessPartners_VM_CommunicationVM;
}
