import { LOAD_TOKEN_BALANCE } from '../actions/constants';

const INITIAL_STATE = {
    tokenBalance: null,
    tokenAddress: null,
    tokenSymbol: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_TOKEN_BALANCE:
            return {
                ...state,
                ...action.tokenInfo
            };         
        default:
            return state;
    }
};