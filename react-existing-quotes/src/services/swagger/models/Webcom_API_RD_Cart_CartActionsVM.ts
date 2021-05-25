/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartActionVM } from './Webcom_API_RD_Cart_CartActionVM';

/**
 * Cart actions view model.
 */
export type Webcom_API_RD_Cart_CartActionsVM = {
    /**
     * Quote identifier.
     */
    QuoteId?: number;
    /**
     * Owner identifier.
     */
    OwnerId?: number;
    /**
     * Check if quote has updatable products.
     */
    HasUpdatableProducts?: boolean;
    /**
     * Display images for carta actions.
     */
    DisplayImagesForCartActions?: boolean;
    /**
     * Can undo.
     */
    CanUndo?: boolean;
    /**
     * Can redo.
     */
    CanRedo?: boolean;
    /**
     * List of primary actions.
     */
    PrimaryActions?: Array<Webcom_API_RD_Cart_CartActionVM>;
    /**
     * List of non primary actions.
     */
    NonPrimaryActions?: Array<Webcom_API_RD_Cart_CartActionVM>;
}
