import React from "react";

import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/postsActions';

class Layout extends React.Component {

    render() {
        const { user, posts } = this.props;
        if (!posts.length) {
            return <button onClick={this.fetchPosts.bind(this)}>Загрузить посты</button>
        }
        const mappedPosts = posts.map(post => <li key={post.id}> {post.text}</li>)

        return <div>
            <h1>{user.name}</h1>
            <ul>{mappedPosts}</ul>
        </div>
    }
}