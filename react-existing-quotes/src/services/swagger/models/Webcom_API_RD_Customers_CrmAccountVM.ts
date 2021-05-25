/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Customers_CrmObjectInfo } from './Webcom_Configurator_Customers_CrmObjectInfo';

/**
 * Class CrmAccountVM.
 */
export type Webcom_API_RD_Customers_CrmAccountVM = {
    /**
     * Gets or sets the account.
     */
    Account?: Webcom_Configurator_Customers_CrmObjectInfo;
    /**
     * Gets or sets the partner accounts.
     */
    PartnerAccounts?: Array<Webcom_Configurator_Customers_CrmObjectInfo>;
    /**
     * Gets or sets the child accounts.
     */
    ChildAccounts?: Array<Webcom_Configurator_Customers_CrmObjectInfo>;
    /**
     * Gets or sets the other accounts.
     */
    OtherAccounts?: Array<Webcom_Configurator_Customers_CrmObjectInfo>;
    /**
     * Gets or sets a value indicating whether [display partner accounts].
     */
    DisplayPartnerAccounts?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has partner accounts.
     */
    HasPartnerAccounts?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has child accounts.
     */
    HasChildAccounts?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has other accounts.
     */
    HasOtherAccounts?: boolean;
    /**
     * Gets or sets a value indicating whether [show other accounts].
     */
    ShowOtherAccounts?: boolean;
    /**
     * Gets or sets the account type name ml.
     */
    AccountTypeNameMl?: string;
    /**
     * Gets or sets the tab.
     */
    Tab?: Webcom_API_RD_Customers_CrmAccountVM.Tab;
    /**
     * Gets or sets the related accounts name ml.
     */
    RelatedAccountsNameMl?: string;
    /**
     * Gets or sets a value indicating whether this instance has selected contact.
     */
    HasSelectedContact?: boolean;
    /**
     * Gets or sets the selected contact.
     */
    SelectedContact?: Webcom_Configurator_Customers_CrmObjectInfo;
}

export namespace Webcom_API_RD_Customers_CrmAccountVM {

    /**
     * Gets or sets the tab.
     */
    export enum Tab {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }


}
