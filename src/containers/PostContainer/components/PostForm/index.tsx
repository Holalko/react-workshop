import React, {FC} from "react";
import {PostType} from "../../../../models/PostType";
import {Formik, Form} from "formik";

interface PostFormProps {
    post: PostType;
    onSubmit: (post: PostType) => void;
}

const PostForm: FC<PostFormProps> = ({post, onSubmit}) => {

    // TODO: TASK #3
    //  create Formik form for post editing
    //  for fields use <TextField /> component


    // TODO: optional task - validation
    //  create validation via yup

    return <>

    </>
}

export default PostForm;