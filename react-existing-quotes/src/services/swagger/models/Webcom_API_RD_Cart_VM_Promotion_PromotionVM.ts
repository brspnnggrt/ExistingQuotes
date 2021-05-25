/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_Promotion_PromoActionVM } from './Webcom_API_RD_Cart_VM_Promotion_PromoActionVM';
import type { Webcom_API_RD_Cart_VM_Promotion_PromoConditionVM } from './Webcom_API_RD_Cart_VM_Promotion_PromoConditionVM';

/**
 * Promotion ViewModel
 */
export type Webcom_API_RD_Cart_VM_Promotion_PromotionVM = {
    /**
     * Gets or sets the promotion identifier.
     */
    PromotionId?: number;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the start date.
     */
    StartDate?: string;
    /**
     * Gets or sets the end date.
     */
    EndDate?: string;
    /**
     * Gets or sets a value indicating whether this instance is promotion applied.
     */
    IsPromotionApplied?: boolean;
    /**
     * Gets or sets the tooltip. This is long description in HTML format.
     */
    Tooltip?: string;
    /**
     * Gets or sets the promo conditions.
     */
    PromoConditions?: Array<Webcom_API_RD_Cart_VM_Promotion_PromoConditionVM>;
    /**
     * Gets or sets the promo actions.
     */
    PromoActions?: Array<Webcom_API_RD_Cart_VM_Promotion_PromoActionVM>;
    /**
     * Gets or sets a value indicating whether this instance of promotion is complete (conditions are satisfied or product-based).
     */
    IsConditionsApplicable?: boolean;
}
