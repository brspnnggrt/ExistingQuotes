/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_GeoIP_GeoIPLoginResponseCookie } from './Webcom_API_RD_GeoIP_GeoIPLoginResponseCookie';

/**
 * Model returned to Honey pot after validating user
 */
export type Webcom_API_RD_GeoIP_GeoIPLoginResponse = {
    UserValid?: boolean;
    /**
     * User is not Active?
     */
    UserDisabled?: boolean;
    /**
     * Standard cookies collection (asp session and so on)
     */
    Cookies?: Array<Webcom_API_RD_GeoIP_GeoIPLoginResponseCookie>;
    /**
     * This is response message (in our case standard text if login failed)
     */
    Response?: string;
    /**
     * Response headers to be added to users next requests (session id and so on)
     */
    ResponseHeaders?: string;
    /**
     * Redirect address after successful login
     */
    Redirect?: string;
    /**
     * Users Company, this is important because Honey pot allows some companies in restricted countries
     */
    Company?: string;
}
