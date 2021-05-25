/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { System_Collections_Generic_KeyValuePair } from './System_Collections_Generic_KeyValuePair';

/**
 * Class DrillDownColumnVM.
 */
export type Webcom_API_RD_Configurator_DrillDownColumnVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: string;
    /**
     * Gets or sets the type.
     */
    Type?: Webcom_API_RD_Configurator_DrillDownColumnVM.Type;
    /**
     * Gets or sets the label.
     */
    Label?: string;
    /**
     * Gets or sets a value indicating whether this instance is enabled.
     */
    IsEnabled?: boolean;
    /**
     * Gets or sets the current value.
     */
    CurrentValue?: string;
    /**
     * Gets or sets the values.
     */
    Values?: Array<System_Collections_Generic_KeyValuePair>;
    /**
     * Gets or sets the image urls.
     */
    ImageUrls?: Array<string>;
    /**
     * Gets or sets the image alt attributes.
     */
    ImageAltAttributes?: Array<string>;
}

export namespace Webcom_API_RD_Configurator_DrillDownColumnVM {

    /**
     * Gets or sets the type.
     */
    export enum Type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
