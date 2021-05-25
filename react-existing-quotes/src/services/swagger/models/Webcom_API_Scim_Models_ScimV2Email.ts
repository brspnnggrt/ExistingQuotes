/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * defines an email
 */
export type Webcom_API_Scim_Models_ScimV2Email = {
    /**
     * The canonicalized email value
     */
    Value: string;
    /**
     * true if the email is the primary one. If multiple emails are given, only the primary email will be managed in CPQ.
     */
    Primary?: boolean;
}
