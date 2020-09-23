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
        //this.props.addProject(this.state)
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
                    <label for="title">Project Title:   </label>
                    <input id="title" name="title" type="text" required="" />
                    
                    <br />
                    <br />
                    
                    <label for="description">Project Description:   </label>
                    <textarea class="form-control" id="description" name="description"></textarea>

                    <br />
                    <br />
                    <label class="col-md-4 control-label" for="contact">Contact Info:   </label>  
                    <input id="contact" name="contact" type="text" required="" />
                    <br />
                    <br />

                    <button id="submit" name="submit" class="btn btn-primary">Post Your Project!</button>

                </form>
            </div>
        )
    }

}

export default ProjectForm