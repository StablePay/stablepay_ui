import axios from 'axios';
import { startLoading, stopLoading } from '../actions/ui';


const ETH_ORDER_API = '';
const ZRX_ORDER_API = '';

export const fetchOrder = (asset) => {
    return async (dispatch) => {
        dispatch(startLoading());
        if (asset === 'ETH') {

        }

        dispatch(stopLoading());
    }
}

const _fetchEth = async () => {
    const res = await axios
}
