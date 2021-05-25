/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Defines Meta field in scim
 */
export type Webcom_API_Scim_Models_ScimV2Meta = {
    /**
     * the resource type e.g.
     */
    ResourceType: string;
    /**
     * the time when the resource is created in UTC datetime format. For example: 2011-08-01T18:29:49Z
     */
    Created?: string;
    /**
     * the time when the resource is last modified in UTC datetime format. For example: 2011-08-01T18:29:49Z
     */
    LastModified?: string;
    /**
     * the relative string representation of the uri which points to the resource
     */
    Location?: string;
}
