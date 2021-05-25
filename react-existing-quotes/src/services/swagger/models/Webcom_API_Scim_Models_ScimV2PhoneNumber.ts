/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * defines phone number
 */
export type Webcom_API_Scim_Models_ScimV2PhoneNumber = {
    /**
     * the phone number
     */
    Value: string;
    /**
     * the phone number type. If multiple phone numbers are given, only the types of 'work' and 'fax' will be mapped.
     */
    Type?: string;
}
