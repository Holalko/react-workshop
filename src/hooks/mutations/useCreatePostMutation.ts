import {useMutation} from "react-query";
import {PostType} from "../../models/PostType";
import {request} from "../../helpers/request";

const useCreatePostMutation = () => {
    return useMutation((post: PostType) => request("posts", {body: JSON.stringify(post)}), )
}