import React, { Component } from 'react'
import Project from './Project'

class Projects extends Component {

    renderProjects = () => this.props.projects.map(
        project =>
            <Project key={project.id} project={project} />
        )

    render() {
        return(
            <div>
                {this.renderProjects()}
            </div>
        )
    }
}

export default Projects