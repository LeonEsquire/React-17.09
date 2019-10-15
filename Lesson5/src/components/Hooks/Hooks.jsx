import React, {Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userHello } from 'actions/usersActions';

export const Hooks = function(props) {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <h1>
                Hooks {posts[0]}
            </h1>
            <button onClick={() => dispatch(userHello())}>Click</button>
        </Fragment>
    );
};