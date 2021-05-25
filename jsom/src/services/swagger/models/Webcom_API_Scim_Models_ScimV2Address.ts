/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * defines address
 */
export type Webcom_API_Scim_Models_ScimV2Address = {
    /**
     * type of the address. If more addresses are given, only the type of 'home' will be mapped.
     */
    Type?: string;
    /**
     * street
     */
    StreetAddress?: string;
    /**
     * city
     */
    Locality?: string;
    /**
     * region
     */
    Region?: string;
    /**
     * postal code
     */
    PostalCode?: string;
    /**
     * country
     */
    Country?: string;
}
