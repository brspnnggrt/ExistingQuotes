/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_Configurator_Catalogue_CatalogueFilterOptions = {
    InPromotion?: boolean;
    Search?: string;
    CategoryId?: number;
    Name?: string;
    Description?: string;
    PartNumber?: string;
    Type?: string;
    LowerPrice?: string;
    UpperPrice?: string;
    ProductIdCsv?: string;
    PageNumber?: number;
    PageSize?: number;
    IsAttributeBasedSearch?: boolean;
    SortOrderBy?: Webcom_Configurator_Catalogue_CatalogueFilterOptions.SortOrderBy;
    IsSortAscending?: boolean;
    SystemId?: string;
    SystemIdCsv?: string;
}

export namespace Webcom_Configurator_Catalogue_CatalogueFilterOptions {

    export enum SortOrderBy {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
