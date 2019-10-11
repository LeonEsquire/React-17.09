import React, { Component } from 'react';
import axios from 'axios';

import CommentCard from '../components/Comment';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    render() {
        return (
            <div>
                {this.state.comment && <CommentCard {...this.state.comment} />}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then(response => {
                const data = response.data;
                this.setState({ comment: data })
            })
    }
}
