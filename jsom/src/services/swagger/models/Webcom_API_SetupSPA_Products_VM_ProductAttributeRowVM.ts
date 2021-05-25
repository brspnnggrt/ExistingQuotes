/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data for product attributes grid
 */
export type Webcom_API_SetupSPA_Products_VM_ProductAttributeRowVM = {
    /**
     * Id
     */
    Id?: number;
    /**
     * Standard attribute code, this is not visible in table, but it is used for accessing attribute info if user click edit
     */
    StandardAttributeCode?: number;
    /**
     * Attribute name
     */
    Name?: string;
    /**
     * Is line Item
     */
    IsLineItem?: boolean;
    /**
     * Display type (Drop down...)
     */
    DisplayType?: string;
    /**
     * Translate type label (Dropdown...)
     */
    TypeLabel?: string;
    /**
     * Display type (Drop down...)
     */
    NumberOfValues?: string;
    /**
     * Is attribute displayed
     */
    Tabs?: string;
    /**
     * Product id
     */
    ProductId?: number;
    /**
     * Is attribute required
     */
    IsRequired?: boolean;
    SystemId?: string;
    Type?: string;
}
