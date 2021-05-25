/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_GeoIP_GeoIPLoginRequest } from '../models/Webcom_API_RD_GeoIP_GeoIPLoginRequest';
import type { Webcom_API_RD_GeoIP_GeoIPLoginResponse } from '../models/Webcom_API_RD_GeoIP_GeoIPLoginResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class CoreService {

    /**
     * Logs the error.
     * @param message The message.
     * @param url The URL.
     * @param line The line.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async coreLogError(
        message: string,
        url: string,
        line: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/LogError`,
            query: {
                'message': message,
                'url': url,
                'line': line,
            },
        });
        return result.body;
    }

    /**
     * Refreshes the session.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async coreRefreshSession(): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Core/RefreshSession`,
        });
        return result.body;
    }

    /**
     * Logs the in.
     * @param username The username.
     * @param password The password.
     * @param domain The domain.
     * @param hideMenu if set to true [hide menu].
     * @returns string OK
     * @throws ApiError
     */
    public static async coreLogIn(
        username: string,
        password: string,
        domain: string,
        hideMenu?: boolean,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/LogIn`,
            query: {
                'username': username,
                'password': password,
                'domain': domain,
                'hideMenu': hideMenu,
            },
        });
        return result.body;
    }

    /**
     * Logs the in guest user.
     * @param username The username.
     * @param password The password.
     * @returns string OK
     * @throws ApiError
     */
    public static async coreLogInGuestUser(
        username: string,
        password: string,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/LogInGuestUser`,
            query: {
                'username': username,
                'password': password,
            },
        });
        return result.body;
    }

    /**
     * Logs the user in with JWT.To use this method you must first define shared secret in Setup/Application parameters.Algorithm used is HS256 so header isheader: {     }            Token should be sent in request authorization header like below.Authorization: Bearer [token]
     * @returns string OK
     * @throws ApiError
     */
    public static async coreLogInJwt(): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/LogInJWT`,
        });
        return result.body;
    }

    /**
     * Generates **JWT** token using **OWIN** token for Authentication
     * Token will be look like this when decoded:                 {             }            Token is encoded with **HS256** and signature is verified using **JWTSharedSecret**.  Domain and username are taken from Owin token if Authentication is valid.
     * @returns string JWT Token
     * @throws ApiError
     */
    public static async coreGenerateJwt(): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/GenerateJWT`,
            errors: {
                401: `Owin token authentication fail`,
                405: `JWTSharedSecret not configured`,
                500: `Error generating token`,
            },
        });
        return result.body;
    }

    /**
     * Logins to CPQ from salesforce.
     * @param sessionId The SF session identifier.
     * @param sfApiUrl The SF API URL.
     * @param sfApiPassword The SF API password as set in CPQ.
     * @param domainName Name of the CPQ domain.
     * @param opportunityId The SF opportunity identifier. This parameter is optional and should be provided if e.g. Create/Update Opportunity CPQ action is called via API.
     * @returns string OK
     * @throws ApiError
     */
    public static async coreLoginFromSalesforce(
        sessionId: string,
        sfApiUrl: string,
        sfApiPassword: string,
        domainName: string,
        opportunityId?: string,
    ): Promise<string> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/LoginFromSalesforce`,
            query: {
                'sessionId': sessionId,
                'sfApiUrl': sfApiUrl,
                'sfApiPassword': sfApiPassword,
                'domainName': domainName,
                'opportunityId': opportunityId,
            },
        });
        return result.body;
    }

    /**
     * Login using Geo iP, this will be caled from external  app para
     * @param request Request from external service
     * @returns Webcom_API_RD_GeoIP_GeoIPLoginResponse OK
     * @throws ApiError
     */
    public static async coreLoginGeoIp(
        request: Webcom_API_RD_GeoIP_GeoIPLoginRequest,
    ): Promise<Webcom_API_RD_GeoIP_GeoIPLoginResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Core/LoginGeoIP`,
            body: request,
        });
        return result.body;
    }

}