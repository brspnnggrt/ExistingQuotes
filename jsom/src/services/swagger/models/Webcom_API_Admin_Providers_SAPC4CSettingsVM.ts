/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SAP C4C View Model
 */
export type Webcom_API_Admin_Providers_SAPC4CSettingsVM = {
    /**
     * Gets or sets the enpoint for getting opportunity details for new CPQ uote from the remote CPI
     */
    HcpisApiOpportunityDetailsForNewQuote?: string;
    /**
     * Gets or sets the enpoint for getting opportunity details for exisiting CPQ uote from the remote CPI
     */
    HcpisApiOpportunityDetailsForExistingQuote?: string;
    /**
     * Gets or sets the enpoint for sending the opportunity update to the remote CPI
     */
    HcpisApiUpdateOpportunity?: string;
    /**
     * Gets or sets the enpoint for sending the created/update sales quote to the remote CPI
     */
    HcpisApiCreateUpdateSalesQuote?: string;
    /**
     * Gets or sets the enpoint for sending the opportunity update  and create/update sales quote to the remote CPI
     */
    HcpisApiUpdateOpportunityAndSalesQuote?: string;
    /**
     * Gets or sets the enpoint for sending/attaching the document to opportunity over the remote CPI
     */
    HcpisApiSendDocumentToOpportunity?: string;
    /**
     * Gets or sets the enpoint for sending/attaching the document to sales quote over the remote CPI
     */
    HcpisApiSendDocumentToSalesQuote?: string;
    /**
     * Gets or sets the enpoint for sending/attaching the document to opportunity and sales quote over the remote CPI
     */
    HcpisApiSendDocumentToOpportunityAndSalesQuote?: string;
    /**
     * Turn on/off opportunity update
     */
    HcpisApiUpdateSalesQuoteOnQuoteSaveAction?: boolean;
    /**
     * Gets or sets the enpoint for update sales quote
     */
    HcpisApiUpdateSalesQuote?: string;
    /**
     * Gets or sets the enpoint for sales quote details
     */
    HcpisApiSalesQuoteDetailsForNewQuote?: string;
    /**
     * Gets or sets the appParam if c4c is active
     */
    HcpisApiC4CIsConnected?: boolean;
    /**
     * Gets or sets the url for landing from C4C
     */
    LandingUrl?: string;
    /**
     * Gets or sets a warning message to be displayed to user
     */
    Warning?: string;
}
