/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Scim_Models_ScimV2PatchOperation } from './Webcom_API_Scim_Models_ScimV2PatchOperation';

/**
 * Patch user request payload https://tools.ietf.org/html/rfc7644#section-3.5.2
 */
export type Webcom_API_Scim_Models_ScimV2PatchUserRequest = {
    /**
     * The schema
     */
    Schemas?: Array<string>;
    /**
     * Patching operations
     */
    Operations: Array<Webcom_API_Scim_Models_ScimV2PatchOperation>;
}
