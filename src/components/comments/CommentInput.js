import React, { Component } from 'react'

class CommentInput extends Component {

    state = {
        text: ''
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addComment({
            text: this.state.text,
            projectId: this.props.projectId
        })
        this.setState({
            text: ''
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.text} onChange={this.handleOnChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default CommentInput