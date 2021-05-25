/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Product script definition view-model
 */
export type Webcom_API_Public_Scripts_ProductScript_VM_ProductScriptDefinitionVM = {
    /**
     * Product script id
     */
    Id?: number;
    /**
     * Product script name
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
     * Unique system id
     */
    SystemId: string;
}
