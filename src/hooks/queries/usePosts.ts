import {useQuery} from "react-query";
import {PostType} from "../../models/PostType";
import {getRequest, request} from "../../helpers/request";
import {queryClient} from "../../index";
import {Page} from "../../models/Page";

export const postsQueryKey = (page?: number) => {
    const key = "posts";
    if(page){
        return [key, page];
    }
    return key;
}

export const usePosts = (page: number) => {
    return useQuery<Page<PostType>>(postsQueryKey(page), () =>
        getRequest("posts")
    );
}

export const invalidatePosts = (page?: number) => {
    queryClient.invalidateQueries(postsQueryKey(page));
}
