/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_Action } from './Webcom_Configurator_Core_Action';
import type { Webcom_Configurator_Core_Notification } from './Webcom_Configurator_Core_Notification';
import type { Webcom_Configurator_Core_OrderStatusDefn } from './Webcom_Configurator_Core_OrderStatusDefn';
import type { Webcom_Configurator_Core_PrePostActionHolder } from './Webcom_Configurator_Core_PrePostActionHolder';

export type Webcom_Configurator_Core_WorkflowTransition = {
    OwnerId?: number;
    CartId?: number;
    StartStatus?: Webcom_Configurator_Core_OrderStatusDefn;
    MainAction?: Webcom_Configurator_Core_Action;
    EndStatus?: Webcom_Configurator_Core_OrderStatusDefn;
    TabId?: number;
    AutoReconfigure?: boolean;
    ConditionalReconfigure?: boolean;
    Condition?: string;
    PreActions?: Array<Webcom_Configurator_Core_PrePostActionHolder>;
    PostActions?: Array<Webcom_Configurator_Core_PrePostActionHolder>;
    Notifications?: Array<Webcom_Configurator_Core_Notification>;
    PromptForUpgrade?: boolean;
    AutomaticallyUpgrade?: boolean;
    ActionDisabledIfAnyItemIsIncompleteOrInconsistent?: boolean;
}
