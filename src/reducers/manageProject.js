//import uuid from 'uuid'

function manageProjects(state = { projects: [] }, action) {


    switch (action.type) {
        case 'ADD_PROJECT':
            

            return {...state, projects: [...state.projects, action.project] }
        
        default:
            return state
    }
}

export default manageProjects