/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class ChangeStatusRequest.
 */
export type Webcom_API_RD_QuoteList_ChangeStatusRequest = {
    /**
     * Gets or sets the new status.
     */
    NewStatus?: number;
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
     * Gets or sets the approver identifier.
     */
    ApproverId?: number;
}
