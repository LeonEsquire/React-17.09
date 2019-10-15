import React, { Fragment} from 'react';

export const Hello = function(props) {
    console.log(props.fetchPosts);

    return (
        <Fragment>
            <h1>
                {props.user.name}
            </h1>
            <div>
                {props.posts[0]}
            </div>
        </Fragment>
    );
};