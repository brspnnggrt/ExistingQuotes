/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_Public_Configurations_ConfigurationContextVM } from '../models/Webcom_API_Public_Configurations_ConfigurationContextVM';
import type { Webcom_API_Public_Configurations_ViewModel_ChangeAttributeValueQuantityVM } from '../models/Webcom_API_Public_Configurations_ViewModel_ChangeAttributeValueQuantityVM';
import type { Webcom_API_Public_Configurations_ViewModel_ChangeAttributeValueVM } from '../models/Webcom_API_Public_Configurations_ViewModel_ChangeAttributeValueVM';
import type { Webcom_API_Public_Configurations_ViewModel_ChangeLanguageVM } from '../models/Webcom_API_Public_Configurations_ViewModel_ChangeLanguageVM';
import type { Webcom_API_Public_Configurations_ViewModel_CloneConfigurationVM } from '../models/Webcom_API_Public_Configurations_ViewModel_CloneConfigurationVM';
import type { Webcom_API_Public_Configurations_ViewModel_ConfigurationVM } from '../models/Webcom_API_Public_Configurations_ViewModel_ConfigurationVM';
import type { Webcom_API_Public_Configurations_ViewModel_CreateConfigurationRequestVM } from '../models/Webcom_API_Public_Configurations_ViewModel_CreateConfigurationRequestVM';
import type { Webcom_API_Public_Configurations_ViewModel_CreateConfigurationResponseVM } from '../models/Webcom_API_Public_Configurations_ViewModel_CreateConfigurationResponseVM';
import type { Webcom_API_Public_Configurations_ViewModel_CreateUpdateConfigurationContextVM } from '../models/Webcom_API_Public_Configurations_ViewModel_CreateUpdateConfigurationContextVM';
import type { Webcom_API_Public_Configurations_ViewModel_UpdateConfigurationVM } from '../models/Webcom_API_Public_Configurations_ViewModel_UpdateConfigurationVM';
import type { Webcom_API_RD_Configurator_ConfiguratorResponse } from '../models/Webcom_API_RD_Configurator_ConfiguratorResponse';
import { request as __request } from '../core/request';

export class ConfigurationsService {

    /**
     * Creates configuration for the product with the specified system ID and initializes the Configurator.
     * @param createConfigurationVm Create configuration metadata.
     * @returns Webcom_API_Public_Configurations_ViewModel_CreateConfigurationResponseVM Configuration created successfully.
     * @throws ApiError
     */
    public static async configurationsCreateConfiguration(
        createConfigurationVm: Webcom_API_Public_Configurations_ViewModel_CreateConfigurationRequestVM,
    ): Promise<Webcom_API_Public_Configurations_ViewModel_CreateConfigurationResponseVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/configuration/v1/configurations`,
            body: createConfigurationVm,
            errors: {
                404: `Product not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the model of the active tab for the specified configuration.
     * If the provided tabId is not the same as the tabId in the current session, the new tab with the provided tabId will be set as the active one in the session.
     * @param configurationId Unique configuration ID.
     * @param tabId Tab ID.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse Configuration tab model with the specified ID.
     * @throws ApiError
     */
    public static async configurationsGetTabModel(
        configurationId: string,
        tabId?: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/configuration/v1/configurations/${configurationId}/display`,
            query: {
                'tabId': tabId,
            },
            errors: {
                400: `Configuration cannot be loaded.`,
                403: `User or scope are unauthorized. Or user is not the configuration owner.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Changes the attribute value for the specified configuration.
     * ChangeAttributeValueVM has three properties. Only one property should be present. If there is more than one property HTTP bad request is returned.AttributeValueIds should be used if user wants to change selection of all product attributes except free input product attributes.UserInput should be used if user wants to change value of a free input product attribute.Quantity should be used if user wants to change quantity of a product attribute.
     * @param standardAttributeCode Standard attribute code.
     * @param configurationId Unique configuration ID.
     * @param changeAttributeValueVm Attribute value VM for update.
     * @returns any Attribute value changed successfully.
     * @throws ApiError
     */
    public static async configurationsChangeAttributeValue(
        standardAttributeCode: number,
        configurationId: string,
        changeAttributeValueVm: Webcom_API_Public_Configurations_ViewModel_ChangeAttributeValueVM,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/configuration/v1/configurations/${configurationId}/attributes/${standardAttributeCode}`,
            body: changeAttributeValueVm,
            errors: {
                403: `User or scope are unauthorized. Or user is not configuration owner. Or update is not available because the configuration is permanent.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Changes the attribute value quantity for the specified configuration.
     * @param standardAttributeCode Standard attribute code.
     * @param attributeValueId Attribute value IDs in CSV form.
     * @param configurationId Unique configuration ID.
     * @param changeAttributeValueQuantityVm View model for changing attribute value quantity.
     * @returns any Attribute value quantity changed successfully.
     * @throws ApiError
     */
    public static async configurationsChangeAttributeValueQuantity(
        standardAttributeCode: number,
        attributeValueId: string,
        configurationId: string,
        changeAttributeValueQuantityVm: Webcom_API_Public_Configurations_ViewModel_ChangeAttributeValueQuantityVM,
    ): Promise<any> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/configuration/v1/configurations/${configurationId}/attributes/${standardAttributeCode}/attributeValues/${attributeValueId}`,
            body: changeAttributeValueQuantityVm,
            errors: {
                403: `User or scope are unauthorized. Or user is not configuration owner. Or update is not available because the configuration is permanent.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the configuration by the specified configuration ID.
     * The following query parameter is supported:     $expand: use this parameter to specify the list of sub nodes which need to be included in the response. By default, only the configuration is returned. The keywords for $expand are: All and ConfigurationContext. Example: $expand = ConfigurationContext (configurationContext will be added in response, besides the configuration).
     * @param configurationId Unique configuration ID.
     * @returns Webcom_API_Public_Configurations_ViewModel_ConfigurationVM Configuration with the specified configuration ID.
     * @throws ApiError
     */
    public static async configurationsGetConfiguration(
        configurationId: string,
    ): Promise<Webcom_API_Public_Configurations_ViewModel_ConfigurationVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/configuration/v1/configurations/${configurationId}`,
            errors: {
                400: `The key word 'all' should not exist in current query string.`,
                403: `User or scope are unauthorized. Or user is not the configuration owner.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Deletes the configuration with the specified configuration ID.
     * Deleting permanent configurations is not allowed with user scope.
     * @param configurationId Unique configuration ID.
     * @returns void
     * @throws ApiError
     */
    public static async configurationsDeleteConfiguration(
        configurationId: string,
    ): Promise<void> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/configuration/v1/configurations/${configurationId}`,
            errors: {
                403: `User or scope are unauthorized. Or user is not configuration owner. Or update is not available because the configuration is permanent.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Updates the header level fields of the configuration with the specified configuration ID.
     * Only header level fields of configuration are updated.
     * @param configurationId Unique configuration ID.
     * @param configurationFields Configuration fields for update.
     * @returns void
     * @throws ApiError
     */
    public static async configurationsUpdateConfiguration(
        configurationId: string,
        configurationFields: Webcom_API_Public_Configurations_ViewModel_UpdateConfigurationVM,
    ): Promise<void> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/configuration/v1/configurations/${configurationId}`,
            body: configurationFields,
            errors: {
                403: `User or scope are unauthorized. Or user is not the configuration owner.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Clones the configuration with the specified configuration ID.
     * If IsPermanent flag is not provided, IsPermanent flag will be the same as in the source configuration. Non-permanent configurations cannot be cloned as permanent. Cloning configurations as permanent is not allowed when there is user scope.
     * @param configurationId Unique configuration ID.
     * @param configurationFields Configuration fields to be cloned.
     * @returns Webcom_API_Public_Configurations_ViewModel_CreateConfigurationResponseVM Configuration with the specified ID cloned successfully.
     * @throws ApiError
     */
    public static async configurationsClone(
        configurationId: string,
        configurationFields: Webcom_API_Public_Configurations_ViewModel_CloneConfigurationVM,
    ): Promise<Webcom_API_Public_Configurations_ViewModel_CreateConfigurationResponseVM> {
        const result = await __request({
            method: 'POST',
            path: `/api/configuration/v1/configurations/${configurationId}/clone`,
            body: configurationFields,
            errors: {
                403: `User or scope are unauthorized. Or user is not configuration owner. Or update is not available because the configuration is permanent. Or non-permanent configuration cannot be cloned as permanent. Or user is not allowed to clone any configuration as permanent.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Creates or updates the configuration context for the specified owner ID.
     * OwnerId in configuration context is required.
     * @param configurationContextVm Configuration context.
     * @returns any Configuration Context created successfully.
     * @throws ApiError
     */
    public static async configurationsCreateOrUpdateConfigurationContext(
        configurationContextVm: Webcom_API_Public_Configurations_ViewModel_CreateUpdateConfigurationContextVM,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/configuration/v1/configurations/configurationContext`,
            body: configurationContextVm,
            errors: {
                400: `Configuration context contains invalid characteristics.`,
                403: `User or scope are unauthorized.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Partially updates the configuration context for the current session.
     * Currently, only the change of language in the current configuration context is supported. The change is persisted for the configuration context of the current owner ID.The change of language will be applicable for all the following product configurations made by the current owner.
     * @param changeLanguageVm Language ISO code
     * @returns void
     * @throws ApiError
     */
    public static async configurationsChangeConfigurationContextLanguage(
        changeLanguageVm: Webcom_API_Public_Configurations_ViewModel_ChangeLanguageVM,
    ): Promise<void> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/configuration/v1/configurations/configurationContext`,
            body: changeLanguageVm,
            errors: {
                400: `Configuration context contains invalid characteristics.`,
                403: `User or scope are unauthorized.`,
                404: `Configuration context not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Gets the configuration context for the specified configuration.
     * @param configurationId Unique configuration ID.
     * @returns Webcom_API_Public_Configurations_ConfigurationContextVM Configuration context with the specified configuration ID.
     * @throws ApiError
     */
    public static async configurationsGetConfigurationContextCharacteristics(
        configurationId: string,
    ): Promise<Webcom_API_Public_Configurations_ConfigurationContextVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/configuration/v1/configurations/${configurationId}/configurationContext`,
            errors: {
                403: `User or scope are unauthorized.`,
                404: `Configuration context not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

    /**
     * Partially updates the configuration context for the specified configuration.
     * @param configurationId Unique configuration ID.
     * @param configurationContextVm Configuration context changes.
     * @returns void
     * @throws ApiError
     */
    public static async configurationsChangeConfigurationContext(
        configurationId: string,
        configurationContextVm: Webcom_API_Public_Configurations_ConfigurationContextVM,
    ): Promise<void> {
        const result = await __request({
            method: 'PATCH',
            path: `/api/configuration/v1/configurations/${configurationId}/configurationContext`,
            body: configurationContextVm,
            errors: {
                400: `Configuration context contains invalid characteristics.`,
                403: `User or scope are unauthorized.Or action is not allowed.`,
                404: `Configuration not found.`,
                500: `Server specific error occured.`,
            },
        });
        return result.body;
    }

}