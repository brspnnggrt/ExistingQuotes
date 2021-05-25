/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_Configurator_Core_Clm_ClmStatusMapping = {
    Id?: number;
    ContractId?: number;
    ContractType?: string;
    CpqStatusId?: number;
    ClmStatusId?: number;
    ClmStatusName?: string;
    Direction?: Webcom_Configurator_Core_Clm_ClmStatusMapping.Direction;
    readonly EntityIdentificator?: string;
    readonly EntityName?: string;
}

export namespace Webcom_Configurator_Core_Clm_ClmStatusMapping {

    export enum Direction {
        '_0' = 0,
        '_1' = 1,
    }


}
