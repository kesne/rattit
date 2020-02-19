import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post.jsx';

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

PostList.propTypes = {
    allPosts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
            id: PropTypes.string,
            rating: PropTypes.number,
        })
    ),
};
