/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class FormulaBuilderAttributeValueVM.
 */
export type Webcom_API_RD_Configurator_AttributeValueVM = {
    /**
     * Gets or sets the image off.
     */
    ImageOff?: string;
    /**
     * Gets or sets the image on.
     */
    ImageOn?: string;
    /**
     * Gets or sets the image off.
     */
    ImageOffAltText?: string;
    /**
     * Gets or sets the image on.
     */
    ImageOnAltText?: string;
    /**
     * Gets or sets the pa v_ identifier.
     */
    PAV_ID?: number;
    /**
     * Gets or sets the product system id.
     */
    ProductSystemId?: string;
    /**
     * Gets or sets a value indicating whether this {Webcom.API.RD.Configurator.AttributeValueVM} is selected.
     */
    Selected?: boolean;
    /**
     * Gets or sets the value display.
     */
    ValueDisplay?: string;
    /**
     * Gets or sets the quantity.
     */
    Quantity?: string;
    /**
     * Gets or sets the description.
     */
    Description?: string;
    /**
     * Gets or sets the price.
     */
    Price?: string;
    /**
     * Gets or sets the relative price.
     */
    RelativePrice?: string;
    /**
     * Gets or sets a value indicating whether this instance is relative price bigger then selected.
     */
    IsRelativePriceBigger?: boolean;
    /**
     * Gets or sets the recurring price.
     */
    RecurringPrice?: string;
    /**
     * Gets or sets the value code.
     */
    ValueCode?: string;
    /**
     * Gets or sets the contract duration unit.
     */
    Unit?: Webcom_API_RD_Configurator_AttributeValueVM.Unit;
    /**
     * Gets or sets translated attribute value price period.
     */
    PricePeriod?: string;
}

export namespace Webcom_API_RD_Configurator_AttributeValueVM {

    /**
     * Gets or sets the contract duration unit.
     */
    export enum Unit {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }


}
