/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Multi list box item VM
 */
export type Webcom_API_SetupSPA_Common_MultiListBoxItemVM = {
    /**
     * Id
     */
    Id?: number;
    /**
     * Name
     */
    Name?: string;
    /**
     * Parent id
     */
    ParentId?: number;
    /**
     * Is visible
     */
    IsVisible?: boolean;
    /**
     * Is collapsed
     */
    IsCollapsed?: boolean;
    /**
     * Is async
     */
    IsAsync?: boolean;
    /**
     * Children
     */
    Children?: Array<Webcom_API_SetupSPA_Common_MultiListBoxItemVM>;
}
