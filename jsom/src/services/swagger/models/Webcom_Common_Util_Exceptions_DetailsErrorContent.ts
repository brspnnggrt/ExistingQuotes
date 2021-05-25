/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_Common_Util_Exceptions_BasicErrorContent } from './Webcom_Common_Util_Exceptions_BasicErrorContent';

export type Webcom_Common_Util_Exceptions_DetailsErrorContent = {
    code?: string;
    message?: string;
    target?: string;
    details?: Array<Webcom_Common_Util_Exceptions_BasicErrorContent>;
    internalMessage?: string;
}
