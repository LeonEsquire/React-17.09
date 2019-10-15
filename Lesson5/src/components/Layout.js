import React from "react";
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';
import { fetchPosts } from '../actions/postsActions';

class Layout extends React.Component {
    fetchPosts() {
        this.props.dispatch(fetchPosts());
    }

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

    componentDidMount() {
        this.props.dispatch(fetchUser())
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        posts: state.tweets.tweets
    }
}

export default connect(mapStateToProps)(Layout);