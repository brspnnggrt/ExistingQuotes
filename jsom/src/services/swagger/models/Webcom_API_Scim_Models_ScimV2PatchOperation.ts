/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The patching schema here is dedicated for changing active status or user groups.
 */
export type Webcom_API_Scim_Models_ScimV2PatchOperation = {
    /**
     * Allowed operations are 'add', 'remove' and 'replace'.
     */
    Op: string;
    /**
     * Allowed paths are 'active', 'groups' and 'groups[value eq ]' only operation 'remove' is allowed.
     */
    Path: string;
    /**
     * Processed data corresponds to the operation in use.In case of the 'groups' path, only operations 'add' and 'replace' can be used for all groups.Groups are represented as a collection of {Webcom.API.Scim.Models.ScimV2GroupReference} objects.In case of the 'active' path, only the active value can be changed by operations 'add' or 'replace'.Active value could be true or false.
     */
    Value?: any;
}
