/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Customers_OptionItemVM } from './Webcom_API_RD_Customers_OptionItemVM';

/**
 * Class FieldVM.
 */
export type Webcom_API_RD_Customers_FieldVM = {
    /**
     * Gets or sets the content identifier.
     */
    ContentId?: number;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Customers.FieldVM} is editable.
     */
    Editable?: boolean;
    /**
     * Gets or sets the field identifier.
     */
    FieldId?: string;
    /**
     * Gets or sets a value indicating whether this instance is list item.
     */
    IsListItem?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is required.
     */
    IsRequired?: boolean;
    /**
     * Gets or sets the items.
     */
    Items?: Array<Webcom_API_RD_Customers_OptionItemVM>;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets the value.
     */
    Value?: string;
}
