/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Scim_Models_ScimV2User } from './Webcom_API_Scim_Models_ScimV2User';

/**
 * defines the response on querying resources
 */
export type Webcom_API_Scim_Models_ScimV2ResourceQueryResponse = {
    /**
     * schema
     */
    Schemas?: Array<string>;
    /**
     * total
     */
    TotalResults?: number;
    /**
     * maximum items per page
     */
    ItemsPerPage?: number;
    /**
     * The 1-based index
     */
    StartIndex?: number;
    /**
     * the list of resources (Users or Groups)
     */
    Resources?: Array<Webcom_API_Scim_Models_ScimV2User>;
}
