/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_Configurator_Core_Action = {
    ActionId?: number;
    readonly CacheKey?: string;
    Name?: string;
    RepeaterFlag?: string;
    GlobalFlag?: string;
    FileName?: string;
    Background?: number;
    Placement?: string;
    CanChangeStatus?: boolean;
    CanPerformCrmMappings?: boolean;
    SortOrder?: number;
    ActionDisplayLevel?: boolean;
    Image?: string;
    LightningImg?: string;
    SortDisplay?: string;
    Script?: string;
    Type?: Webcom_Configurator_Core_Action.Type;
    ScriptEngineType?: number;
    GlobalCondition?: string;
    PreActionCondition?: string;
    PostActionCondition?: string;
    SystemId?: string;
    ModifiedById?: number;
    ModifiedByUsername?: string;
    DateModified?: string;
    ModifiedOn?: string;
    MLFields?: Record<string, string>;
    readonly MLName?: string;
    NotSupported?: boolean;
    readonly EntityIdentificator?: string;
    readonly EntityName?: string;
}

export namespace Webcom_Configurator_Core_Action {

    export enum Type {
        '_0' = 0,
        '_1' = 1,
    }


}
