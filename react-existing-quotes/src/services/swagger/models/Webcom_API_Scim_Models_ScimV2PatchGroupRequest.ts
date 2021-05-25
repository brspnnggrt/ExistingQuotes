/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Scim_Models_ScimV2JsonPatchOperation } from './Webcom_API_Scim_Models_ScimV2JsonPatchOperation';

/**
 * represents group patching request for assigning group members
 */
export type Webcom_API_Scim_Models_ScimV2PatchGroupRequest = {
    /**
     * scim schemas
     */
    Schemas?: Array<string>;
    /**
     * patching operations
     */
    Operations: Array<Webcom_API_Scim_Models_ScimV2JsonPatchOperation>;
}
