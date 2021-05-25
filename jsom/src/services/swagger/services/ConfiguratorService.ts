/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Webcom_API_RD_Configurator_AutoCompleteVM } from '../models/Webcom_API_RD_Configurator_AutoCompleteVM';
import type { Webcom_API_RD_Configurator_ConfiguratorResponse } from '../models/Webcom_API_RD_Configurator_ConfiguratorResponse';
import type { Webcom_API_RD_Configurator_VM_ConfigurationTree_ConfigurationTreeVM } from '../models/Webcom_API_RD_Configurator_VM_ConfigurationTree_ConfigurationTreeVM';
import type { Webcom_API_RD_Configurator_VM_Responder_ConflictSummaryVM } from '../models/Webcom_API_RD_Configurator_VM_Responder_ConflictSummaryVM';
import type { Webcom_API_RedirectResponse } from '../models/Webcom_API_RedirectResponse';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import { request as __request } from '../core/request';

export class ConfiguratorService {

    /**
     * Initializes the specified pid.
     * @param pid The pid.
     * @param cid The cid.
     * @param favId The fav identifier.
     * @param sid The sid.
     * @param systemId The product system id.
     * @param configurationId The configuration id.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async configuratorInit(
        pid?: number,
        cid?: number,
        favId?: number,
        sid?: string,
        systemId?: string,
        configurationId?: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/Init`,
            query: {
                'pid': pid,
                'cid': cid,
                'favId': favId,
                'sid': sid,
                'systemId': systemId,
                'configurationId': configurationId,
            },
        });
        return result.body;
    }

    /**
     * Gets the current configurator tab model.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorGetModel(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Configurator/GetModel`,
        });
        return result.body;
    }

    /**
     * Changes current tab and then get model for that configurator tab.
     * @param tabId The tab id.
     * @param productId product id.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorGetTabModel(
        tabId: number,
        productId?: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Configurator/GetTabModel`,
            query: {
                'tabId': tabId,
                'productId': productId,
            },
        });
        return result.body;
    }

    /**
     * Gets information whether the conflicts tab in responder should be shown or not for VC integration
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorShouldShowConflictsTab(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Configurator/ShouldShowConflictsTab`,
        });
        return result.body;
    }

    /**
     * Changes the user input.
     * @param stdAttrCode The standard attribute code.
     * @param userInput The user input.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorChangeUserInput(
        stdAttrCode: number,
        userInput: string,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeUserInput`,
            query: {
                'stdAttrCode': stdAttrCode,
            },
            body: userInput,
        });
        return result.body;
    }

    /**
     * Changes the attribute quantity.
     * @param stdAttrCode The standard attribute code.
     * @param quantity The quantity.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorChangeAttributeQuantity(
        stdAttrCode: number,
        quantity: string,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeAttributeQuantity`,
            query: {
                'stdAttrCode': stdAttrCode,
                'quantity': quantity,
            },
        });
        return result.body;
    }

    /**
     * Changes the attribute value.
     * @param stdAttrCode The standard attribute code.
     * @param pavIdCsv The pav identifier CSV.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorChangeAttributeValue(
        stdAttrCode: number,
        pavIdCsv: string,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeAttributeValue`,
            query: {
                'stdAttrCode': stdAttrCode,
                'pavIdCsv': pavIdCsv,
            },
        });
        return result.body;
    }

    /**
     * Buttons the attribute action.
     * @param stdAttrCode The standard attribute code.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorButtonAttributeAction(
        stdAttrCode: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ButtonAttributeAction`,
            query: {
                'stdAttrCode': stdAttrCode,
            },
        });
        return result.body;
    }

    /**
     * Changes the attribute value quantity.
     * @param stdAttrCode The standard attribute code.
     * @param pavIdCsv The pav identifier CSV.
     * @param quantity The quantity.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorChangeAttributeValueQuantity(
        stdAttrCode: number,
        pavIdCsv: string,
        quantity: string,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeAttributeValueQuantity`,
            query: {
                'stdAttrCode': stdAttrCode,
                'pavIdCsv': pavIdCsv,
                'quantity': quantity,
            },
        });
        return result.body;
    }

    /**
     * Adds the container row.
     * @param stdAttrCode The standard attribute code.
     * @param productId The product identifier.
     * @param pageNumber Page number
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorAddContainerRow(
        stdAttrCode: number,
        productId: number,
        pageNumber?: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/AddContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'productId': productId,
                'pageNumber': pageNumber,
            },
        });
        return result.body;
    }

    /**
     * @param uniqueIdentifier
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorEditConfigurationTreeRow(
        uniqueIdentifier: string,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/EditConfigurationTreeRow`,
            query: {
                'uniqueIdentifier': uniqueIdentifier,
            },
        });
        return result.body;
    }

    /**
     * Edits the container row.
     * @param stdAttrCode The standard attribute code.
     * @param rowIndex Index of the row.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorEditContainerRow(
        stdAttrCode: number,
        rowIndex: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/EditContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'rowIndex': rowIndex,
            },
        });
        return result.body;
    }

    /**
     * Sets the container current page.
     * @param stdAttrCode The standard attribute code.
     * @param currentPage The current page.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorSetContainerCurrentPage(
        stdAttrCode: number,
        currentPage: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/SetContainerCurrentPage`,
            query: {
                'stdAttrCode': stdAttrCode,
                'currentPage': currentPage,
            },
        });
        return result.body;
    }

    /**
     * Sets the size of the container page.
     * @param stdAttrCode The standard attribute code.
     * @param pageSize Size of the page.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorSetContainerPageSize(
        stdAttrCode: number,
        pageSize: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/SetContainerPageSize`,
            query: {
                'stdAttrCode': stdAttrCode,
                'pageSize': pageSize,
            },
        });
        return result.body;
    }

    /**
     * Deletes the container row.
     * @param stdAttrCode The standard attribute code.
     * @param rowIndex Index of the row.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorDeleteContainerRow(
        stdAttrCode: number,
        rowIndex: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/DeleteContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'rowIndex': rowIndex,
            },
        });
        return result.body;
    }

    /**
     * Copies the container row.
     * @param stdAttrCode The standard attribute code.
     * @param rowIndex Index of the row.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorCopyContainerRow(
        stdAttrCode: number,
        rowIndex: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/CopyContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'rowIndex': rowIndex,
            },
        });
        return result.body;
    }

    /**
     * Modals the copy container row.
     * @param stdAttrCode The standard attribute code.
     * @param rowIndex Index of the row.
     * @param columnIds The column ids.
     * @param qty The qty.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorModalCopyContainerRow(
        stdAttrCode: number,
        rowIndex: number,
        columnIds: Array<number>,
        qty: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ModalCopyContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'rowIndex': rowIndex,
                'columnIds': columnIds,
                'qty': qty,
            },
        });
        return result.body;
    }

    /**
     * Moves up container row.
     * @param stdAttrCode The standard attribute code.
     * @param rowIndex Index of the row.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorMoveUpContainerRow(
        stdAttrCode: number,
        rowIndex: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/MoveUpContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'rowIndex': rowIndex,
            },
        });
        return result.body;
    }

    /**
     * Moves down container row.
     * @param stdAttrCode The standard attribute code.
     * @param rowIndex Index of the row.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorMoveDownContainerRow(
        stdAttrCode: number,
        rowIndex: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/MoveDownContainerRow`,
            query: {
                'stdAttrCode': stdAttrCode,
                'rowIndex': rowIndex,
            },
        });
        return result.body;
    }

    /**
     * Changes the container value.
     * @param stdAttrCode The standard attribute code.
     * @param columnId The column identifier.
     * @param rowIndex Index of the row.
     * @param value The value.
     * @param selectedOptions The selected options.
     * @param currentPage The current page.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorChangeContainerValue(
        stdAttrCode: number,
        columnId: number,
        rowIndex: number,
        value: string,
        selectedOptions: Array<number>,
        currentPage?: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeContainerValue`,
            query: {
                'stdAttrCode': stdAttrCode,
                'columnId': columnId,
                'rowIndex': rowIndex,
                'value': value,
                'selectedOptions': selectedOptions,
                'currentPage': currentPage,
            },
        });
        return result.body;
    }

    /**
     * Toggles the container column sort direction.
     * @param stdAttrCode The standard attribute code.
     * @param columnId The column identifier.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorContainerSort(
        stdAttrCode: number,
        columnId: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ContainerSort`,
            query: {
                'stdAttrCode': stdAttrCode,
                'columnId': columnId,
            },
        });
        return result.body;
    }

    /**
     * Clears the container sorting.
     * @param stdAttrCode
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorContainerClearSort(
        stdAttrCode: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ContainerClearSort`,
            query: {
                'stdAttrCode': stdAttrCode,
            },
        });
        return result.body;
    }

    /**
     * Changes the container autocomplete value.
     * @param referencedStdAttrCode The standard attribute code of the referenced attribute.
     * @param containerId The standard attribute code of the container attribute
     * @param rowIndex Index of the row.
     * @param columnId The column identifier.
     * @param entryId The id of selected autocomplete row.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorChangeContainerAutocompleteValue(
        referencedStdAttrCode: number,
        containerId: number,
        rowIndex: number,
        columnId: number,
        entryId: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeContainerAutocompleteValue`,
            query: {
                'referencedStdAttrCode': referencedStdAttrCode,
                'containerId': containerId,
                'rowIndex': rowIndex,
                'columnId': columnId,
                'entryId': entryId,
            },
        });
        return result.body;
    }

    /**
     * Alters the container row selection.
     * @param stdAttrCode The standard attribute code.
     * @param columnId The column identifier.
     * @param rowIndex Index of the row.
     * @param isRowSelected if set to true [is row selected].
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorAlterContainerRowSelection(
        stdAttrCode: number,
        columnId: number,
        rowIndex: number,
        isRowSelected: boolean,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/AlterContainerRowSelection`,
            query: {
                'stdAttrCode': stdAttrCode,
                'columnId': columnId,
                'rowIndex': rowIndex,
                'isRowSelected': isRowSelected,
            },
        });
        return result.body;
    }

    /**
     * Sets the container selected row filter.
     * @param stdAttrCode The standard attribute code.
     * @param showOnlySelected if set to true [show only selected].
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorSetContainerSelectedRowFilter(
        stdAttrCode: number,
        showOnlySelected: boolean,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/SetContainerSelectedRowFilter`,
            query: {
                'stdAttrCode': stdAttrCode,
                'showOnlySelected': showOnlySelected,
            },
        });
        return result.body;
    }

    /**
     * Changes the drill down value.
     * @param stdAttrCode The standard attribute code.
     * @param columnId The column identifier.
     * @param newValue The new value.
     * @returns any OK
     * @throws ApiError
     */
    public static async configuratorChangeDrillDownValue(
        stdAttrCode: number,
        columnId: string,
        newValue: string,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ChangeDrillDownValue`,
            query: {
                'stdAttrCode': stdAttrCode,
                'columnId': columnId,
                'newValue': newValue,
            },
        });
        return result.body;
    }

    /**
     * Resets this instance.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorReset(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/Reset`,
        });
        return result.body;
    }

    /**
     * Adds to quote.
     * @returns any OK
     * @throws ApiError
     */
    public static async configuratorAddToQuote(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/AddToQuote`,
        });
        return result.body;
    }

    /**
     * Unlock product.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorUnlockProduct(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/UnlockProduct`,
        });
        return result.body;
    }

    /**
     * Saves the and exit nested product.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorSaveAndExitNestedProduct(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/SaveAndExitNestedProduct`,
        });
        return result.body;
    }

    /**
     * Exits the nested product.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorExitNestedProduct(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ExitNestedProduct`,
        });
        return result.body;
    }

    /**
     * Gets root product
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorGoToRootProduct(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/GoToRootProduct`,
        });
        return result.body;
    }

    /**
     * Views the abs price ranges.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorViewAbsPriceRanges(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ViewABSPriceRanges`,
        });
        return result.body;
    }

    /**
     * Hides the abs price ranges.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorHideAbsPriceRanges(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/HideABSPriceRanges`,
        });
        return result.body;
    }

    /**
     * Views the abs products.
     * @param absGroups The abs groups.
     * @returns Webcom_API_RedirectResponse OK
     * @throws ApiError
     */
    public static async configuratorViewAbsProducts(
        absGroups: Array<number>,
    ): Promise<Webcom_API_RedirectResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ViewABSProducts`,
            query: {
                'absGroups': absGroups,
            },
        });
        return result.body;
    }

    /**
     * Applies the configuration template.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorApplyConfigurationTemplate(): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/ApplyConfigurationTemplate`,
        });
        return result.body;
    }

    /**
     * Gets the auto-complete values.
     * @param stdAttrCode The standard attribute code.
     * @param searchValue The search value.
     * @returns Webcom_API_RD_Configurator_AutoCompleteVM OK
     * @throws ApiError
     */
    public static async configuratorGetAutoCompleteSourceTableValues(
        stdAttrCode: number,
        searchValue: string,
    ): Promise<Webcom_API_RD_Configurator_AutoCompleteVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Configurator/GetAutoCompleteSourceTableValues`,
            query: {
                'stdAttrCode': stdAttrCode,
                'searchValue': searchValue,
            },
        });
        return result.body;
    }

    /**
     * Selects the auto-complete attribute.
     * @param stdAttrCode The standard attribute code.
     * @param entryId The entry identifier.
     * @returns Webcom_API_RD_Configurator_ConfiguratorResponse OK
     * @throws ApiError
     */
    public static async configuratorSelectAutoCompleteAttribute(
        stdAttrCode: number,
        entryId: number,
    ): Promise<Webcom_API_RD_Configurator_ConfiguratorResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Configurator/SelectAutoCompleteAttribute`,
            query: {
                'stdAttrCode': stdAttrCode,
                'entryId': entryId,
            },
        });
        return result.body;
    }

    /**
     * Gets complete parent/child structure for configurator.
     * @returns Webcom_API_RD_Configurator_VM_ConfigurationTree_ConfigurationTreeVM OK
     * @throws ApiError
     */
    public static async configuratorGetConfigurationTree(): Promise<Webcom_API_RD_Configurator_VM_ConfigurationTree_ConfigurationTreeVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Configurator/GetConfigurationTree`,
        });
        return result.body;
    }

    /**
     * Gets complete parent/child structure for configurator.
     * @returns Webcom_API_RD_Configurator_VM_Responder_ConflictSummaryVM OK
     * @throws ApiError
     */
    public static async configuratorGetConflictSummary(): Promise<Webcom_API_RD_Configurator_VM_Responder_ConflictSummaryVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Configurator/GetConflictSummary`,
        });
        return result.body;
    }

}