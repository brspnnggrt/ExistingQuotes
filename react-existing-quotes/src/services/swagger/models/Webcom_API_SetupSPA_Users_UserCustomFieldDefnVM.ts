/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Users_SelectedPermissionsCollectionVM } from './Webcom_API_SetupSPA_Users_SelectedPermissionsCollectionVM';

export type Webcom_API_SetupSPA_Users_UserCustomFieldDefnVM = {
    Id?: number;
    Name?: string;
    Rank?: number;
    PermissionType?: number;
    TypeId?: number;
    AttributeId?: number;
    Label?: string;
    StdAttrCode?: number;
    VisibleToAllDisplayType?: number;
    IsSensitive?: boolean;
    SelectedPermissions?: Webcom_API_SetupSPA_Users_SelectedPermissionsCollectionVM;
    MlValues?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
}
