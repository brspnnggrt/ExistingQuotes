/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM } from './Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM';
import type { Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM } from './Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM';

/**
 * User VM
 */
export type Webcom_API_SetupSPA_Users_VM_UserVM = {
    /**
     * Id
     */
    Id: number;
    /**
     * Username
     */
    Username: string;
    /**
     * Password
     */
    Password?: string;
    /**
     * Is password locked
     */
    PasswordLocked?: boolean;
    /**
     * Must change password
     */
    MustChangePassword?: boolean;
    /**
     * Expiration date
     */
    ExpirationDate?: string;
    /**
     * User id code
     */
    UserIdCode?: string;
    /**
     * First name
     */
    FirstName?: string;
    /**
     * Last name
     */
    LastName?: string;
    /**
     * Email
     */
    Email?: string;
    /**
     * Address 1
     */
    Address1?: string;
    /**
     * Address 2
     */
    Address2?: string;
    /**
     * City
     */
    City?: string;
    /**
     * Country
     */
    CountryId?: string;
    /**
     * State
     */
    StateId?: string;
    /**
     * Province
     */
    Province?: string;
    /**
     * Territory id
     */
    TerritoryId?: number;
    /**
     * Phone
     */
    Phone?: string;
    /**
     * Fax
     */
    Fax?: string;
    /**
     * ZIP code
     */
    ZipCode?: string;
    /**
     * Title
     */
    Title?: string;
    /**
     * Is user active
     */
    Active?: boolean;
    /**
     * Is user admin
     */
    IsAdmin?: boolean;
    /**
     * Federation id
     */
    FederationId?: string;
    /**
     * Managing parent id
     */
    ManagingParentId?: number;
    /**
     * Ordering parent id
     */
    OrderingParentId?: number;
    /**
     * Approve parent id
     */
    ApproveParentId?: number;
    /**
     * Company id
     */
    CompanyId?: number;
    /**
     * User type id
     */
    UserTypeId?: number;
    /**
     * Brand id
     */
    BrandId?: number;
    /**
     * Brand
     */
    Brand?: string;
    /**
     * Is user blocked from deletion
     */
    BlockedFromDeletion?: boolean;
    /**
     * Personalization
     */
    Personalization?: Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM;
    /**
     * List of user custom fields
     */
    CustomFields?: Array<Webcom_API_SetupSPA_Users_VM_UserCustomFieldVM>;
    /**
     * Is SSO user
     */
    IsSsoUser?: boolean;
}
