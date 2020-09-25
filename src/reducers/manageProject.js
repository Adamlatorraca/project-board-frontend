import uuid from 'uuid'

function manageProjects(state = { projects: [] }, action) {


    switch (action.type) {
        case 'ADD_PROJECT':
            

            return {...state, projects: [...state.projects, action.project] }
    
        case 'ADD_COMMENT':
            const comment = {
                id: uuid(),
                projectId: action.comment.projectId,
                text: action.project.text
            }

            return {...state, comments: [state.comments, comment]}

        default:
            return state
    }
}

export default manageProjects