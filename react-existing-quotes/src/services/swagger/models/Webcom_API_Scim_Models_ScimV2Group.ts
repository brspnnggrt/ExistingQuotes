/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Scim_Models_ScimV2Meta } from './Webcom_API_Scim_Models_ScimV2Meta';
import type { Webcom_API_Scim_Models_ScimV2UserReference } from './Webcom_API_Scim_Models_ScimV2UserReference';

/**
 * Scim Group
 */
export type Webcom_API_Scim_Models_ScimV2Group = {
    /**
     * ID of the group.In SAP CPQ, it is the system ID of user types with  (case-insensitive) suffix and custom permission groups and 'ADMINISTRATOR' (case-insensitive) for CPQ admin user.
     */
    Id: string;
    /**
     * The displayed name. In CPQ it represents the name of the custom permission group, 'CPQ Administrator' for admin and the user type name of the user type.
     */
    DisplayName: string;
    /**
     * the schema
     */
    readonly Schemas?: Array<string>;
    /**
     * the user refenceses of those in this group
     */
    Members?: Array<Webcom_API_Scim_Models_ScimV2UserReference>;
    /**
     * meta
     */
    Meta?: Webcom_API_Scim_Models_ScimV2Meta;
}
