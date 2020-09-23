import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ProjectInput from '../components/projects/ProjectInput
// import Projects from '../components/projects/Projects

class ProjectsComponent extends Component {

    render(){
        return(
            <div>
                <ProjectForm />
                <Projects />
            </div>
        )
    }
}

mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)