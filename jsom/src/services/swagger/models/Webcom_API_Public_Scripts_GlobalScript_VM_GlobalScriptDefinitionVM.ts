/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Global script definition view-model
 */
export type Webcom_API_Public_Scripts_GlobalScript_VM_GlobalScriptDefinitionVM = {
    /**
     * Id
     */
    Id?: number;
    /**
     * Name of script
     */
    Name: string;
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
    Active: boolean;
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
     * Is Module
     */
    IsModule?: boolean;
    /**
     * Unique system id
     */
    SystemId: string;
}
