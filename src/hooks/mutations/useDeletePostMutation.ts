import {useMutation} from "react-query";
import {PostType} from "../../models/PostType";
import {deleteRequest, putRequest, request} from "../../helpers/request";
import {invalidatePosts} from "../queries/usePosts";

export const useDeletePostMutation = (onSuccess: () => void) => {
    return useMutation((postId: string) => deleteRequest(`posts/${postId}`), {
        onSuccess: () => {
            invalidatePosts();
            onSuccess();
        }
    });
}