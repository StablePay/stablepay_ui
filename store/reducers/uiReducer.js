import { START_LOADING, STOP_LOADING, SHOW_MODAL, CLOSE_MODAL } from '../actions/constants';


const INITIAL_STATE = {
    loading: false,
    loadingMessage: '',
    showModal: false,
    modalType: null 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            }    
        case SHOW_MODAL:
            return {
                ...state,
                showModal: true,
                loadingMessage: action.msg
            }    
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false
            }  
        default:
            return state;
    }
};