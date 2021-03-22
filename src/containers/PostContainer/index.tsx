import React, {FC} from "react";
import {useParams} from "react-router-dom";
import ExampleContainer from "../ExampleContainer";
import Container from "../../components/Container";


const PostContainer: FC = ({}) => {
    const {id} = useParams<{ id: string }>();

    return <><Container>
        <h4>Post id is {id}</h4>
    </Container>
        <ExampleContainer/>

    </>
}

export default PostContainer;