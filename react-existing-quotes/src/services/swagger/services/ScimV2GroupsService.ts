/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Scim_Models_ScimV2Group } from '../models/Webcom_API_Scim_Models_ScimV2Group';
import type { Webcom_API_Scim_Models_ScimV2PatchGroupRequest } from '../models/Webcom_API_Scim_Models_ScimV2PatchGroupRequest';
import type { Webcom_API_Scim_Models_ScimV2ResourceQueryResponse } from '../models/Webcom_API_Scim_Models_ScimV2ResourceQueryResponse';
import { request as __request } from '../core/request';

export class ScimV2GroupsService {

    /**
     * Retrieve a list of groups
     * This endpoint enables retrieval of a collection of groups. The first 100 group members are retrieved in one call by default. To get a full list of group members (for example users), use GET user collection with a filter.             Example:                             /api/scim/v2/Groups?startIndex=5&amp;count=30
     * @param pagingParameterModelStartIndex 1-based starting index of the collection.
     * @param pagingParameterModelCount Maximum size of the returned collection.
     * @returns Webcom_API_Scim_Models_ScimV2ResourceQueryResponse<Webcom_API_Scim_Models_ScimV2Group> Groups are successfully retrieved.
     * @throws ApiError
     */
    public static async scimV2GroupsGetAllGroups(
        pagingParameterModelStartIndex?: number,
        pagingParameterModelCount?: number,
    ): Promise<Webcom_API_Scim_Models_ScimV2ResourceQueryResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/scim/v2/Groups`,
            query: {
                'pagingParameterModel.startIndex': pagingParameterModelStartIndex,
                'pagingParameterModel.count': pagingParameterModelCount,
            },
            errors: {
                400: `Invalid query parameters.`,
                401: `Unauthorized request.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

    /**
     * Retrieve details of a group
     * The first 100 group members are retrieved in one call by default. To get a full list of group members (for example users), use GET user collection with a filter.
     * @param id The group ID
     * @returns Webcom_API_Scim_Models_ScimV2Group The group is successfully retrieved.
     * @throws ApiError
     */
    public static async scimV2GroupsGetGroupById(
        id: string,
    ): Promise<Webcom_API_Scim_Models_ScimV2Group> {
        const result = await __request({
            method: 'GET',
            path: `/api/scim/v2/Groups/${id}`,
            errors: {
                401: `Unauthorized request.`,
                404: `Group not found.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

    /**
     * Unassign or assign users to a group
     * <para>We support matching with  operation.</para><para>For groups that represent a user type in SAP CPQ (suffixed with -USERTYPE), removing a group member will have no effect, while adding a group member will simultaneously remove the member from the original user type group.</para>
     * @param id The group ID
     * @param scimV2PatchGroupRequest The patch payload
     * @returns Webcom_API_Scim_Models_ScimV2Group The group is successfully patched.
     * @throws ApiError
     */
    public static async scimV2GroupsJsonPatchGroupById(
        id: string,
        scimV2PatchGroupRequest: Webcom_API_Scim_Models_ScimV2PatchGroupRequest,
    ): Promise<Webcom_API_Scim_Models_ScimV2Group> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/scim/v2/Groups/${id}`,
            body: scimV2PatchGroupRequest,
            errors: {
                400: `Invalid patch payload.`,
                401: `Unauthorized request.`,
                404: `Group not found.`,
                500: `Service internal error.`,
            },
        });
        return result.body;
    }

}