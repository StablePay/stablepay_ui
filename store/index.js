import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import tokenInfoReducer from './reducers/tokenInfoReducer';
import uiReducer from './reducers/uiReducer';
import WalletData from './reducers/walletReducer'
import TokenData from './reducers/tokenReducer'


const rootReducer = combineReducers({
    tokenInfo: tokenInfoReducer,
    WalletData: WalletData,
    TokenData: TokenData,
    ui: uiReducer
})

const getStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    return store;
}

export default getStore;