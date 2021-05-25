/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_SetupSPA_Common_LookupVM } from './Webcom_API_SetupSPA_Common_LookupVM';

export type Webcom_API_SetupSPA_GuestUser_GuestUserVM = {
    CustomMessage?: string;
    SingleSignOnKey?: string;
    SingleSignOnVector?: string;
    SendSingleSignOnLink?: boolean;
    User?: string;
    CanNotAddQuote?: boolean;
    CanProceedWithOutRegistration?: boolean;
    CanSystemPrePopulateCustomerRoleBased?: boolean;
    UserTypeId?: number;
    ExpirationPeriod?: number;
    OrderingParentId?: number;
    ManagingParentId?: number;
    OptionalFields?: Array<number>;
    AllowUserRegistration?: boolean;
    RegisterUserAsActive?: boolean;
    AvailableAdministrators?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
    SelectedAdministrators?: Array<Webcom_API_SetupSPA_Common_LookupVM>;
}
