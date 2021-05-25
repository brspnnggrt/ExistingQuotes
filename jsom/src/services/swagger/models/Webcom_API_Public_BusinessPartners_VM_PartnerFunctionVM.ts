/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';

/**
 * Partner Function View-Model
 */
export type Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM = {
    /**
     * Gets or sets the partner Id
     */
    Id?: number;
    /**
     * Gets or sets the partner function key. The identifier.
     */
    Key?: string;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the Translated Name.
     */
    TranslatedName?: string;
    /**
     * Gets or sets the valid from.
     */
    ValidFrom?: string;
    /**
     * Gets or sets the valid to.
     */
    ValidTo?: string;
    /**
     * Gets or sets a value indicating whether this instance is mandatory.
     */
    IsMandatory?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is unique.
     */
    IsUnique?: boolean;
    /**
     * Gets or sets list of partner function translations
     */
    MlValues?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
}
