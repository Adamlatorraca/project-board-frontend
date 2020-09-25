import React, { Component} from 'react'
import CommentInput from '../components/comments/CommentInput'
import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'

class CommentsContainer extends Component {

    render() {
        return(
            <div>
                <CommentInput addComment={this.props.addComment} projectId={this.props.project.id}/>
                <Comments comments={this.props.comments} projectId={this.props.project.id} />
            </div>
        )
    }
}

const mapStateToProps = ({ comments }) => {
    return { comments }
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch({ type: 'ADD_COMMENT', comment })
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)