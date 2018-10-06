import { START_LOADING, STOP_LOADING, SHOW_MODAL, CLOSE_MODAL } from './constants';

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const showModal = (message) => {
    return {
        type: SHOW_MODAL,
        msg: message
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}