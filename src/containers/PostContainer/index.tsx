import React, {FC} from "react";
import {useParams} from "react-router-dom";
import ExampleContainer from "../ExampleContainer";
import Container from "../../components/Container";
import PostForm from "./components/PostForm";
import {PostType} from "../../models/PostType";
import {usePost} from "../../hooks/queries/usePost";


const PostContainer: FC = ({}) => {
    const {id} = useParams<{ id: string }>();


    // TODO: TASK #1
    //  create hook to fetch post by ID with react-query useQuery hook
    const {data: post, isFetching} = usePost(id);


    // TODO: TASK #2
    //  create form to edit posts
    //  more info in <PostForm /> component


    // TODO: TASK #3
    //  implement post update with react-query useMutation hook
    const handleSubmit = (post: PostType) => {

    }

    // TODO: TASK #4
    //  make sure to invalidate all posts on update


    // TODO: TASK #5
    //  add option to delete task, again use react-query useMutation hook and don't forget to invalidate

    return <>
        <Container>
            <h4>Post id is {id}</h4>
            <span>
                {post ? JSON.stringify(post) : null}
            </span>
            {/* TODO: uncomment when fetching post done */}
            {/*<PostForm post={} onSubmit={} />*/}
        </Container>
        <ExampleContainer/>
    </>
}

export default PostContainer;