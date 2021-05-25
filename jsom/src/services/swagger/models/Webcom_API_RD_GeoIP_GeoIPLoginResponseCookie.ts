/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Modified Response Cookie (difference is in Expiration Time format)
 */
export type Webcom_API_RD_GeoIP_GeoIPLoginResponseCookie = {
    /**
     * Gets or sets the name of a cookie.
     */
    Name?: string;
    /**
     * Gets or sets the virtual path to transmit with the current cookie.
     */
    Path?: string;
    /**
     * Gets or sets a value indicating whether to transmit the cookie using Secure SocketsLayer (SSL)--that is, over HTTPS only.
     */
    Secure?: boolean;
    /**
     * Determines whether the cookie is allowed to participate in output caching.
     */
    Shareable?: boolean;
    /**
     * Gets or sets a value that specifies whether a cookie is accessible by client-side    script.
     */
    HttpOnly?: boolean;
    /**
     * Gets or sets the domain to associate the cookie with.
     */
    Domain?: string;
    /**
     * Gets or sets the expiration date and time for the cookie.
     */
    Expires?: string;
    /**
     * Gets or sets an individual cookie value.
     */
    Value?: string;
}
