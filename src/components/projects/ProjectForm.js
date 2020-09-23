import React, { Component } from 'react'

class ProjectForm extends Component {

    state = {
        title: '',
        description: '',
        contact: '',
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addProject(this.state)
        this.setState({
            title: '',
            description: '',
            contact: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)} >


                    
                    <legend>Tell the world about your project!</legend>
                    <br />
                    <label htmlFor="title">Project Title:   </label>
                    <input id="title" name="title" type="text" required="" value={this.state.title} onChange={(event) => this.handleOnChange(event)} />
                    
                    <br />
                    <br />
                    
                    <label htmlFor="description">Project Description:   </label>
                    <textarea className="form-control" id="description" name="description" value={this.state.description} onChange={(event) => this.handleOnChange(event)} />

                    <br />
                    <br />
                    <label className="col-md-4 control-label" htmlFor="contact">Contact Info:   </label>  
                    <input id="contact" name="contact" type="text" required="" value={this.state.contact} onChange={(event) => this.handleOnChange(event)} />
                    <br />
                    <br />

                    <button id="submit" name="submit" className="btn btn-primary" type="submit" >Post Your Project!</button>

                </form>
            </div>
        )
    }

}

export default ProjectForm