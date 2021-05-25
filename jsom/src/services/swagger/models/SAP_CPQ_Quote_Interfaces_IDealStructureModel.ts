/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SAP_CPQ_Quote_Interfaces_IDealStructureModel = {
    Id?: number;
    QuoteId?: number;
    HierarchyId?: string;
    SectionPath?: string;
    Level?: number;
    CanContainProducts?: boolean;
    CanBeDistributed?: boolean;
    Rank?: number;
    DistributionParentPath?: string;
    DistributionPercent?: number;
    Teams?: string;
    SelectedTeams?: Array<number>;
    CanManageSection?: boolean;
    CustomFields?: Record<string, any>;
    DistributionMethod?: number;
}
