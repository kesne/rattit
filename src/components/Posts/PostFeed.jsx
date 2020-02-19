import React from 'react';

import NewPostForm from './NewPostForm.jsx';
import PostList from './PostList.jsx';
import SortButton from './SortButton.jsx';
import { rats } from '../../rats.js';

function* switchOrder() {
    let order = true;
    while (true) {
        order = !order;
        yield order;
    }
}
const switcherooni = switchOrder();

export default class PostFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: rats,
        };
    }

    handleNewPost = newPost => {
        this.setState({ allPosts: [newPost, ...this.state.allPosts] });
    };
    handleSort = sortType => {
        const newArray = this.state.allPosts.sort((a, b) => {
            return switcherooni.next().value
                ? a.rating - b.rating
                : b.rating - a.rating;
        });
        this.setState({ allPosts: newArray });
    };

    render() {
        return (
            <div
                style={{
                    width: '80%',
                    margin: '1rem auto',
                }}
            >
                <NewPostForm onNewPostSubmission={this.handleNewPost} />
                <SortButton onChangeSortOrder={this.handleSort} />
                <PostList allPosts={this.state.allPosts} />
            </div>
        );
    }
}
