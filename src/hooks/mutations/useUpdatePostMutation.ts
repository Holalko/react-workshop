import {useMutation} from "react-query";
import {PostType} from "../../models/PostType";
import {putRequest, request} from "../../helpers/request";
import {invalidatePosts} from "../queries/usePosts";

export const useCreatePostMutation = () => {
    return useMutation((post: PostType) => putRequest(`posts/${post.id}`, post), {
        onSuccess: () => {
            invalidatePosts();
        }
    });
}