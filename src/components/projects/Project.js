import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Project extends Component {

    render() {
        console.log('rendering project')
        return(
            <div>
                <ul>
                    <li>Title: {this.props.project.title}</li>
                    <li>Description: {this.props.project.description}</li>
                    <li>Contact Info: {this.props.project.contact}</li>
                </ul>
                <CommentsContainer project={this.props.project} />
            </div>
        )
    }
}

export default Project