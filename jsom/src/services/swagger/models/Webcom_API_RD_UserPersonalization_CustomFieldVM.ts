/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class that contains custom field properties
 */
export type Webcom_API_RD_UserPersonalization_CustomFieldVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets the value.
     */
    Value?: string;
    /**
     * Gets or sets the type of the field.
     */
    FieldType?: number;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.UserPersonalization.CustomFieldVM} is enabled.
     */
    Enabled?: boolean;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.UserPersonalization.CustomFieldVM} is required.
     */
    Required?: boolean;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.UserPersonalization.CustomFieldVM} is autocomplete.
     */
    IsAutocomplete?: boolean;
    /**
     * Gets or sets the drop down list of values.
     */
    DropDownListOfValues?: Array<string>;
    /**
     * Gets or sets stdAttrCodeIfAttribute.
     */
    StdAttrCode?: number;
    Placeholder?: string;
}
