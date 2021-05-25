/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class JobVM
 */
export type Webcom_API_Admin_BulkImportExport_VM_JobVM = {
    /**
     * Gets or sets job id.
     */
    JobId?: string;
    /**
     * Gets or sets job type.
     */
    Type?: Webcom_API_Admin_BulkImportExport_VM_JobVM.Type;
    /**
     * Gets or sets job status.
     */
    Status?: Webcom_API_Admin_BulkImportExport_VM_JobVM.Status;
    /**
     * Gets or sets resulted file link.
     */
    FileLink?: string;
    /**
     * Gets or sets the time when job is created.
     */
    CreatedOn?: string;
    /**
     * Gets or sets who runned the job.
     */
    RunnedByUserName?: string;
    /**
     * Gets or sets job progress.
     */
    Progress?: number;
    /**
     * Gets or sets a value indicating whether email is requested.
     */
    RequestEmail?: boolean;
    /**
     * Gets or sets a value indicating whether request email checkbox is shown.
     */
    ShowRequestEmailCheckbox?: boolean;
}

export namespace Webcom_API_Admin_BulkImportExport_VM_JobVM {

    /**
     * Gets or sets job type.
     */
    export enum Type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
        '_6' = 6,
        '_7' = 7,
        '_8' = 8,
        '_9' = 9,
        '_10' = 10,
        '_11' = 11,
        '_12' = 12,
        '_50' = 50,
    }

    /**
     * Gets or sets job status.
     */
    export enum Status {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5,
    }


}
