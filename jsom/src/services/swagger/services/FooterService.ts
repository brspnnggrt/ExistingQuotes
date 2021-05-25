/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class FooterService {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static async footerGetFooterData(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/setup/api/v1/admin/footer`,
        });
        return result.body;
    }

}