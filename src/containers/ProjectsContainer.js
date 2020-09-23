import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectForm from '../components/projects/ProjectForm'
// import Projects from '../components/projects/Projects

class ProjectsContainer extends Component {

    render(){
        return(
            <div>
                <ProjectForm />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectsContainer)