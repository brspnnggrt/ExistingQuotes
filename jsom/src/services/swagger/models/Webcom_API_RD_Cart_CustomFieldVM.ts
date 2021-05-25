/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CustomFieldValueVM } from './Webcom_API_RD_Cart_CustomFieldValueVM';

/**
 * Class CustomFieldVM.
 */
export type Webcom_API_RD_Cart_CustomFieldVM = {
    /**
     * Gets or sets the content.
     */
    Content?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Cart.CustomFieldVM} is editable.
     */
    Editable?: boolean;
    /**
     * Gets or sets identificator for autocomplete selected content.
     */
    ContentId?: number;
    /**
     * Gets or sets autocomplete placeholder.
     */
    Placeholder?: string;
    /**
     * Gets or sets the error.
     */
    Error?: string;
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets a value indicating whether this instance is required.
     */
    IsRequired?: boolean;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets a value indicating whether [triggers save].
     */
    TriggersSave?: boolean;
    /**
     * Gets or sets the type.
     */
    Type?: Webcom_API_RD_Cart_CustomFieldVM.Type;
    /**
     * Gets or sets standard attribute code of referencing attribute.
     */
    StdAttrCode?: number;
    /**
     * Gets or sets the values.
     */
    Values?: Array<Webcom_API_RD_Cart_CustomFieldValueVM>;
    /**
     * Gets or sets the rank.
     */
    Rank?: number;
}

export namespace Webcom_API_RD_Cart_CustomFieldVM {

    /**
     * Gets or sets the type.
     */
    export enum Type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
