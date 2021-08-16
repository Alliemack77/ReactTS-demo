import React from 'react';
import { PostProps } from './Post';

// describe a single post based off of the shape of PostProps (in Post.tsx)
// const post: PostProps = {
//     title: "TS Rocks", 
//     author: "Allison", 
//     description: "How to love TS",
//     isPublished:true
// }

// How do we rep an array of Posts?
// can do this with a custom type
// here posts: has a type of an array of Posts ---> objects (each post is one obj)
// another syntax is PostProps[]
// add as many obj as you need to this array of Posts 
const posts: Array<PostProps> = [
    {
        title: "TS Rocks!!", 
        author: "Allison", 
        description: "How to love TS",
        isPublished: true
    },
    {
        title: "I Love TS!!", 
        author: "Allison", 
        description: "This is really cool, TS",
        isPublished: false
    },{
        title: "Wow TS!", 
        author: "Allison", 
        description: "TS you are the best",
        isPublished: true
    },
]

export default posts;

