/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Login request for user from Honey pot Honey pot intercepts submit on Login form, repacks and validates user and then sends this model to our GeoIP api
 */
export type Webcom_API_RD_GeoIP_GeoIPLoginRequest = {
    /**
     * Honey pot authorization, this code will be saved somewhere
     */
    Auth?: string;
    /**
     * Login form Headers
     */
    Headers?: string;
    /**
     * Login form submitted data
     */
    FormData?: string;
    /**
     * Create and return session
     */
    CreateSession?: boolean;
    /**
     * Signal for disabling user (this is used for prevention of fraud (VPN or similar proxy))
     */
    DisableUser?: boolean;
}
