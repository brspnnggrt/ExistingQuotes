/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM = {
    Id?: number;
    Selector?: string;
    Domain?: string;
    EncryptionAlgorithm?: string;
    KeyData?: string;
    Active?: boolean;
    ValidFrom?: string;
    ValidTo?: string;
    Issuer?: string;
    Subject?: string;
    Thumbprint?: string;
    SoapUrl?: string;
    Purpose?: string;
    CertificateSettingsPurpose?: Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM.CertificateSettingsPurpose;
}

export namespace Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesTableRowVM {

    export enum CertificateSettingsPurpose {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
