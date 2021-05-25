/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_ActionVM } from './Webcom_API_RD_CartList_ActionVM';
import type { Webcom_API_RD_CartList_CellVM } from './Webcom_API_RD_CartList_CellVM';

/**
 * Class RowVM.
 */
export type Webcom_API_RD_CartList_RowVM = {
    /**
     * Gets or sets the actions.
     */
    Actions?: Array<Webcom_API_RD_CartList_ActionVM>;
    /**
     * Gets or sets the approver.
     */
    Approver?: string;
    /**
     * Gets or sets the approver identifier.
     */
    ApproverId?: number;
    /**
     * Gets or sets the cart identifier.
     */
    CartId?: number;
    /**
     * Gets or sets the cart identifier crypted.
     */
    CartIdCrypted?: string;
    /**
     * Gets or sets the cells.
     */
    Cells?: Array<Webcom_API_RD_CartList_CellVM>;
    /**
     * Gets or sets the owner identifier.
     */
    OwnerId?: number;
    /**
     * Gets or sets the owner identifier crypted.
     */
    OwnerIdCrypted?: string;
    /**
     * Gets or sets the Quote last modified date.
     */
    LastModified?: string;
    /**
     * Gets or sets the Quote blocked mark.
     */
    IsBlocked?: boolean;
}
