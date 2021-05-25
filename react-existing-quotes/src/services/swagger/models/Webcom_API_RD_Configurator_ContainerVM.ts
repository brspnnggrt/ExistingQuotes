/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Configurator_ContainerColumnVM } from './Webcom_API_RD_Configurator_ContainerColumnVM';
import type { Webcom_API_RD_Configurator_ContainerProductVM } from './Webcom_API_RD_Configurator_ContainerProductVM';
import type { Webcom_API_RD_Configurator_ContainerRowVM } from './Webcom_API_RD_Configurator_ContainerRowVM';
import type { Webcom_API_RD_Configurator_VM_Container_ContainerPropertyVM } from './Webcom_API_RD_Configurator_VM_Container_ContainerPropertyVM';

/**
 * Class ContainerVM.
 */
export type Webcom_API_RD_Configurator_ContainerVM = {
    /**
     * Gets or sets a value indicating whether [allow multiple copy].
     */
    AllowMultipleCopy?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can add new rows.
     */
    CanAddNewRows?: boolean;
    /**
     * Gets or sets a value indicating whether this instance can reorder rows.
     */
    CanReorderRows?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has actions.
     */
    HasActions?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has any footer label.
     */
    HasAnyFooterLabel?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has any total.
     */
    HasAnyTotal?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has paging.
     */
    HasPaging?: boolean;
    /**
     * Gets or sets the current page.
     */
    CurrentPage?: number;
    /**
     * Gets or sets the size of the page.
     */
    PageSize?: number;
    /**
     * Gets or sets the total number of rows.
     */
    TotalNumberOfRows?: number;
    /**
     * Gets or sets a value indicating whether this instance has selection column.
     */
    HasSelectionColumn?: boolean;
    /**
     * Gets or sets the number of selected rows.
     */
    NumberOfSelectedRows?: number;
    /**
     * Gets or sets a value indicating whether [show only selected rows].
     */
    ShowOnlySelectedRows?: boolean;
    /**
     * Gets or sets the total number of shown rows.
     */
    TotalNumberOfShownRows?: number;
    /**
     * Gets or sets the columns.
     */
    Columns?: Array<Webcom_API_RD_Configurator_ContainerColumnVM>;
    /**
     * Gets or sets the hidden columns.
     */
    HiddenColumns?: Array<Webcom_API_RD_Configurator_ContainerColumnVM>;
    /**
     * Gets or sets the properties.
     */
    Properties?: Array<Webcom_API_RD_Configurator_VM_Container_ContainerPropertyVM>;
    /**
     * Gets or sets the rows.
     */
    Rows?: Array<Webcom_API_RD_Configurator_ContainerRowVM>;
    /**
     * Gets the failed validations.
     */
    readonly FailedValidations?: Array<string>;
    /**
     * Gets the products.
     */
    readonly Products?: Array<Webcom_API_RD_Configurator_ContainerProductVM>;
    /**
     * Gets or sets a value indicating whether product picker list should be shown.
     */
    ShowProductPickerList?: boolean;
    /**
     * Gets or sets an id of the sort column.
     */
    SortColumnId?: number;
    /**
     * Gets or sets a value indicating whether container is sorted din descending order.
     */
    SortDescending?: boolean;
}
