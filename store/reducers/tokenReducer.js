import { LOAD_TOKEN_BALANCE } from '../actions/constants';

const INITIAL_STATE = {
    balance: null,
    address: null,
    symbol: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_TOKEN_BALANCE:
            return {
                ...state,
                ...action.payload
            };         
        default:
            return state;
    }
};