import {useQuery} from "react-query";
import {getRequest} from "../../helpers/request";
import {PostType} from "../../models/PostType";
import {queryClient} from "../../index";

export const postQueryKey = (postId: string) => {
    return ["postQueryKey", postId];
}

export const usePost = (postId: string) => {
    return useQuery<PostType>(postQueryKey(postId), ()=> getRequest(`posts/${postId}`))
}

export const invalidatePost = (postId: string) => {
    queryClient.invalidateQueries(postQueryKey(postId));
}