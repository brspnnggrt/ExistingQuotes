/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM = {
    /**
     * Gets or sets information about the default view.
     */
    ActiveView?: string;
    /**
     * Gets or sets the view details settings.
     */
    ViewDetailsSettings?: Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM.ViewDetailsSettings;
    /**
     * Gets or sets information about default sorting type.
     */
    SortedBy?: string;
}

export namespace Webcom_API_RD_Catalog_VM_FavoritesViewDefaultDataVM {

    /**
     * Gets or sets the view details settings.
     */
    export enum ViewDetailsSettings {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
    }


}
