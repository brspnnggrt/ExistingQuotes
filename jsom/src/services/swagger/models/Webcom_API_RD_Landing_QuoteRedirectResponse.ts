/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Response containing rederict url or error message
 */
export type Webcom_API_RD_Landing_QuoteRedirectResponse = {
    /**
     * Gets or sets the message.
     */
    Message?: string;
    /**
     * Gets or sets the info message displayed to user when after the change of quote status user does not have a permission to view quote anymore.
     */
    InfoMessage?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Landing.QuoteRedirectResponse} is success.
     */
    Success?: boolean;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Landing.QuoteRedirectResponse} is success.
     */
    Redirect?: string;
}
