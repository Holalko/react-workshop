import {useMutation} from "react-query";
import {PostType} from "../../models/PostType";
import {putRequest, request} from "../../helpers/request";

export const useCreatePostMutation = () => {
    return useMutation((post: PostType) => putRequest(`posts/${post.id}`, post));
}