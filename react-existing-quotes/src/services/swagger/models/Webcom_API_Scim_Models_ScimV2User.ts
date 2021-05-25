/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Scim_Models_ScimV2Address } from './Webcom_API_Scim_Models_ScimV2Address';
import type { Webcom_API_Scim_Models_ScimV2CompanyReference } from './Webcom_API_Scim_Models_ScimV2CompanyReference';
import type { Webcom_API_Scim_Models_ScimV2CustomReference } from './Webcom_API_Scim_Models_ScimV2CustomReference';
import type { Webcom_API_Scim_Models_ScimV2Email } from './Webcom_API_Scim_Models_ScimV2Email';
import type { Webcom_API_Scim_Models_ScimV2GroupReference } from './Webcom_API_Scim_Models_ScimV2GroupReference';
import type { Webcom_API_Scim_Models_ScimV2Meta } from './Webcom_API_Scim_Models_ScimV2Meta';
import type { Webcom_API_Scim_Models_ScimV2Name } from './Webcom_API_Scim_Models_ScimV2Name';
import type { Webcom_API_Scim_Models_ScimV2PhoneNumber } from './Webcom_API_Scim_Models_ScimV2PhoneNumber';

/**
 * user model scim 2.0 for CPQ
 */
export type Webcom_API_Scim_Models_ScimV2User = {
    /**
     * the used schemas
     */
    readonly Schemas?: Array<string>;
    /**
     * The identifier of the user which in CPQ.
     */
    Id?: string;
    /**
     * login user name of the user which in CPQ is the user name. It is case-insensitive, unique and cannot be 'system'.
     */
    UserName: string;
    /**
     * name of the user
     */
    Name: Webcom_API_Scim_Models_ScimV2Name;
    /**
     * the company to which the user belongs to
     */
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User': Webcom_API_Scim_Models_ScimV2CompanyReference;
    /**
     * if the user is active
     */
    Active?: boolean;
    /**
     * emails of the user. In CPQ we manage only one email
     */
    Emails: Array<Webcom_API_Scim_Models_ScimV2Email>;
    /**
     * phone of the user. In CPQ we manage only the mobile and fax
     */
    PhoneNumbers?: Array<Webcom_API_Scim_Models_ScimV2PhoneNumber>;
    /**
     * the address of the user. In CPQ we only manage one 'home' address
     */
    Addresses?: Array<Webcom_API_Scim_Models_ScimV2Address>;
    /**
     * the group references to which the user belongs to
     */
    Groups: Array<Webcom_API_Scim_Models_ScimV2GroupReference>;
    /**
     * name of the user
     */
    Meta?: Webcom_API_Scim_Models_ScimV2Meta;
    /**
     * custom fields
     */
    'urn:sap:cpq:scim:schemas:extension:custom:2.0:User'?: Webcom_API_Scim_Models_ScimV2CustomReference;
}
