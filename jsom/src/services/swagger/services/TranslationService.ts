/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_NameValuePair } from '../models/Webcom_API_NameValuePair';
import { request as __request } from '../core/request';

export class TranslationService {

    /**
     * Get a values from current dictionary for keys param
     * @param keys Dictionary keys
     * @returns Webcom_API_NameValuePair OK
     * @throws ApiError
     */
    public static async translationTranslate(
        keys: Array<string>,
    ): Promise<Array<Webcom_API_NameValuePair>> {
        const result = await __request({
            method: 'POST',
            path: `/setup/api/v1/admin/translations/translate`,
            body: keys,
        });
        return result.body;
    }

}