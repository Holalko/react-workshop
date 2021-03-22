import React from "react";

interface PostProps {
    body: string;
    id: number;
    title: string;
}
export const Post = ({id,title,body}: PostProps) => {
    return <div style={{
        boxShadow: '0 0 6px 2px #dadada',
        padding: '0.5em 0.75em',
        margin: '2em 0'

    }}>
        <h5 style={{
            margin:'0'
        }}>Title: {title}</h5>
        <small>body: {body}</small>
    </div>
}