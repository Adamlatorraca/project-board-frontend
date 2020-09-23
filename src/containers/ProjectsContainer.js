import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectForm from '../components/projects/ProjectForm'
import Projects from '../components/projects/Projects'

class ProjectsContainer extends Component {

    render(){
        return(
            <div>
                <ProjectForm addProject={this.props.addProject}/>
                <Projects projects={this.props.projects}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProject: project => dispatch({ type: 'ADD_PROJECT', project })
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)