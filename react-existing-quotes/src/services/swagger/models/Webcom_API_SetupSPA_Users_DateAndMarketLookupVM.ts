/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';
import type { Webcom_API_SetupSPA_Users_VM_MeasurementVM } from './Webcom_API_SetupSPA_Users_VM_MeasurementVM';

/**
 * Date and market lookup view model
 */
export type Webcom_API_SetupSPA_Users_DateAndMarketLookupVM = {
    DateFormats?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    DateSeparators?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    NumberFormats?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    TimeZones?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    Measurements?: Array<Webcom_API_SetupSPA_Users_VM_MeasurementVM>;
}
