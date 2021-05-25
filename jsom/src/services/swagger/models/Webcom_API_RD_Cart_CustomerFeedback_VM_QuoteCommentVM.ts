/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Webcom_API_RD_Cart_CustomerFeedback_VM_QuoteCommentVM = {
    Id?: number;
    IsMyComment?: boolean;
    UserFullName?: string;
    UserEmail?: string;
    UserCompany?: string;
    /**
     * Date in user format (Ex.24-May-1988)
     */
    DateCreated?: string;
    /**
     * Time of comment (Ex. 3:51 PM)
     */
    TimeCreated?: string;
    CommentText?: string;
}
