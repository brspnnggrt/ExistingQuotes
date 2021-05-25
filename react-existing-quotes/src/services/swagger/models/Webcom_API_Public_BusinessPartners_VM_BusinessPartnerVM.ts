/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_BusinessPartners_VM_AddressVM } from './Webcom_API_Public_BusinessPartners_VM_AddressVM';

/**
 * Business Partner View-Model
 */
export type Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM = {
    /**
     * Gets or sets the identifier (auto-increment).
     */
    Id?: number;
    /**
     * Gets or sets SystemId
     */
    SystemId?: string;
    /**
     * Gets or sets the external identifier.
     */
    ExternalId?: string;
    /**
     * Gets or sets the PartnerId.
     */
    PartnerId?: string;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the first name.
     */
    FirstName?: string;
    /**
     * Gets or sets the last name.
     */
    LastName?: string;
    /**
     * Gets or sets the address.
     */
    Address?: Webcom_API_Public_BusinessPartners_VM_AddressVM;
    /**
     * Gets or sets the vat number.
     */
    VATNumber?: string;
    /**
     * Gets or sets the tax number1.
     */
    TaxNumber1?: string;
    /**
     * Gets or sets the tax number2.
     */
    TaxNumber2?: string;
    /**
     * Gets or sets the Bank Account 1
     */
    BankAccount1?: string;
    /**
     * Gets or sets the Bank Account 2
     */
    BankAccount2?: string;
    /**
     * Gets or sets the Primary Industry
     */
    PrimaryIndustry?: string;
    /**
     * Gets or sets the Business Partner Type
     */
    BusinessPartnerType?: Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM.BusinessPartnerType;
    /**
     * permissionIds
     */
    Permissions?: Array<number>;
}

export namespace Webcom_API_Public_BusinessPartners_VM_BusinessPartnerVM {

    /**
     * Gets or sets the Business Partner Type
     */
    export enum BusinessPartnerType {
        ORGANIZATION = 'Organization',
        PERSON = 'Person',
    }


}
