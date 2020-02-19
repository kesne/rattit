import React from 'react';
import Post from './Post';

export default function PostList(props) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                padding: '1rem',
                gridGap: '2rem',
            }}
        >
            {props.allPosts.map(post => {
                return <Post {...post} key={post.id} />;
            })}
        </div>
    );
}
