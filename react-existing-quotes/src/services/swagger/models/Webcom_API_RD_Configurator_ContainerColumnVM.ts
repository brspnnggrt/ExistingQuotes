/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class ContainerColumnVM.
 */
export type Webcom_API_RD_Configurator_ContainerColumnVM = {
    /**
     * Gets or sets the column identifier.
     */
    ColumnId?: number;
    /**
     * Gets or sets the header label.
     */
    HeaderLabel?: string;
    /**
     * Gets or sets the footer label.
     */
    FooterLabel?: string;
    /**
     * Gets or sets the total value.
     */
    TotalValue?: string;
    /**
     * Gets or sets the standard attribute code of referenced attribute.
     */
    ReferencedStdAttrCode?: number;
    /**
     * Gets or sets flag indicating column is autocomplete.
     */
    IsAutocomplete?: boolean;
    /**
     * Gets or sets columns to display for autocomplete
     */
    ColumnsToDisplay?: string;
    /**
     * Gets or sets the flag indicating if the column has the permission required.
     */
    Required?: boolean;
}
