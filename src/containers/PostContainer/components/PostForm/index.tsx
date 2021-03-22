import React, {FC} from "react";
import {PostType} from "../../../../models/PostType";
import {Formik, Form} from "formik";
import TextField from "../../../../components/FormikComponents/TextField";
import TextArea from "../../../../components/FormikComponents/TextArea";

interface PostFormProps {
    post: PostType;
    onSubmit: (post: PostType) => void;
}

const PostForm: FC<PostFormProps> = ({post, onSubmit}) => {

    // TODO: TASK #2
    //  create Formik form for post editing
    //  for fields use <TextField />, <TextArea /> component


    // TODO: optional task - validation
    //  create validation via yup

    return <Formik initialValues={post} onSubmit={onSubmit}>
        <Form>
            <label>
                Title:
            </label>
            <TextField name={"title"} />
            <br />
            <label>
                Body:
            </label>
            <TextArea name={"body"}/>
            <button type={"submit"}>
                Save
            </button>
        </Form>
    </Formik>
}

export default PostForm;