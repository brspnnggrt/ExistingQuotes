/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Products_VM_ScriptHistoryRecordVM } from './Webcom_API_SetupSPA_Products_VM_ScriptHistoryRecordVM';

export type Webcom_API_SetupSPA_Products_VM_ProductScriptVM = {
    Id?: number;
    Name?: string;
    Description?: string;
    Active?: boolean;
    ModifiedBy?: string;
    DateModified?: string;
    StartDate?: string;
    EndDate?: string;
    Script?: string;
    ProductId?: number;
    ScriptEngineType?: number;
    EventIds?: Array<number>;
    HistoryRecords?: Array<Webcom_API_SetupSPA_Products_VM_ScriptHistoryRecordVM>;
    SystemId?: string;
}
