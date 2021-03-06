import React, {FC} from "react";
import {useField} from "formik";

interface TextFieldProps {
    name: string;
}

const TextField = ({name}: TextFieldProps) => {
    const [field] = useField({name});
    return <textarea {...field} className={"w-100"} />
}

export default TextField;