/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_Promotion_PromotionVM } from './Webcom_API_RD_Cart_VM_Promotion_PromotionVM';

/**
 * Class that serves as VM wrapper around promotion VMmainly because of two params that affect how promotions will be displayed
 */
export type Webcom_API_RD_Cart_VM_Promotion_PromotionsResponse = {
    /**
     * Gets or sets a value indicating whether [one promo per quote] global param is yes or no.
     */
    OnePromoPerQuote?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has some unapplied promo.
     */
    HasSomeUnappliedPromo?: boolean;
    /**
     * Gets or sets the promotions.
     */
    Promotions?: Array<Webcom_API_RD_Cart_VM_Promotion_PromotionVM>;
}
