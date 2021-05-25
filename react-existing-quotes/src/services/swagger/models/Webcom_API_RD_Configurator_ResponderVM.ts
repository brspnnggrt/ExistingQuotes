/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_ResponderAttributeVM } from './Webcom_API_RD_Configurator_ResponderAttributeVM';
import type { Webcom_API_RD_Configurator_ResponderLineItemVM } from './Webcom_API_RD_Configurator_ResponderLineItemVM';

/**
 * Class ResponderVM.
 */
export type Webcom_API_RD_Configurator_ResponderVM = {
    /**
     * Gets or sets the base MRC price.
     */
    BaseMRCPrice?: string;
    /**
     * Gets or sets the base product price.
     */
    BaseProductPrice?: string;
    /**
     * Gets or sets the base price.
     */
    BasePrice?: string;
    /**
     * Gets or sets the part number.
     */
    PartNumber?: string;
    /**
     * Gets or sets the product name.
     */
    Name?: string;
    /**
     * Gets or sets the product description.
     */
    Description?: string;
    /**
     * Gets or sets the product long description.
     */
    LongDescription?: string;
    /**
     * Gets or sets the total MRC price.
     */
    TotalMRCPrice?: string;
    /**
     * Gets or sets the total Yearly Recurring Price.
     */
    TotalYRCPrice?: string;
    /**
     * Gets or sets the total price.
     */
    TotalPrice?: string;
    /**
     * Gets or sets the total price missing error.
     */
    TotalPriceMissingError?: string;
    /**
     * Gets or sets the line items.
     */
    LineItems?: Array<Webcom_API_RD_Configurator_ResponderLineItemVM>;
    /**
     * Gets or sets the attributes.
     */
    Attributes?: Array<Webcom_API_RD_Configurator_ResponderAttributeVM>;
    /**
     * Gets or sets the name of the responder template.
     */
    ResponderTemplateName?: string;
    /**
     * Gets or sets the product image path.
     */
    ProductImage?: string;
    /**
     * Hide ResetConfiguration icon in the responder.
     */
    HideResetConfiguration?: boolean;
    /**
     * Gets or sets Extended Base Price
     */
    ExtendedBasePrice?: string;
    /**
     * Gets or sets Extended Base MRC Price
     */
    ExtendedBaseMRCPrice?: string;
}
