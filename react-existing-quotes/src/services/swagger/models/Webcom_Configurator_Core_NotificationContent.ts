/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Configurator_Core_EmailList } from './Webcom_Configurator_Core_EmailList';
import type { Webcom_Configurator_Core_NotificationAttachment } from './Webcom_Configurator_Core_NotificationAttachment';

export type Webcom_Configurator_Core_NotificationContent = {
    notificationId?: number;
    NotificationContentId?: number;
    Subject?: string;
    Text?: string;
    NotificationId?: number;
    Condition?: string;
    Type?: number;
    Attachments?: Array<Webcom_Configurator_Core_NotificationAttachment>;
    EmailList?: Array<Webcom_Configurator_Core_EmailList>;
    readonly EntityIdentificator?: string;
    readonly EntityName?: string;
}
