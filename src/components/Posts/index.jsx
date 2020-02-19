import React, { useState } from 'react';

import NewPostForm from './NewPostForm';
import PostList from './PostList';
import SortButton from './SortButton';
import { rats } from '../../rats';

export default function PostFeed() {
    const [sortOrder, setSortOrder] = useState('DESC');
    const [posts, setPosts] = useState(rats);

    function handleNewPost(newPost) {
        setPosts(currentPosts => [newPost, ...currentPosts]);
    }

    function handleSort(sortType) {
        const nextSortOrder = sortOrder === 'DESC' ? 'ASC' : 'DESC';

        const newArray = [...posts].sort((a, b) =>
            nextSortOrder === 'DESC' ? a.rating - b.rating : b.rating - a.rating
        );

        setPosts(newArray);
        setSortOrder(nextSortOrder);
    };

    return (
        <div
            style={{
                width: '80%',
                margin: '1rem auto',
            }}
        >
            <NewPostForm onNewPostSubmission={handleNewPost} />
            <SortButton onChangeSortOrder={handleSort} />
            <PostList allPosts={posts} />
        </div>
    );
}

// export default class PostFeed extends React.Component {
//     state = {
//         sortOrder: 'DESC',
//         allPosts: rats,
//     };

//     handleNewPost(newPost) {
//         this.setState({ allPosts: [newPost, ...this.state.allPosts] });
//     }

//     handleSort = sortType => {
//         const nextSortOrder = this.state.sortOrder === 'DESC' ? 'ASC' : 'DESC';

//         const newArray = [...this.state.allPosts].sort((a, b) =>
//             nextSortOrder === 'DESC' ? a.rating - b.rating : b.rating - a.rating
//         );

//         this.setState({
//             sortOrder: nextSortOrder,
//             allPosts: newArray,
//         });
//     };

//     render() {
//         return (
//             <div
//                 style={{
//                     width: '80%',
//                     margin: '1rem auto',
//                 }}
//             >
//                 <NewPostForm onNewPostSubmission={this.handleNewPost} />
//                 <SortButton onChangeSortOrder={this.handleSort} />
//                 <PostList allPosts={this.state.allPosts} />
//             </div>
//         );
//     }
// }
