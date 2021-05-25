/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Custom responsive template view-model
 */
export type Webcom_API_Public_ResponsiveTemplates_VM_CustomResponsiveTemplateVM = {
    /**
     * Custom responsive template id
     */
    Id?: number;
    /**
     * System responsive template id
     */
    TemplateId?: number;
    /**
     * Custom responsive template name
     */
    Name: string;
    /**
     * Custom responsive template description
     */
    Description?: string;
    /**
     * Is custom responsive template set as default
     */
    IsDefault?: boolean;
    /**
     * Custom responsive template content
     */
    Content?: string;
    /**
     * Date and time when ustom responsive template is modified
     */
    ModifiedOn?: string;
    /**
     * Username of user who modified the custom responsive template
     */
    ModifiedBy?: string;
    /**
     * Unique system id
     */
    SystemId: string;
}
