import React from 'react';
import Post from './post/Post'
import posts from './post/PostData';

// can also have posts: PostProps[] = () => [{}] here instead of in sep file


const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to my blog!</h1>
            <div>
                {
                    posts.map((post) => 
                        <Post key={post.title} {...post}/>
                    )
                }
            </div>
        </div>
    )

};

export default App;