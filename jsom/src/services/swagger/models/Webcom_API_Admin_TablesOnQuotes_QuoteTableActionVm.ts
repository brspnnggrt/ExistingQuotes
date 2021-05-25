/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents Quote table action
 */
export type Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm = {
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the name.
     */
    Name?: string;
    /**
     * Gets or sets a value indicating whether this instance is active.
     */
    IsActive?: boolean;
    /**
     * Gets or sets the script.
     */
    Script?: string;
    /**
     * Gets or sets the pre action script.
     */
    PreActionScript?: string;
    /**
     * Gets or sets the post action script.
     */
    PostActionScript?: string;
    /**
     * Gets or sets the permissions.
     */
    Permissions?: Array<number>;
    /**
     * Gets or sets the type of the action.
     */
    ActionType?: Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm.ActionType;
    /**
     * Gets or sets the force proxy generation options.
     */
    ForceProxyGenerationOptions?: Array<1 | 2 | 3>;
}

export namespace Webcom_API_Admin_TablesOnQuotes_QuoteTableActionVm {

    /**
     * Gets or sets the type of the action.
     */
    export enum ActionType {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }


}
