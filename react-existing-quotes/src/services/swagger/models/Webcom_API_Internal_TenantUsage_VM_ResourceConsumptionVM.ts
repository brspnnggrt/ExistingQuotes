/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ResourceConsumptionVM
 */
export type Webcom_API_Internal_TenantUsage_VM_ResourceConsumptionVM = {
    /**
     * Gets or sets the name of the tenant.
     */
    TenantName?: string;
    /**
     * Gets or sets the size of the database in MB.
     */
    DBSize?: number;
    /**
     * Gets or sets the size of the file system.
     */
    FileSystemSize?: number;
    /**
     * Gets or sets the allowed size of the database in MB.If value is null, it means that the size is unlimited.
     */
    AllowedDBSize?: number;
    /**
     * Gets or sets the allowed size of file system in MB.If value is null, it means that the size is unlimited.
     */
    AllowedFileSystemSize?: number;
    /**
     * Gets or sets the allowed number of users.
     */
    AllowedNumberOfUsers?: number;
}
