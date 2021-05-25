/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamMemberVm } from './Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamMemberVm';

/**
 * Represents Quote team View model
 */
export type Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets the role.
     */
    Role?: number;
    /**
     * Gets or sets the members.
     */
    Members?: Array<Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamMemberVm>;
    /**
     * Gets or sets the sections.
     */
    Sections?: Array<number>;
}
