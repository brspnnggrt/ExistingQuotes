/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Admin_ProxyUser_VM_TenantVM } from './Webcom_API_Admin_ProxyUser_VM_TenantVM';
import type { Webcom_API_Admin_ProxyUser_VM_UserVM } from './Webcom_API_Admin_ProxyUser_VM_UserVM';

export type Webcom_API_Admin_ProxyUser_ProxyUserResponse = {
    /**
     * Gets or sets the product.
     */
    Tenants?: Array<Webcom_API_Admin_ProxyUser_VM_TenantVM>;
    Users?: Array<Webcom_API_Admin_ProxyUser_VM_UserVM>;
}
