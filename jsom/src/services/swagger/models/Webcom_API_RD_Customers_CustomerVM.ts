/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_FieldVM } from './Webcom_API_RD_Customers_FieldVM';

/**
 * Class CustomerVM.
 */
export type Webcom_API_RD_Customers_CustomerVM = {
    /**
     * Gets or sets the fields.
     */
    Fields?: Array<Webcom_API_RD_Customers_FieldVM>;
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name of the role.
     */
    RoleName?: string;
    /**
     * Gets or sets the type of the role.
     */
    RoleType?: number;
    /**
     * Gets the values.
     */
    readonly Values?: Array<string>;
    /**
     * Gets the BlockedFromDeletion.
     */
    BlockedFromDeletion?: boolean;
}
