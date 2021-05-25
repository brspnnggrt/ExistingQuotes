/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM } from '../models/Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM';
import type { Webcom_API_RD_Cart_InvolvedPartiesResponse } from '../models/Webcom_API_RD_Cart_InvolvedPartiesResponse';
import type { Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyRequest } from '../models/Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyRequest';
import type { Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm } from '../models/Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm';
import type { Webcom_API_RD_Cart_VM_BusinessPartners_UpdateBusinessPartnersRequest } from '../models/Webcom_API_RD_Cart_VM_BusinessPartners_UpdateBusinessPartnersRequest';
import type { Webcom_Configurator_Core_State } from '../models/Webcom_Configurator_Core_State';
import { request as __request } from '../core/request';

export class InvolvedPartiesService {

    /**
     * Gets involved parties.
     * @param getInvolvedPartiesRequestTabId TabId get set
     * @param getInvolvedPartiesRequestColumns Columns get set
     * @returns Webcom_API_RD_Cart_InvolvedPartiesResponse Get Involved Parties.
     * @throws ApiError
     */
    public static async involvedPartiesGetInvolvedParties(
        getInvolvedPartiesRequestTabId?: number,
        getInvolvedPartiesRequestColumns?: Array<string>,
    ): Promise<Webcom_API_RD_Cart_InvolvedPartiesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/InvolvedParties/GetInvolvedParties`,
            query: {
                'getInvolvedPartiesRequest.tabId': getInvolvedPartiesRequestTabId,
                'getInvolvedPartiesRequest.columns': getInvolvedPartiesRequestColumns,
            },
        });
        return result.body;
    }

    /**
     * Deleted Involved party by id.
     * @param id Identifier.
     * @returns any Delete Involved Party.
     * @throws ApiError
     */
    public static async involvedPartiesDeleteInvolvedParty(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/InvolvedParties/DeleteInvolvedParty`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Removes business partner by id.
     * @param id Identifier.
     * @returns any Remove Business Partner.
     * @throws ApiError
     */
    public static async involvedPartiesRemoveBusinessPartner(
        id: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/InvolvedParties/RemoveBusinessPartner`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Gets all valid partner functions for current quote.
     * @returns Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM Gets list of partner functions.
     * @throws ApiError
     */
    public static async involvedPartiesGetAllValidPartnerFunctions(): Promise<Array<Webcom_API_Public_BusinessPartners_VM_PartnerFunctionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/InvolvedParties/GetAllValidPartnerFunctions`,
        });
        return result.body;
    }

    /**
     * Adds involved party to the quote.
     * @param involvedPartyRequest Involved Party Request
     * @returns any Involved party successfully added to the quote.
     * @throws ApiError
     */
    public static async involvedPartiesAddInvolvedParty(
        involvedPartyRequest: Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyRequest,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/InvolvedParties/AddInvolvedParty`,
            body: involvedPartyRequest,
        });
        return result.body;
    }

    /**
     * Assign business partner to the partner function.
     * @param involvedPartyId Involved party identifier.
     * @param businessPartnerId Business partner identifier.
     * @returns any Involved party successfully assigned to partner function.
     * @throws ApiError
     */
    public static async involvedPartiesAssignBusinessPartner(
        involvedPartyId: number,
        businessPartnerId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/InvolvedParties/AssignBusinessPartner`,
            query: {
                'involvedPartyId': involvedPartyId,
                'businessPartnerId': businessPartnerId,
            },
        });
        return result.body;
    }

    /**
     * Get Involved Party By Id.
     * @param id Identifier.
     * @returns Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm Get Involved Party with specified identifier.
     * @throws ApiError
     */
    public static async involvedPartiesGetInvolvedPartyById(
        id: number,
    ): Promise<Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/InvolvedParties/GetInvolvedPartyById`,
            query: {
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Get Countries
     * @returns any Get list of countries.
     * @throws ApiError
     */
    public static async involvedPartiesGetCountries(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/InvolvedParties/GetCountries`,
        });
        return result.body;
    }

    /**
     * Get All States For Country
     * @param country Country.
     * @returns Webcom_Configurator_Core_State Get all states for country.
     * @throws ApiError
     */
    public static async involvedPartiesGetAllStatesForCountry(
        country: string,
    ): Promise<Array<Webcom_Configurator_Core_State>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/InvolvedParties/GetAllStatesForCountry`,
            query: {
                'country': country,
            },
        });
        return result.body;
    }

    /**
     * Update Business Partner
     * @param involvedPartyId Involved party identifier.
     * @param updateBusinessPartnersRequest Business partner request.
     * @returns any Update Business Partner with specified identifier.
     * @throws ApiError
     */
    public static async involvedPartiesUpdateBusinessPartner(
        involvedPartyId: number,
        updateBusinessPartnersRequest: Webcom_API_RD_Cart_VM_BusinessPartners_UpdateBusinessPartnersRequest,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/InvolvedParties/UpdateBusinessPartner`,
            query: {
                'involvedPartyId': involvedPartyId,
            },
            body: updateBusinessPartnersRequest,
        });
        return result.body;
    }

    /**
     * Update Partner Function
     * @param involvedPartyId Involved party identifier.
     * @param partnerFunctionId Partner function identifier.
     * @returns any Update Partner Function with specified identifier.
     * @throws ApiError
     */
    public static async involvedPartiesUpdatePartnerFunction(
        involvedPartyId: number,
        partnerFunctionId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/InvolvedParties/UpdatePartnerFunction`,
            query: {
                'involvedPartyId': involvedPartyId,
            },
            body: partnerFunctionId,
        });
        return result.body;
    }

    /**
     * @param query
     * @returns Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm Get Bussines Partners for specific search criteria.
     * @throws ApiError
     */
    public static async involvedPartiesSearchBusinessPartners(
        query: string,
    ): Promise<Array<Webcom_API_RD_Cart_VM_BusinessPartners_InvolvedPartyVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/InvolvedParties/SearchBusinessPartners`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

}