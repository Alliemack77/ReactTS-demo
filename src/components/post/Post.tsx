import React from 'react';

//reps the shape of an object
export interface PostProps {
    title: string, 
    description: string, 
    author: string, 
    isPublished: boolean
}


// pass <PostProps> to the func component so it knows what props Post has
// extract the props from PostProps so they can be used in the component itself
const Post: React.FC<PostProps> = ({title, author, description, isPublished}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{author}</p>
            <p>{description}</p>
            <p>{isPublished? "true" : "false"}</p>
        </div>
    )
}



export default Post;