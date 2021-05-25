/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptEventVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptEventVM';

export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptVM = {
    /**
     * Guided selling script id
     */
    Id?: number;
    /**
     * Guided selling script system id
     */
    SystemId?: string;
    /**
     * Guided selling script name
     */
    Name?: string;
    /**
     * Description
     */
    Description?: string;
    /**
     * User name of user who created/edited script
     */
    ModifiedBy?: string;
    /**
     * Is script active
     */
    Active?: boolean;
    /**
     * Date when this script is modified
     */
    ModifiedOn?: string;
    /**
     * Start Date
     */
    StartDate?: string;
    /**
     * End Date
     */
    EndDate?: string;
    /**
     * Script
     */
    Script?: string;
    /**
     * Is Global
     */
    IsGlobal?: boolean;
    /**
     * Is Module
     */
    IsModule?: boolean;
    /**
     * Force proxy generation
     */
    ForceProxyGeneration?: boolean;
    /**
     * Array of events for this script
     */
    Events?: Array<Webcom_API_Public_GuidedSellings_VM_GuidedSellingScriptEventVM>;
}
