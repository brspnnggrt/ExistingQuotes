/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * defines a scim error reponse payload. See https://tools.ietf.org/html/rfc7644#section-3.12
 */
export type Webcom_API_Scim_Models_ScimV2Error = {
    /**
     * error schema
     */
    readonly Schemas?: Array<string>;
    /**
     * type
     */
    ScimType?: string;
    /**
     * detail
     */
    Detail?: string;
    /**
     * http status code
     */
    Status?: string;
}
