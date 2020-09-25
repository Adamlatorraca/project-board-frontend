import uuid from 'uuid'

function manageProjects(state = { projects: [], comments: [] }, action) {


    switch (action.type) {
        case 'ADD_PROJECT':
            const project = {
                id: uuid(),
                title: action.project.title,
                description: action.project.description,
                contact: action.project.contact
            }
            

            return {...state, projects: [...state.projects, project] }
    
        case 'ADD_COMMENT':
            const comment = {
                id: uuid(),
                projectId: action.comment.projectId,
                text: action.comment.text
            }

            return {...state, comments: [state.comments, comment]}

        default:
            return state
    }
}

export default manageProjects