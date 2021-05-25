/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_RecommendedItemDescriptionVM } from './Webcom_API_RD_Cart_RecommendedItemDescriptionVM';

export type Webcom_API_RD_Cart_RecommendationItemVM = {
    Id?: number;
    IsApplied?: boolean;
    ProductSystemId?: string;
    UserId?: string;
    CartId?: string;
    RecommendedDiscountDecimal?: number;
    RecommendedQuantityDecimal?: number;
    RecommendationType?: string;
    ItemDescription?: Webcom_API_RD_Cart_RecommendedItemDescriptionVM;
    CellValues?: Array<any>;
    ItemNo?: string;
    RecommendationDescription?: string;
    HeadingText?: string;
}
