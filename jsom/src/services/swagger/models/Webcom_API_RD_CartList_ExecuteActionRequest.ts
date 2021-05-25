/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_CartList_GetDataRequest } from './Webcom_API_RD_CartList_GetDataRequest';

/**
 * Class ExecuteActionRequest.
 */
export type Webcom_API_RD_CartList_ExecuteActionRequest = {
    /**
     * Gets or sets the action identifier.
     */
    ActionId?: number;
    /**
     * Gets or sets the crypted cart identifier.
     */
    CryptedCartId?: string;
    /**
     * Gets or sets the crypted owner identifier.
     */
    CryptedOwnerId?: string;
    /**
     * Gets or sets the action comment.
     */
    Comment?: string;
    /**
     * Gets or sets the get data request.
     */
    GetDataRequest?: Webcom_API_RD_CartList_GetDataRequest;
    /**
     * Gets or sets the approver identifier.
     */
    ApproverId?: number;
}
