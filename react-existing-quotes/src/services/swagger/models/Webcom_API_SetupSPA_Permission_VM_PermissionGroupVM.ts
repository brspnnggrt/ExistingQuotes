/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Permission_VM_SelectedPermissionGroupsVM } from './Webcom_API_SetupSPA_Permission_VM_SelectedPermissionGroupsVM';

/**
 * VM for add / edit permission group
 */
export type Webcom_API_SetupSPA_Permission_VM_PermissionGroupVM = {
    Id?: number;
    Name?: string;
    Description?: string;
    SystemId?: string;
    Condition?: string;
    SelectedPermissions?: Webcom_API_SetupSPA_Permission_VM_SelectedPermissionGroupsVM;
}
