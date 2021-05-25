/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_IdNamePair } from './Webcom_API_IdNamePair';

/**
 * View Model for RD.SelectedUnitOfMeasurement represents the unit that needs to be preselected (user has selected it or default unit)
 */
export type Webcom_API_RD_UserPersonalization_MeasurementVM = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the unit of measurements.
     */
    UnitOfMeasurements?: Array<Webcom_API_IdNamePair>;
    /**
     * Gets or sets the selected unit of measurement identifier.
     */
    SelectedUnitOfMeasurementId?: number;
}
