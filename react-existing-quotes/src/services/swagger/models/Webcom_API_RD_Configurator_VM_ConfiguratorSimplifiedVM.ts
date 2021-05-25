/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_VM_LineItemVM } from './Webcom_API_RD_Configurator_VM_LineItemVM';
import type { Webcom_API_RD_Configurator_VM_MessagesVM } from './Webcom_API_RD_Configurator_VM_MessagesVM';

/**
 * Class ConfiguratorSimplifiedVM.
 */
export type Webcom_API_RD_Configurator_VM_ConfiguratorSimplifiedVM = {
    /**
     * Gets or sets the product system id.
     */
    ProductSystemId?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Configurator.VM.ConfiguratorSimplifiedVM} is completed.
     */
    Completed?: boolean;
    /**
     * Gets or sets the messages.
     */
    Messages?: Webcom_API_RD_Configurator_VM_MessagesVM;
    /**
     * Gets or sets the currency ISO code.
     */
    CurrencyISOCode?: string;
    /**
     * Gets or sets the total price.
     */
    TotalPrice?: string;
    /**
     * Gets or sets the total recurring price.
     */
    TotalMRCPrice?: string;
    /**
     * Gets or sets the root product price.
     */
    BaseProductPrice?: string;
    /**
     * Gets or sets the root price.
     */
    BasePrice?: string;
    /**
     * Gets or sets the total root recurring price.
     */
    BaseMRCPrice?: string;
    /**
     * Gets or sets the line items.
     */
    LineItems?: Array<Webcom_API_RD_Configurator_VM_LineItemVM>;
    /**
     * Gets or sets flag that indicates if configuration is permanent or not
     */
    IsPermanent?: boolean;
}
