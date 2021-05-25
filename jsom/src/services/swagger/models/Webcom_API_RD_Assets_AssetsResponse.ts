/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Webcom_API_Common_Models_PagerVM } from './Webcom_API_Common_Models_PagerVM';
import type { Webcom_API_RD_Assets_AssetsColumnListVM } from './Webcom_API_RD_Assets_AssetsColumnListVM';
import type { Webcom_API_RD_Assets_AssetVM } from './Webcom_API_RD_Assets_AssetVM';

/**
 * Assets Response
 */
export type Webcom_API_RD_Assets_AssetsResponse = {
    /**
     * Gets or sets the column list.
     */
    ColumnList?: Array<Webcom_API_RD_Assets_AssetsColumnListVM>;
    /**
     * Gets or sets the assets.
     */
    Assets?: Array<Webcom_API_RD_Assets_AssetVM>;
    /**
     * Gets or sets the pager.
     */
    Pager?: Webcom_API_Common_Models_PagerVM;
}
