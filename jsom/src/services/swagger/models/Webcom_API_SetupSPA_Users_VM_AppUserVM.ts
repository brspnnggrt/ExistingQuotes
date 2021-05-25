/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Current, logged in user of the application
 */
export type Webcom_API_SetupSPA_Users_VM_AppUserVM = {
    /**
     * Username
     */
    Username?: string;
    /**
     * Username
     */
    Domain?: string;
    /**
     * Date format
     */
    DateFormat?: string;
    ShowObsoleteFeature?: boolean;
    /**
     * SHA256 (user id  + domain)
     */
    IdentityHash?: string;
    /**
     * User type of current user
     */
    UserType?: string;
    /**
     * Initials of the current user
     */
    UserInitials?: string;
    HiddenMenuItems?: Array<string>;
    SecurityKey?: string;
    /**
     * Disctionary ISO code
     */
    DictionaryISOCode?: string;
}
