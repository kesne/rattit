import React from 'react';

import NewPostForm from './NewPostForm.jsx';
import PostList from './PostList.jsx';

export default class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
        };
    }

    handleNewPost = newPost => {
        this.setState({ allPosts: [newPost, ...this.state.allPosts] });
    };

    render() {
        return (
            <div>
                <NewPostForm onNewPostSubmission={this.handleNewPost} />
                <PostList allPosts={this.state.allPosts} />
            </div>
        );
    }
}
