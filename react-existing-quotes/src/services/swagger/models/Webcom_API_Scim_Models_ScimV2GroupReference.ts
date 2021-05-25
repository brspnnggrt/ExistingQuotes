/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * defines a group reference
 */
export type Webcom_API_Scim_Models_ScimV2GroupReference = {
    /**
     * ID of the group. In CPQ it is the system ID of user types with  suffix and custom permission groups and 'ADMINISTRATOR' for CPQ admin user
     */
    Value: string;
    /**
     * the relative URL of the group
     */
    $ref?: string;
    /**
     * group name
     */
    Display?: string;
}
