/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Scim_Models_ScimV2JsonPatchOperationValue } from './Webcom_API_Scim_Models_ScimV2JsonPatchOperationValue';

export type Webcom_API_Scim_Models_ScimV2JsonPatchOperation = {
    /**
     * operations allow 'add', 'remove' and 'replace'
     */
    Op: string;
    /**
     * paths allow 'members' and 'members[value eq ]' only operation 'remove' is allowed.
     */
    Path: string;
    /**
     * Data to be processed corresponds to the operation. It's only for adding members or replacing all members of a group.
     */
    Value?: Array<Webcom_API_Scim_Models_ScimV2JsonPatchOperationValue>;
}
