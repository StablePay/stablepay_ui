import { START_LOADING, STOP_LOADING } from '../actions/constants';


const INITIAL_STATE = {
    showSpinner: false,
    showModal: false,
    modalType: null 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                showSpinner: true
            }
        case STOP_LOADING:
            return {
                ...state,
                showSpinner: false
            }    
        default:
            return state;
    }
};