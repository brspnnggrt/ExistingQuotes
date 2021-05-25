/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Involved Party View-Model
 */
export type Webcom_API_Public_Configurations_ViewModel_InvolvedPartyVM = {
    /**
     * Gets or sets the partner function key. The identifier.
     */
    Key: string;
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
     * Gets or sets the address1.
     */
    AddressName?: string;
    /**
     * Gets or sets the address2.
     */
    AddressAdditionalName?: string;
    /**
     * Gets or sets the city.
     */
    CityName?: string;
    /**
     * Gets or sets the zip code.
     */
    PostalCode?: string;
    /**
     * Gets or sets the state.
     */
    State?: string;
    /**
     * Gets or sets the country.
     */
    Country?: string;
    /**
     * Gets or sets the region.
     */
    Region?: string;
    /**
     * Gets or sets the telephone.
     */
    Phone?: string;
    /**
     * Gets or sets the email.
     */
    EmailAddress?: string;
    /**
     * Gets or sets the time zone.
     */
    TimeZone?: string;
    /**
     * Gets or sets the VAT number.
     */
    VATNumber?: string;
    /**
     * Gets or sets the tax number 1.
     */
    TaxNumber1?: string;
    /**
     * Gets or sets the tax number 2.
     */
    TaxNumber2?: string;
    /**
     * Gets or sets the fax.
     */
    Fax?: string;
    /**
     * Gets or sets the bank account 1.
     */
    BankAccount1?: string;
    /**
     * Gets or sets the bank account 2.
     */
    BankAccount2?: string;
    /**
     * Gets or sets the primary industry.
     */
    PrimaryIndustry?: string;
    /**
     * Gets or sets the business partner type.
     */
    BusinessPartnerType?: Webcom_API_Public_Configurations_ViewModel_InvolvedPartyVM.BusinessPartnerType;
    /**
     * Gets or sets the partner id.
     */
    PartnerId?: string;
    /**
     * Gets or sets the external identifier.
     */
    ExternalId?: string;
    /**
     * Gets or sets the form of address.
     */
    FormOfAddress?: string;
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
     * Gets or sets the POBox postal code.
     */
    POBoxPostalCode?: string;
    /**
     * Gets or sets the district.
     */
    District?: string;
    /**
     * Gets or sets the POBox.
     */
    POBox?: string;
    /**
     * Gets or sets the street prefix name.
     */
    StreetPrefixName?: string;
    /**
     * Gets or sets the additional street prefix name.
     */
    AdditionalStreetPrefixName?: string;
    /**
     * Gets or sets the street name.
     */
    StreetName?: string;
    /**
     * Gets or sets the street suffix name.
     */
    StreetSuffixName?: string;
    /**
     * Gets or sets the additional street suffix name.
     */
    AdditionalStreetSuffixName?: string;
    /**
     * Gets or sets the house number.
     */
    HouseNumber?: string;
    /**
     * Gets or sets the transport zone.
     */
    TransportZone?: string;
    /**
     * Gets or sets the correspondence language.
     */
    CorrespondenceLanguage?: string;
    /**
     * Gets or sets the mobile phone.
     */
    MobilePhone?: string;
}

export namespace Webcom_API_Public_Configurations_ViewModel_InvolvedPartyVM {

    /**
     * Gets or sets the business partner type.
     */
    export enum BusinessPartnerType {
        ORGANIZATION = 'Organization',
        PERSON = 'Person',
    }


}
