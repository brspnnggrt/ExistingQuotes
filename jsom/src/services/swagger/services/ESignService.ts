/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { request as __request } from '../core/request';

export class ESignService {

    /**
     * Process callback requst from AdobeSign system based on provide query string parameters
     * @param domain Target CPQ domain name
     * @param documentKey Agreement id in AdobeSign system
     * @param eventType Type of the event the fires callback call
     * @param status Adobe sign statu in which document currently is
     * @returns void
     * @throws ApiError
     */
    public static async eSignCallback(
        domain: string,
        documentKey: string,
        eventType: string,
        status: string,
    ): Promise<void> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/ESign/Callback`,
            query: {
                'domain': domain,
                'documentKey': documentKey,
                'eventType': eventType,
                'status': status,
            },
        });
        return result.body;
    }

}