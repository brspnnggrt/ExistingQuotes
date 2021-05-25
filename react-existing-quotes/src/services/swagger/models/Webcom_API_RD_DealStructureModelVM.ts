/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Deal structure request.
 */
export type Webcom_API_RD_DealStructureModelVM = {
    /**
     * Identifier.
     */
    Id?: number;
    /**
     * Quote identifier.
     */
    QuoteId?: number;
    /**
     * Hierarchy identifier.
     */
    HierarchyId?: string;
    /**
     * Section path.
     */
    SectionPath?: string;
    /**
     * Level.
     */
    Level?: number;
    /**
     * Can contain products flag.
     */
    CanContainProducts?: boolean;
    /**
     * Can be distributed flag.
     */
    CanBeDistributed?: boolean;
    /**
     * Rank.
     */
    Rank?: number;
    /**
     * Distribution parent path.
     */
    DistributionParentPath?: string;
    /**
     * Distribution percent.
     */
    DistributionPercent?: number;
    /**
     * Teams.
     */
    Teams?: string;
    /**
     * List of selected teams.
     */
    SelectedTeams?: Array<number>;
    /**
     * Can manage section flag.
     */
    CanManageSection?: boolean;
    /**
     * Custom fields dictionary.
     */
    CustomFields?: Record<string, any>;
    /**
     * Distribution method.
     */
    DistributionMethod?: number;
}
