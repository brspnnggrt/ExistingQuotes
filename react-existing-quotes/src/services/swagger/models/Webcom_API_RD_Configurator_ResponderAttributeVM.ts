/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_ConflictVM } from './Webcom_API_RD_Configurator_ConflictVM';
import type { Webcom_API_RD_Configurator_ResponderAttributeValueVM } from './Webcom_API_RD_Configurator_ResponderAttributeValueVM';

/**
 * Class ResponderAttributeVM.
 */
export type Webcom_API_RD_Configurator_ResponderAttributeVM = {
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the quantity.
     */
    Quantity?: string;
    /**
     * Gets or sets the standard attribute code.
     */
    StdAttrCode?: number;
    /**
     * Gets or sets a value indicating whether [show one time price].
     */
    ShowOneTimePrice?: boolean;
    /**
     * Gets or sets a value indicating whether [show recurring price].
     */
    ShowRecurringPrice?: boolean;
    /**
     * Gets or sets the total attribute price.
     */
    TotalAttributePrice?: string;
    /**
     * Gets or sets the total attribute recurring price.
     */
    TotalAttributeRecurringPrice?: string;
    /**
     * Gets or sets the total attribute extended price.
     */
    TotalAttributeExtendedPrice?: string;
    /**
     * Gets or sets the total attribute extended recurring price.
     */
    TotalAttributeExtendedRecurringPrice?: string;
    /**
     * Gets or sets the values.
     */
    Values?: Array<Webcom_API_RD_Configurator_ResponderAttributeValueVM>;
    /**
     * Gets or sets the custom label.
     */
    CustomLabel?: string;
    /**
     * Gets or sets the inconsitency of CPS characteristic (CPQ attribute)
     */
    Inconsistent?: boolean;
    /**
     * Gets or sets the conflicts arrived from CPS
     */
    Conflicts?: Array<Webcom_API_RD_Configurator_ConflictVM>;
    /**
     * Gets or sets the info whether the attribute is a VC attribute or not
     */
    IsVCAttribute?: boolean;
}
