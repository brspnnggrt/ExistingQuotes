/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM = {
    certificatePath?: string;
    isDkim?: boolean;
    Id?: number;
    Selector?: string;
    Domain?: string;
    Active?: boolean;
    Encryption?: number;
    Certificate?: string;
    CertificatePublicKey?: string;
    CertificatePrivateKey?: string;
    CertificatePassword?: string;
    CertificateSettingsPurpose?: number;
    SoapUrl?: string;
    SelectedKeyOption?: Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM.SelectedKeyOption;
    KeySize?: Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM.KeySize;
}

export namespace Webcom_API_SetupSPA_CertificateManagement_VM_SystemCertificatesEntryDialogVM {

    export enum SelectedKeyOption {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
    }

    export enum KeySize {
        '_1024' = 1024,
        '_2048' = 2048,
        '_3072' = 3072,
    }


}
