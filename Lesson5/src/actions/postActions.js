import axios from "axios";

export function fetchPosts() {
    return function(dispatch) {
        dispatch({type: "FETCH_POSTS"});

        axios.get("http://rest.learncode.academy/api/reacttest/posts")
            .then((response) => {
                dispatch({type: "FETCH_POSTS_FULFILLED", payload: [
                        {id:1, text: 'oh, hi Mark'},
                        {id:2, text: 'you are tearing me apart, Lisa!'}
                    ]
                })
            })
            .catch((err) => {
                dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
            })
    }
}

export function addPost(id, text) {
    return {
        type: 'ADD_POST',
        payload: {
            id,
            text,
        },
    }
}

export function updatePost(id, text) {
    return {
        type: 'UPDATE_POST',
        payload: {
            id,
            text,
        },
    }
}

export function deletePost(id) {
    return { type: 'DELETE_POST', payload: id}
}