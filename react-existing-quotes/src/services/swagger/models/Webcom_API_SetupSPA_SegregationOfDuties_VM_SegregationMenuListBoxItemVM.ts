/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents selected item
 */
export type Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationMenuListBoxItemVM = {
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
     * Is selected
     */
    IsSelected?: boolean;
    /**
     * Is collapsed
     */
    IsCollapsed?: boolean;
    /**
     * Is async
     */
    IsAsync?: boolean;
    VisibleAll?: boolean;
    /**
     * Show read only toggle
     */
    CanBeReadOnly?: boolean;
    /**
     * Children
     */
    Children?: Array<Webcom_API_SetupSPA_SegregationOfDuties_VM_SegregationMenuListBoxItemVM>;
}
