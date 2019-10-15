import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchPosts } from 'actions/postsActions';
import { Hello } from 'components/Hello';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        posts: state.posts.posts,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

export const HelloContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Hello);