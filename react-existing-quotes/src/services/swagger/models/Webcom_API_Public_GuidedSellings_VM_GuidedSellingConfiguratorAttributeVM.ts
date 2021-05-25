/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Public_GuidedSellings_VM_GuidedSellingContainerLayoutValueVM } from './Webcom_API_Public_GuidedSellings_VM_GuidedSellingContainerLayoutValueVM';

export type Webcom_API_Public_GuidedSellings_VM_GuidedSellingConfiguratorAttributeVM = {
    Id?: number;
    StandardAttributeCode?: number;
    Name?: string;
    Rank?: number;
    DisplayAs?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingConfiguratorAttributeVM.DisplayAs;
    ButtonText?: string;
    Values?: Array<string>;
    ContainerValue?: Webcom_API_Public_GuidedSellings_VM_GuidedSellingContainerLayoutValueVM;
    IsWholeRow?: boolean;
    DataType?: string;
}

export namespace Webcom_API_Public_GuidedSellings_VM_GuidedSellingConfiguratorAttributeVM {

    export enum DisplayAs {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_50' = 50,
        '_57' = 57,
        '_71' = 71,
        '_91' = 91,
        '_92' = 92,
        '_93' = 93,
        '_94' = 94,
        '_95' = 95,
        '_96' = 96,
        '_97' = 97,
        '_98' = 98,
        '_99' = 99,
        '_100' = 100,
        '_101' = 101,
        '_102' = 102,
        '_103' = 103,
        '_951' = 951,
        '_999' = 999,
    }


}
