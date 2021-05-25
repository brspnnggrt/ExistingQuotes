/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_RD_Cart_CartActionsVM } from './Webcom_API_RD_Cart_CartActionsVM';
import type { Webcom_API_RD_Cart_CartTabsVM } from './Webcom_API_RD_Cart_CartTabsVM';
import type { Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm } from './Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm';

/**
 * Represents involved parties tab view model
 */
export type Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamsVM = {
    /**
     * Gets or sets the teams.
     */
    Teams?: Array<Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm>;
    /**
     * Gets or sets the name of the owner.
     */
    OwnerName?: string;
    /**
     * Gets or sets a value indicating whether user can manage teams.
     */
    CanUserManageTeams?: boolean;
    /**
     * Gets or sets the tabs data.
     */
    TabsData?: Webcom_API_RD_Cart_CartTabsVM;
    /**
     * Cart actions view model.
     */
    CartActionsModel?: Webcom_API_RD_Cart_CartActionsVM;
}
