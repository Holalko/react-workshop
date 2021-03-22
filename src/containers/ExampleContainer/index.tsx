import React, {FC} from "react";
import {usePosts} from "../../hooks/queries/usePosts";
import {Post} from "./components/Post";
import {NavLink} from "react-router-dom";
import Container from "../../components/Container";


const ExampleContainer: FC = () => {
    const {data, isLoading, isFetching} = usePosts(0);


    return <Container>
        <h2>Posts</h2>

        {/*<button onClick={() => refetch()}>Refetch</button>*/}
        {/*<button onClick={() => invalidatePosts()}>Invalidate</button>*/}

        {isLoading || isFetching ? "Loading..." : data?.content?.map(post => <NavLink to={`/posts/${post.id}`}>
            <Post key={post.id} title={post.title} id={post.id} body={post.body}/>
        </NavLink>)}
    </Container>
}

export default ExampleContainer;