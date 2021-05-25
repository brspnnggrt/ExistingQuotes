/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Users_VM_SelectedUnitOfMeasurementVM } from './Webcom_API_SetupSPA_Users_VM_SelectedUnitOfMeasurementVM';

/**
 * User personalization VM
 */
export type Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM = {
    /**
     * Default market id
     */
    DefaultMarketId?: number;
    /**
     * Default pricebook id
     */
    DefaultPricebookId?: number;
    /**
     * Selected dictionary
     */
    SelectedMLDictionary?: number;
    /**
     * Timezone
     */
    Timezone?: string;
    /**
     * Allow timezone change
     */
    AllowTimezoneChange?: boolean;
    /**
     * Show quotes within
     */
    ShowQuotesWithin?: number;
    /**
     * Date format
     */
    DateFormat?: Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM.DateFormat;
    /**
     * Date separator
     */
    DateSeparator?: Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM.DateSeparator;
    /**
     * Number format
     */
    NumberFormat?: string;
    /**
     * List of selected units of measurement
     */
    SelectedUnitOfMeasurements?: Array<Webcom_API_SetupSPA_Users_VM_SelectedUnitOfMeasurementVM>;
}

export namespace Webcom_API_SetupSPA_Users_VM_UserPersonalizationVM {

    /**
     * Date format
     */
    export enum DateFormat {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }

    /**
     * Date separator
     */
    export enum DateSeparator {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
