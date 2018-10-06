import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import tokenReducer from './reducers/tokenReducer';


const rootReducer = combineReducers({
    token: tokenReducer
})

const getStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    return store;
}




export default getStore;