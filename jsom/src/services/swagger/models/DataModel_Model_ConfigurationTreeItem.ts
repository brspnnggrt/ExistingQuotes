/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataModel_Model_ConfigurationTreeItem_AdditionalData } from './DataModel_Model_ConfigurationTreeItem_AdditionalData';

export type DataModel_Model_ConfigurationTreeItem = {
    Name?: string;
    IsComplete?: boolean;
    HasRequiredAttribute?: boolean;
    ContainerData?: DataModel_Model_ConfigurationTreeItem_AdditionalData;
    IncompleteAttributes?: Array<string>;
    Children?: Array<DataModel_Model_ConfigurationTreeItem>;
}
