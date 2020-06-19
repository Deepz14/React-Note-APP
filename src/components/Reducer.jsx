import { v4 as uuidv4 } from 'uuid'

export const Reducer = (Initialstate, action) => {
    switch(action.type){
        case "add_note":
            return [...Initialstate, {id : uuidv4(), text : action.payload}]
        case 'delete_note':
            const temp = Initialstate.filter((state, index) => state.id !== action.payload)
            return temp;
        case 'edit_note':
            const edit = Initialstate.filter((state, index) => state.id !== action.payload)
            return edit;    
        default:
            return Initialstate;
    }
}
