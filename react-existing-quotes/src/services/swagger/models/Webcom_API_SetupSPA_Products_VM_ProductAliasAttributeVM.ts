/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Product alias attribute
 */
export type Webcom_API_SetupSPA_Products_VM_ProductAliasAttributeVM = {
    /**
     * Product attribute id
     */
    PaId?: number;
    /**
     * Attribute name
     */
    Name?: string;
    /**
     * Attribute display type
     */
    DisplayAs?: string;
    /**
     * Is attribute free form
     */
    IsFreeForm?: boolean;
    /**
     * Free form value
     */
    FreeFormValue?: string;
    /**
     * Display type within configurator (show, readonly, hidden)
     */
    DisplayType?: Webcom_API_SetupSPA_Products_VM_ProductAliasAttributeVM.DisplayType;
    /**
     * Selected attribute value ids
     */
    SelectedAttributeValueIds?: Array<number>;
}

export namespace Webcom_API_SetupSPA_Products_VM_ProductAliasAttributeVM {

    /**
     * Display type within configurator (show, readonly, hidden)
     */
    export enum DisplayType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
