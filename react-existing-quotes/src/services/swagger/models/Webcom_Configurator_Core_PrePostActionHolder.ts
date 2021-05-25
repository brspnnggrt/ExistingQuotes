/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_Action } from './Webcom_Configurator_Core_Action';

export type Webcom_Configurator_Core_PrePostActionHolder = {
    Id?: number;
    StartStatusId?: number;
    MainActionId?: number;
    EndStatusId?: number;
    TabId?: number;
    Action?: Webcom_Configurator_Core_Action;
    Rank?: number;
}
