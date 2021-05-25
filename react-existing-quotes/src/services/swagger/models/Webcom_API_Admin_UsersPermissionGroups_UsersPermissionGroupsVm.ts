/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents Users permission item
 */
export type Webcom_API_Admin_UsersPermissionGroups_UsersPermissionGroupsVm = {
    /**
     * Gets or sets permission id
     */
    PermissionId?: number;
    /**
     * Gets or sets name of permission
     */
    Name?: string;
    /**
     * Gets or sets system id of permission
     */
    SystemId?: string;
    /**
     * Gets or sets description for permission
     */
    Description?: string;
    /**
     * Gets or sets all permission groups for permission
     */
    PermissionGroups?: Array<string>;
    /**
     * Gets or sets condition for permission
     */
    Condition?: string;
    /**
     * Type of action performed (copy, new, edit)
     */
    ActionType?: number;
}
