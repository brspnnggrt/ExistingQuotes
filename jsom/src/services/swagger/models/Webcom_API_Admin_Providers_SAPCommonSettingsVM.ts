/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Response for C4C General Settings
 */
export type Webcom_API_Admin_Providers_SAPCommonSettingsVM = {
    /**
     * Turn on/off provider integration
     */
    ProviderEnabled?: boolean;
    /**
     * Get or sets wheter or not to send customers along with the quote payload
     */
    SendCustomers?: boolean;
    /**
     * Gets or sets the date and time zone that will be in use to convert intoall CPQ quote standard date fields
     */
    StandardQuoteFieldDatesInZone?: string;
    /**
     * Gets or sets the list of the available time zones to use for the date and time conversion
     */
    StandardQuoteFieldDateZones?: Array<string>;
    /**
     * Gets or sets CPI base url
     */
    HcpisApiBaseUrl?: string;
    /**
     * Gets or sets authentication mode to be used while authenticating against CPI
     */
    HcpisAuthenticationMode?: string;
    /**
     * Gets or sets username that will be used to authenticate against the CPI over the basic authentication
     */
    HcpisCredentialsUsername?: string;
    /**
     * Gets or sets password that will be used to authenticate against the CPI over the basic authentication
     */
    HcpisCredentialsPassword?: string;
    /**
     * Gets or sets the enpoint for getting XML data from remote CPI
     */
    HcpisApiGetObjectData?: string;
    /**
     * Gets or sets the enpoint for posting XML data to remote CPI
     */
    HcpisApiPostData?: string;
    /**
     * Gets or sets the enpoint for sending CPQ serialized quote in XML to remote CPI
     */
    HcpisApiSendQuoteToSap?: string;
}
