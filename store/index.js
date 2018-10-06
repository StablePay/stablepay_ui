import { combineReducers } from 'redux'
import WalletData from './reducers/walletReducer'
import TokenData from './reducers/tokenReducer'

const rootReducer = combineReducers({
    WalletData: WalletData,
    TokenData: TokenData,
})

export default rootReducer;