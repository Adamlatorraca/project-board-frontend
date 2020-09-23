import uuid from 'uuid'

function manageProjects(state = { projects: [] }, action) {


    switch (action.type) {
        case 'Add Project':
            const project = {
                id: uuid(),
                title: action.title,
                description: action.description,
                contact: action.contact
            }

            return {...state, projects: [state.projects, project] }
        
        default:
            return state
    }
}

export default manageProjects