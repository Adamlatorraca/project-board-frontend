import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {

  render() {

    const associatedComments = this.props.comments.filter(comment => comment.projectId === this.props.projectId)

    const comments = associatedComments.map((comment, index) => {
        return <Comment key={index} comment={comment} />
    })

    return (
      <ul>
          { comments }
      </ul>
    );
  }
};

export default Comments;