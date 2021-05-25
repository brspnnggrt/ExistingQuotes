/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField } from '../models/SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField';
import type { Webcom_API_RD_Cart_AddToQuoteRequest } from '../models/Webcom_API_RD_Cart_AddToQuoteRequest';
import type { Webcom_API_RD_Cart_CartActionRequest } from '../models/Webcom_API_RD_Cart_CartActionRequest';
import type { Webcom_API_RD_Cart_CartActionsVM } from '../models/Webcom_API_RD_Cart_CartActionsVM';
import type { Webcom_API_RD_Cart_CartItemsRequest } from '../models/Webcom_API_RD_Cart_CartItemsRequest';
import type { Webcom_API_RD_Cart_CartItemsResponse } from '../models/Webcom_API_RD_Cart_CartItemsResponse';
import type { Webcom_API_RD_Cart_CartLineItemVM } from '../models/Webcom_API_RD_Cart_CartLineItemVM';
import type { Webcom_API_RD_Cart_CartResponse } from '../models/Webcom_API_RD_Cart_CartResponse';
import type { Webcom_API_RD_Cart_ChangeQuoteTableRequest } from '../models/Webcom_API_RD_Cart_ChangeQuoteTableRequest';
import type { Webcom_API_RD_Cart_CreatePartialOrderRequest } from '../models/Webcom_API_RD_Cart_CreatePartialOrderRequest';
import type { Webcom_API_RD_Cart_CustomFieldsResponse } from '../models/Webcom_API_RD_Cart_CustomFieldsResponse';
import type { Webcom_API_RD_Cart_ExecuteQuoteTableCustomActionRequest } from '../models/Webcom_API_RD_Cart_ExecuteQuoteTableCustomActionRequest';
import type { Webcom_API_RD_Cart_ItemsFilterQueryRequest } from '../models/Webcom_API_RD_Cart_ItemsFilterQueryRequest';
import type { Webcom_API_RD_Cart_ItemsTypeRequest } from '../models/Webcom_API_RD_Cart_ItemsTypeRequest';
import type { Webcom_API_RD_Cart_MainItemActionVM } from '../models/Webcom_API_RD_Cart_MainItemActionVM';
import type { Webcom_API_RD_Cart_MainItemsCountResponse } from '../models/Webcom_API_RD_Cart_MainItemsCountResponse';
import type { Webcom_API_RD_Cart_MoveItemRequest } from '../models/Webcom_API_RD_Cart_MoveItemRequest';
import type { Webcom_API_RD_Cart_PartialOrderItemVM } from '../models/Webcom_API_RD_Cart_PartialOrderItemVM';
import type { Webcom_API_RD_Cart_QuoteItemsResponse } from '../models/Webcom_API_RD_Cart_QuoteItemsResponse';
import type { Webcom_API_RD_Cart_QuoteTableVm } from '../models/Webcom_API_RD_Cart_QuoteTableVm';
import type { Webcom_API_RD_Cart_ReorderItemRequest } from '../models/Webcom_API_RD_Cart_ReorderItemRequest';
import type { Webcom_API_RD_Cart_UpgradeAndEditProductRequest } from '../models/Webcom_API_RD_Cart_UpgradeAndEditProductRequest';
import type { Webcom_API_RD_Cart_VM_DistinctValuesVM } from '../models/Webcom_API_RD_Cart_VM_DistinctValuesVM';
import type { Webcom_API_RD_Cart_VM_FilterMetadataVM } from '../models/Webcom_API_RD_Cart_VM_FilterMetadataVM';
import type { Webcom_API_RD_Cart_VM_Promotion_ApplyPromotionsRequest } from '../models/Webcom_API_RD_Cart_VM_Promotion_ApplyPromotionsRequest';
import type { Webcom_API_RD_Cart_VM_Promotion_PromotionsResponse } from '../models/Webcom_API_RD_Cart_VM_Promotion_PromotionsResponse';
import type { Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM } from '../models/Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM';
import type { Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableFilteredVM } from '../models/Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableFilteredVM';
import type { Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamsVM } from '../models/Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamsVM';
import type { Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm } from '../models/Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm';
import type { Webcom_API_RD_Cart_VM_SearchItemVm } from '../models/Webcom_API_RD_Cart_VM_SearchItemVm';
import type { Webcom_API_RD_Cart_VM_Sections_BulkAssignRequest } from '../models/Webcom_API_RD_Cart_VM_Sections_BulkAssignRequest';
import type { Webcom_API_RD_Cart_VM_Sections_ItemActionsRequest } from '../models/Webcom_API_RD_Cart_VM_Sections_ItemActionsRequest';
import type { Webcom_API_RD_Cart_VM_Sections_SectionCalculateRequest } from '../models/Webcom_API_RD_Cart_VM_Sections_SectionCalculateRequest';
import type { Webcom_API_RD_Configurator_AutoCompleteVM } from '../models/Webcom_API_RD_Configurator_AutoCompleteVM';
import type { Webcom_API_RedirectResponse } from '../models/Webcom_API_RedirectResponse';
import type { Webcom_API_SetupSPA_Common_DisplayValueLookupVM } from '../models/Webcom_API_SetupSPA_Common_DisplayValueLookupVM';
import type { Webcom_API_StatusVm } from '../models/Webcom_API_StatusVm';
import type { Webcom_Configurator_Core_IdNamePair } from '../models/Webcom_Configurator_Core_IdNamePair';
import { request as __request } from '../core/request';

export class CartService {

    /**
     * Gets the custom fields.
     * @param tabId The tab identifier.
     * @returns Webcom_API_RD_Cart_CustomFieldsResponse OK
     * @throws ApiError
     */
    public static async cartGetCustomFields(
        tabId: number,
    ): Promise<Webcom_API_RD_Cart_CustomFieldsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCustomFields`,
            query: {
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * Saves the custom fields.
     * @param dirtyCustomFields The dirty custom fields.
     * @returns Webcom_API_RD_Cart_CustomFieldsResponse OK
     * @throws ApiError
     */
    public static async cartSaveCustomFields(
        dirtyCustomFields: Record<string, string>,
    ): Promise<Webcom_API_RD_Cart_CustomFieldsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/SaveCustomFields`,
            body: dirtyCustomFields,
        });
        return result.body;
    }

    /**
     * Gets the initialize data.
     * @param mode The mode.
     * @param ownerId The owner identifier.
     * @param cartId The cart identifier.
     * @param avc The avc.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartGetInitData(
        mode: 0 | 1 | 2,
        ownerId?: string,
        cartId?: string,
        avc?: string,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetInitData`,
            query: {
                'mode': mode,
                'ownerId': ownerId,
                'cartId': cartId,
                'avc': avc,
            },
        });
        return result.body;
    }

    /**
     * Get cart actions data.
     * @returns Webcom_API_RD_Cart_CartActionsVM OK
     * @throws ApiError
     */
    public static async cartGetCartActionsModel(): Promise<Webcom_API_RD_Cart_CartActionsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCartActionsModel`,
        });
        return result.body;
    }

    /**
     * Gets the items.
     * @param requestPageNumber Gets or sets the page number.
     * @param requestPageSize Gets or sets the page size.
     * @param requestFilterQuery Gets or sets the list of query criteria.
     * @param requestCartItem The cart item that should be loaded in data page.If supplied pageNumber is ignored.System will also expand some items if required so that requested item is visible///
     * @returns Webcom_API_RD_Cart_CartItemsResponse OK
     * @throws ApiError
     */
    public static async cartGetItems(
        requestPageNumber?: number,
        requestPageSize?: number,
        requestFilterQuery?: Array<any[]>,
        requestCartItem?: number,
    ): Promise<Webcom_API_RD_Cart_CartItemsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetItems`,
            query: {
                'request.pageNumber': requestPageNumber,
                'request.pageSize': requestPageSize,
                'request.filterQuery': requestFilterQuery,
                'request.cartItem': requestCartItem,
            },
        });
        return result.body;
    }

    /**
     * Gets the items.
     * @param request The request.
     * @returns Webcom_API_RD_Cart_CartItemsResponse OK
     * @throws ApiError
     */
    public static async cartGetItemsPost(
        request: Webcom_API_RD_Cart_CartItemsRequest,
    ): Promise<Webcom_API_RD_Cart_CartItemsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/GetItemsPost`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the order summary data.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartGetOrderSummaryData(): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetOrderSummaryData`,
        });
        return result.body;
    }

    /**
     * Calculates the specified cart update parameters.
     * @param cartActionRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartCalculate(
        cartActionRequest: Webcom_API_RD_Cart_CartActionRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/Calculate`,
            body: cartActionRequest,
        });
        return result.body;
    }

    /**
     * Cancels the item edit.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartCancelItemEdit(): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CancelItemEdit`,
        });
        return result.body;
    }

    /**
     * Changes the type of the item.
     * @param cartItem
     * @param newItemType
     * @param newBaseItem
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeItemType(
        cartItem: number,
        newItemType: 0 | 1 | 2 | 3,
        newBaseItem: string,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeItemType`,
            query: {
                'cartItem': cartItem,
                'newItemType': newItemType,
                'newBaseItem': newBaseItem,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Changes the type of the items.
     * @param model The model.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeItemsType(
        model: Webcom_API_RD_Cart_ItemsTypeRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeItemsType`,
            body: model,
        });
        return result.body;
    }

    /**
     * Changes the market.
     * @param newMarketId
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeMarket(
        newMarketId: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeMarket`,
            query: {
                'newMarketId': newMarketId,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Gets list of System Ids for SB products in current quote which do not have pricing defined
     * @param marketId
     * @returns string OK
     * @throws ApiError
     */
    public static async cartGetSbItemsWithoutMarketPrices(
        marketId: number,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetSbItemsWithoutMarketPrices`,
            query: {
                'marketId': marketId,
            },
        });
        return result.body;
    }

    /**
     * Changes the pricebook.
     * @param newPricebookId
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangePricebook(
        newPricebookId: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangePricebook`,
            query: {
                'newPricebookId': newPricebookId,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Changes the effective date.
     * @param newEffectiveDate
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeEffectiveDate(
        newEffectiveDate: string,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeEffectiveDate`,
            query: {
                'newEffectiveDate': newEffectiveDate,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Changes the shipping.
     * @param newShippingId The new shipping identifier.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeShipping(
        newShippingId: number,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeShipping`,
            query: {
                'newShippingId': newShippingId,
            },
        });
        return result.body;
    }

    /**
     * Changes the status.
     * @param newStatusId
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeStatus(
        newStatusId: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeStatus`,
            query: {
                'newStatusId': newStatusId,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Saves the cart comment.
     * @param comment
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartSaveCartComment(
        comment: string,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/SaveCartComment`,
            query: {
                'comment': comment,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Crates the new additional discount.
     * @param cartUpdateParams The cart update parameters.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartCrateNewAdditionalDiscount(
        cartUpdateParams: Webcom_API_RD_Cart_CartActionRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CrateNewAdditionalDiscount`,
            body: cartUpdateParams,
        });
        return result.body;
    }

    /**
     * Deletes the additional discount.
     * @param discountId The discount identifier.
     * @param cartUpdateParams The cart update parameters.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartDeleteAdditionalDiscount(
        discountId: number,
        cartUpdateParams: Webcom_API_RD_Cart_CartActionRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/DeleteAdditionalDiscount`,
            query: {
                'discountId': discountId,
            },
            body: cartUpdateParams,
        });
        return result.body;
    }

    /**
     * Executes the action.
     * @param actionId The action identifier.
     * @param cartActionRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartExecuteAction(
        actionId: number,
        cartActionRequest: Webcom_API_RD_Cart_CartActionRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExecuteAction`,
            query: {
                'actionId': actionId,
            },
            body: cartActionRequest,
        });
        return result.body;
    }

    /**
     * Executes the item action.
     * @param actionId
     * @param cartItem
     * @param itemsFilterQueryRequest
     * @param itemId
     * @returns any OK
     * @throws ApiError
     */
    public static async cartExecuteItemAction(
        actionId: number,
        cartItem: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
        itemId?: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExecuteItemAction`,
            query: {
                'actionId': actionId,
                'cartItem': cartItem,
                'itemId': itemId,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Executes the upgrade item action.
     * @param cartItem
     * @param itemId
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartExecuteUpgradeItemAction(
        cartItem: number,
        itemId: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExecuteUpgradeItemAction`,
            query: {
                'cartItem': cartItem,
                'itemId': itemId,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Executes the item action by cart item id.
     * @param actionId The action identifier.
     * @param cartItemId The cart item id.
     * @returns any OK
     * @throws ApiError
     */
    public static async cartExecuteItemActionById(
        actionId: number,
        cartItemId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExecuteItemActionById`,
            query: {
                'actionId': actionId,
                'cartItemId': cartItemId,
            },
        });
        return result.body;
    }

    /**
     * Gets the products for upgrade.
     * @returns any OK
     * @throws ApiError
     */
    public static async cartGetProductsForUpgrade(): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetProductsForUpgrade`,
        });
        return result.body;
    }

    /**
     * Gets the cart item product upgrade confirmation message.
     * @param cartItem The cart item.
     * @returns string OK
     * @throws ApiError
     */
    public static async cartGetCartItemProductUpgradeConfirmationMessage(
        cartItem: number,
    ): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCartItemProductUpgradeConfirmationMessage`,
            query: {
                'cartItem': cartItem,
            },
        });
        return result.body;
    }

    /**
     * Gets the cart products upgrade confirmation message.
     * @returns string OK
     * @throws ApiError
     */
    public static async cartGetCartProductsUpgradeConfirmationMessage(): Promise<string> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCartProductsUpgradeConfirmationMessage`,
        });
        return result.body;
    }

    /**
     * Moves the item down.
     * @param cartItem
     * @param moveItemRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartMoveItemDown(
        cartItem: number,
        moveItemRequest: Webcom_API_RD_Cart_MoveItemRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/MoveItemDown`,
            query: {
                'cartItem': cartItem,
            },
            body: moveItemRequest,
        });
        return result.body;
    }

    /**
     * Moves the item up.
     * @param cartItem
     * @param moveItemRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartMoveItemUp(
        cartItem: number,
        moveItemRequest: Webcom_API_RD_Cart_MoveItemRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/MoveItemUp`,
            query: {
                'cartItem': cartItem,
            },
            body: moveItemRequest,
        });
        return result.body;
    }

    /**
     * Moves item to below upperCartItem.
     * @param cartItem The cart item unique identifier.
     * @param upperCartItem The upper cart item.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartMoveToPosition(
        cartItem: number,
        upperCartItem: number,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/MoveToPosition`,
            query: {
                'cartItem': cartItem,
                'upperCartItem': upperCartItem,
            },
        });
        return result.body;
    }

    /**
     * Redoes this instance.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartRedo(): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/Redo`,
        });
        return result.body;
    }

    /**
     * Sets the active editable group.
     * @param editableGroup
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartSetActiveEditableGroup(
        editableGroup: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/SetActiveEditableGroup`,
            query: {
                'editableGroup': editableGroup,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Undoes this instance.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartUndo(): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/Undo`,
        });
        return result.body;
    }

    /**
     * Upgrades the and edit product.
     * @param cartItem
     * @param itemId
     * @param upgradeAndEditProductRequest
     * @returns any OK
     * @throws ApiError
     */
    public static async cartUpgradeAndEditProduct(
        cartItem: number,
        itemId: number,
        upgradeAndEditProductRequest: Webcom_API_RD_Cart_UpgradeAndEditProductRequest,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/UpgradeAndEditProduct`,
            query: {
                'cartItem': cartItem,
                'itemId': itemId,
            },
            body: upgradeAndEditProductRequest,
        });
        return result.body;
    }

    /**
     * Upgrades the products and execute action.
     * @param actionId The action identifier.
     * @param cartUpdateParams The cart update parameters.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartUpgradeProductsAndExecuteAction(
        actionId: number,
        cartUpdateParams: Webcom_API_RD_Cart_CartActionRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/UpgradeProductsAndExecuteAction`,
            query: {
                'actionId': actionId,
            },
            body: cartUpdateParams,
        });
        return result.body;
    }

    /**
     * Adds to quote.
     * @param productId
     * @param quantity
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartAddToQuote(
        productId: number,
        quantity: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/AddToQuote`,
            query: {
                'productId': productId,
                'quantity': quantity,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Adds to quote.
     * @param productId
     * @param quantity
     * @param section
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartAddToQuoteWithSection(
        productId: number,
        quantity: number,
        section: string,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/AddToQuoteWithSection`,
            query: {
                'productId': productId,
                'quantity': quantity,
                'section': section,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Adds the favorite to quote.
     * @param favoriteId
     * @param quantity
     * @param itemsFilterQueryRequest
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartAddFavoriteToQuote(
        favoriteId: number,
        quantity: number,
        itemsFilterQueryRequest: Webcom_API_RD_Cart_ItemsFilterQueryRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/AddFavoriteToQuote`,
            query: {
                'favoriteId': favoriteId,
                'quantity': quantity,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Changes the approval probability.
     * @param sliderId The slider identifier.
     * @param value The value.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeApprovalProbability(
        sliderId: number,
        value: number,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeApprovalProbability`,
            query: {
                'sliderId': sliderId,
                'value': value,
            },
        });
        return result.body;
    }

    /**
     * Deletes the items.
     * @param cartItems The cart items.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartDeleteItems(
        cartItems: Array<number>,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/DeleteItems`,
            body: cartItems,
        });
        return result.body;
    }

    /**
     * Reorders the items.
     * @param reorderItems The reorder items.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartReorderItems(
        reorderItems: Array<Webcom_API_RD_Cart_ReorderItemRequest>,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ReorderItems`,
            body: reorderItems,
        });
        return result.body;
    }

    /**
     * Changes the margin health.
     * @param margin The margin.
     * @param calculationMode The calculation mode.
     * @param id The identifier.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeMarginHealth(
        margin: number,
        calculationMode: 1 | 2 | 3,
        id?: number,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeMarginHealth`,
            query: {
                'margin': margin,
                'calculationMode': calculationMode,
                'id': id,
            },
        });
        return result.body;
    }

    /**
     * Continues the action execution.
     * @param actionId The action identifier.
     * @param dirtyCustomFields The dirty custom fields.
     * @returns Webcom_API_RD_Cart_CustomFieldsResponse OK
     * @throws ApiError
     */
    public static async cartContinueActionExecution(
        actionId: number,
        dirtyCustomFields: Record<string, string>,
    ): Promise<Webcom_API_RD_Cart_CustomFieldsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ContinueActionExecution`,
            query: {
                'actionId': actionId,
            },
            body: dirtyCustomFields,
        });
        return result.body;
    }

    /**
     * Gets cart sections.
     * @returns string OK
     * @throws ApiError
     */
    public static async cartGetSections(): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetSections`,
        });
        return result.body;
    }

    /**
     * Gets the part number suggestions.
     * @param query The query.
     * @returns string OK
     * @throws ApiError
     */
    public static async cartGetPartNumberSuggestions(
        query: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetPartNumberSuggestions`,
            query: {
                'query': query,
            },
        });
        return result.body;
    }

    /**
     * Sets the cart item comment.
     * @param cartItem The cart item.
     * @param comment The comment.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartSetCartItemComment(
        cartItem: number,
        comment: string,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/SetCartItemComment`,
            query: {
                'cartItem': cartItem,
                'comment': comment,
            },
        });
        return result.body;
    }

    /**
     * Creates the new.
     * @param refer The refer.
     * @param forceCreate if true new cart will always be created regardless of  App parameter values.            Default value is false.
     * @returns Webcom_API_RedirectResponse OK
     * @throws ApiError
     */
    public static async cartCreateNew(
        refer: string,
        forceCreate?: boolean,
    ): Promise<Webcom_API_RedirectResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CreateNew`,
            query: {
                'refer': refer,
                'forceCreate': forceCreate,
            },
        });
        return result.body;
    }

    /**
     * Creates link in CPQ between current quote and opportunity.
     * @param opportunityId The opportunity identifier. Can not be null or string.Empty
     * @returns void
     * @throws ApiError
     */
    public static async cartLinkToOpportunity(
        opportunityId: string,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/LinkToOpportunity`,
            query: {
                'opportunityId': opportunityId,
            },
        });
        return result.body;
    }

    /**
     * Gets the view quote items model.
     * @param pageSize
     * @param page
     * @param includeLineItem
     * @returns Webcom_API_RD_Cart_QuoteItemsResponse OK
     * @throws ApiError
     */
    public static async cartGetViewQuoteItemsModel(
        pageSize: number,
        page: number,
        includeLineItem?: boolean,
    ): Promise<Webcom_API_RD_Cart_QuoteItemsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetViewQuoteItemsModel`,
            query: {
                'pageSize': pageSize,
                'page': page,
                'includeLineItem': includeLineItem,
            },
        });
        return result.body;
    }

    /**
     * Items the action delete reduced.
     * @param quoteItem The quote item.
     * @param itemId
     * @returns Webcom_API_RD_Cart_QuoteItemsResponse OK
     * @throws ApiError
     */
    public static async cartItemActionDeleteReduced(
        quoteItem: number,
        itemId?: number,
    ): Promise<Webcom_API_RD_Cart_QuoteItemsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ItemActionDeleteReduced`,
            query: {
                'quoteItem': quoteItem,
                'itemId': itemId,
            },
        });
        return result.body;
    }

    /**
     * Gets the current main items count.
     * @returns Webcom_API_RD_Cart_MainItemsCountResponse OK
     * @throws ApiError
     */
    public static async cartGetCurrentMainItemsCount(): Promise<Webcom_API_RD_Cart_MainItemsCountResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCurrentMainItemsCount`,
        });
        return result.body;
    }

    /**
     * Gets the data for action create partial order.
     * @returns Webcom_API_RD_Cart_PartialOrderItemVM OK
     * @throws ApiError
     */
    public static async cartGetPartialOrderData(): Promise<Array<Webcom_API_RD_Cart_PartialOrderItemVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/GetPartialOrderData`,
        });
        return result.body;
    }

    /**
     * Creates the partial order.
     * @param rowsSelection The partial order rows selection.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartCreatePartialOrder(
        rowsSelection: Array<Webcom_API_RD_Cart_CreatePartialOrderRequest>,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CreatePartialOrder`,
            body: rowsSelection,
        });
        return result.body;
    }

    /**
     * Gets the promotions.
     * @returns Webcom_API_RD_Cart_VM_Promotion_PromotionsResponse OK
     * @throws ApiError
     */
    public static async cartGetPromotions(): Promise<Webcom_API_RD_Cart_VM_Promotion_PromotionsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetPromotions`,
        });
        return result.body;
    }

    /**
     * Applies the promotions.
     * @param rowsSelection The rows selection.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartApplyPromotions(
        rowsSelection: Array<Webcom_API_RD_Cart_VM_Promotion_ApplyPromotionsRequest>,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ApplyPromotions`,
            body: rowsSelection,
        });
        return result.body;
    }

    /**
     * Expands the item.
     * @param cartItem The cart item.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartExpandItem(
        cartItem: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExpandItem`,
            query: {
                'cartItem': cartItem,
            },
        });
        return result.body;
    }

    /**
     * Expands all items.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartExpandAll(): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExpandAll`,
        });
        return result.body;
    }

    /**
     * Collapses the item.
     * @param cartItem The cart item.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartCollapseItem(
        cartItem: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CollapseItem`,
            query: {
                'cartItem': cartItem,
            },
        });
        return result.body;
    }

    /**
     * Collapses all items.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartCollapseAll(): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CollapseAll`,
        });
        return result.body;
    }

    /**
     * Returns top 5 items in cart matching search criteria.
     * @param search The search criteria.
     * @returns Webcom_API_RD_Cart_VM_SearchItemVm OK
     * @throws ApiError
     */
    public static async cartSearchItems(
        search: string,
    ): Promise<Array<Webcom_API_RD_Cart_VM_SearchItemVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/SearchItems`,
            query: {
                'search': search,
            },
        });
        return result.body;
    }

    /**
     * Copies the quote table row and returns cart data.If reduced will return just custom fields and quote tables not all cart data.
     * @param request The request.
     * @param tabId The tab identifier.
     * @param reduced if set to true [reduced].
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartCopyQuoteTableRow(
        request: Webcom_API_RD_Cart_ChangeQuoteTableRequest,
        tabId: number,
        reduced?: boolean,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CopyQuoteTableRow`,
            query: {
                'tabId': tabId,
                'reduced': reduced,
            },
            body: request,
        });
        return result.body;
    }

    /**
     * Deletes the quote table row.If reduced will return just custom fields and quote tables not all cart data.
     * @param request The request.
     * @param tabId The tab identifier.
     * @param reduced if set to true [reduced].
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartDeleteQuoteTableRow(
        request: Webcom_API_RD_Cart_ChangeQuoteTableRequest,
        tabId: number,
        reduced?: boolean,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/DeleteQuoteTableRow`,
            query: {
                'tabId': tabId,
                'reduced': reduced,
            },
            body: request,
        });
        return result.body;
    }

    /**
     * Adds the quote table row.If reduced will return just custom fields and quote tables not all cart data.
     * @param itemsFilterQueryRequest
     * @param tabId
     * @param reduced
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartAddQuoteTableRow(
        itemsFilterQueryRequest: Webcom_API_RD_Cart_AddToQuoteRequest,
        tabId: number,
        reduced?: boolean,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/AddQuoteTableRow`,
            query: {
                'tabId': tabId,
                'reduced': reduced,
            },
            body: itemsFilterQueryRequest,
        });
        return result.body;
    }

    /**
     * Changes the quote table cells.If reduced will return just custom fields and quote tables not all cart data.
     * @param request The request.
     * @param tabId The tab identifier.
     * @param reduced if set to true [reduced].
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartChangeQuoteTableCells(
        request: Webcom_API_RD_Cart_CartActionRequest,
        tabId: number,
        reduced?: boolean,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ChangeQuoteTableCells`,
            query: {
                'tabId': tabId,
                'reduced': reduced,
            },
            body: request,
        });
        return result.body;
    }

    /**
     * Gets the quote table rows.
     * @param quoteTableId The table identifier.
     * @param pageNumber The page number.
     * @param pageSize Size of the page.
     * @param tabId The tab identifier.
     * @returns Webcom_API_RD_Cart_QuoteTableVm OK
     * @throws ApiError
     */
    public static async cartGetQuoteTableRows(
        quoteTableId: number,
        pageNumber: number,
        pageSize: number,
        tabId: number,
    ): Promise<Webcom_API_RD_Cart_QuoteTableVm> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetQuoteTableRows`,
            query: {
                'quoteTableId': quoteTableId,
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * Executes the quote table custom action.
     * @param request The request.
     * @returns Webcom_API_RD_Cart_CartResponse OK
     * @throws ApiError
     */
    public static async cartExecuteQuoteTableCustomAction(
        request: Webcom_API_RD_Cart_ExecuteQuoteTableCustomActionRequest,
    ): Promise<Webcom_API_RD_Cart_CartResponse> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/ExecuteQuoteTableCustomAction`,
            body: request,
        });
        return result.body;
    }

    /**
     * Gets filtered quote table rows.
     * @param data Quote table data with filters
     * @returns Webcom_API_RD_Cart_QuoteTableVm OK
     * @throws ApiError
     */
    public static async cartFilterQuoteTableRows(
        data: Webcom_API_RD_Cart_VM_QuoteTable_QuoteTableFilteredVM,
    ): Promise<Webcom_API_RD_Cart_QuoteTableVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/FilterQuoteTableRows`,
            body: data,
        });
        return result.body;
    }

    /**
     * Gets the auto-complete custom table values for custom field.
     * @param stdAttrCode The standard attribute code of referencing attribute.
     * @param searchValue The search value.
     * @returns Webcom_API_RD_Configurator_AutoCompleteVM OK
     * @throws ApiError
     */
    public static async cartGetAutoCompleteSourceTableValues(
        stdAttrCode: number,
        searchValue: string,
    ): Promise<Webcom_API_RD_Configurator_AutoCompleteVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetAutoCompleteSourceTableValues`,
            query: {
                'stdAttrCode': stdAttrCode,
                'searchValue': searchValue,
            },
        });
        return result.body;
    }

    /**
     * Gets the auto-complete values for subscription attribute
     * @param itemId
     * @param column
     * @param searchValue
     * @returns Webcom_API_RD_Configurator_AutoCompleteVM OK
     * @throws ApiError
     */
    public static async cartGetAutoCompleteSubscriptionFields(
        itemId: number,
        column: string,
        searchValue: string,
    ): Promise<Webcom_API_RD_Configurator_AutoCompleteVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetAutoCompleteSubscriptionFields`,
            query: {
                'itemId': itemId,
                'column': column,
                'searchValue': searchValue,
            },
        });
        return result.body;
    }

    /**
     * Selects the autocomplete custom field value.
     * @param scParamId Custom field id
     * @param contentId The selected autocomplete content identifier.
     * @returns void
     * @throws ApiError
     */
    public static async cartSelectAutocompleteCustomField(
        scParamId: number,
        contentId: number,
    ): Promise<void> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/SelectAutocompleteCustomField`,
            query: {
                'scParamId': scParamId,
                'contentId': contentId,
            },
        });
        return result.body;
    }

    /**
     * Gets filterable standard and item custom fields.
     * @returns SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField OK
     * @throws ApiError
     */
    public static async cartGetFilterableItemColumns(): Promise<Array<SAP_CPQ_Quote_Helpers_Filtering_FilterFields_QuoteItemFilterField>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetFilterableItemColumns`,
        });
        return result.body;
    }

    /**
     * Get min and max values for given quote item custom field.
     * @param column Custom field name
     * @returns Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM OK
     * @throws ApiError
     */
    public static async cartGetMinAndMaxForColumn(
        column: string,
    ): Promise<Webcom_API_RD_Cart_VM_QuoteItemMinMaxResponseVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetMinAndMaxForColumn`,
            query: {
                'column': column,
            },
        });
        return result.body;
    }

    /**
     * Get medatata for filterable columns.
     * @returns Webcom_API_RD_Cart_VM_FilterMetadataVM OK
     * @throws ApiError
     */
    public static async cartGetFiltersMetadata(): Promise<Webcom_API_RD_Cart_VM_FilterMetadataVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetFiltersMetadata`,
        });
        return result.body;
    }

    /**
     * Get list of custom field available values for given quote custom field based on search string.
     * @param column Custom field name
     * @param searchString Search string
     * @returns string OK
     * @throws ApiError
     */
    public static async cartGetCustomFieldAutocomplete(
        column: string,
        searchString: string,
    ): Promise<Array<string>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCustomFieldAutocomplete`,
            query: {
                'column': column,
                'searchString': searchString,
            },
        });
        return result.body;
    }

    /**
     * Get list of distinct values if there are fewer than 10.
     * @param column Custom field name
     * @returns Webcom_API_RD_Cart_VM_DistinctValuesVM OK
     * @throws ApiError
     */
    public static async cartGetFieldDistinctValues(
        column: string,
    ): Promise<Webcom_API_RD_Cart_VM_DistinctValuesVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetFieldDistinctValues`,
            query: {
                'column': column,
            },
        });
        return result.body;
    }

    /**
     * Get list of product type available values for current quote.
     * @returns Webcom_Configurator_Core_IdNamePair OK
     * @throws ApiError
     */
    public static async cartGetProductTypes(): Promise<Array<Webcom_Configurator_Core_IdNamePair>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetProductTypes`,
        });
        return result.body;
    }

    /**
     * Get list of attribute custom field available values for given quote custom field based on search string.
     * @param column Custom field name
     * @param searchString Custom field id
     * @returns Webcom_Configurator_Core_IdNamePair OK
     * @throws ApiError
     */
    public static async cartGetCustomFieldAutocompleteAttribute(
        column: string,
        searchString: string,
    ): Promise<Array<Webcom_Configurator_Core_IdNamePair>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetCustomFieldAutocompleteAttribute`,
            query: {
                'column': column,
                'searchString': searchString,
            },
        });
        return result.body;
    }

    /**
     * @param quoteTableId
     * @returns any OK
     * @throws ApiError
     */
    public static async cartDownloadQtDataTemplate(
        quoteTableId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/DownloadQTDataTemplate`,
            query: {
                'quoteTableId': quoteTableId,
            },
        });
        return result.body;
    }

    /**
     * @param quoteTableId
     * @returns any OK
     * @throws ApiError
     */
    public static async cartDownloadQtEmptyTemplate(
        quoteTableId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/DownloadQTEmptyTemplate`,
            query: {
                'quoteTableId': quoteTableId,
            },
        });
        return result.body;
    }

    /**
     * Calculates the sections.
     * @param cartUpdateParams The cart update parameters.
     * @returns Webcom_API_RD_Cart_CartLineItemVM OK
     * @throws ApiError
     */
    public static async cartCalculateSections(
        cartUpdateParams: Webcom_API_RD_Cart_VM_Sections_SectionCalculateRequest,
    ): Promise<Array<Webcom_API_RD_Cart_CartLineItemVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/CalculateSections`,
            body: cartUpdateParams,
        });
        return result.body;
    }

    /**
     * @param request
     * @returns Webcom_API_RD_Cart_CartLineItemVM OK
     * @throws ApiError
     */
    public static async cartGetItemsBySections(
        request: Webcom_API_RD_Cart_VM_Sections_ItemActionsRequest,
    ): Promise<Array<Webcom_API_RD_Cart_CartLineItemVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/GetItemsBySections`,
            body: request,
        });
        return result.body;
    }

    /**
     * @param itemId
     * @returns Webcom_API_RD_Cart_MainItemActionVM OK
     * @throws ApiError
     */
    public static async cartGetActionsForItem(
        itemId: number,
    ): Promise<Array<Webcom_API_RD_Cart_MainItemActionVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetActionsForItem`,
            query: {
                'itemId': itemId,
            },
        });
        return result.body;
    }

    /**
     * Deletes the quote team.
     * @param teamId The team identifier.
     * @returns Webcom_API_StatusVm OK
     * @throws ApiError
     */
    public static async cartDeleteQuoteTeam(
        teamId: number,
    ): Promise<Webcom_API_StatusVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/DeleteQuoteTeam`,
            query: {
                'teamId': teamId,
            },
        });
        return result.body;
    }

    /**
     * Saves the quote team.
     * @param team The team.
     * @returns Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm OK
     * @throws ApiError
     */
    public static async cartSaveQuoteTeam(
        team: Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm,
    ): Promise<Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/SaveQuoteTeam`,
            body: team,
        });
        return result.body;
    }

    /**
     * Gets teams on the quote.
     * @param tabId
     * @returns Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamsVM OK
     * @throws ApiError
     */
    public static async cartGetQuoteTeamsTabData(
        tabId?: number,
    ): Promise<Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamsVM> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetQuoteTeamsTabData`,
            query: {
                'tabId': tabId,
            },
        });
        return result.body;
    }

    /**
     * Gets the quote teams.
     * @param quoteId The quote identifier.
     * @returns Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm OK
     * @throws ApiError
     */
    public static async cartGetQuoteTeams(
        quoteId: number,
    ): Promise<Array<Webcom_API_RD_Cart_VM_QuoteTeam_QuoteTeamVm>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/GetQuoteTeams`,
            query: {
                'quoteId': quoteId,
            },
        });
        return result.body;
    }

    /**
     * Bulks the assign.
     * @param cartUpdateParams The cart update parameters.
     * @returns Webcom_API_RD_Cart_CartLineItemVM OK
     * @throws ApiError
     */
    public static async cartBulkAssign(
        cartUpdateParams: Webcom_API_RD_Cart_VM_Sections_BulkAssignRequest,
    ): Promise<Array<Webcom_API_RD_Cart_CartLineItemVM>> {
        const result = await __request({
            method: 'POST',
            path: `/api/rd/v1/Cart/BulkAssign`,
            body: cartUpdateParams,
        });
        return result.body;
    }

    /**
     * Returns all values ​​of SB ratio percentage operations
     * @returns Webcom_API_SetupSPA_Common_DisplayValueLookupVM OK
     * @throws ApiError
     */
    public static async cartPercentageOperations(): Promise<Array<Webcom_API_SetupSPA_Common_DisplayValueLookupVM>> {
        const result = await __request({
            method: 'GET',
            path: `/api/rd/v1/Cart/PercentageOperations`,
        });
        return result.body;
    }

}