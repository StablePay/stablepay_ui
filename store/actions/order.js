import axios from 'axios';
import { startLoading, stopLoading } from '../actions/ui';

const BASE_API_URL = 'http://www.mocky.io/v2/';

const ETH_ORDER_API = '5bb830513000005d00f93b81';
const ZRX_ORDER_API = '5bb830513000005d00f93b81';

export const fetchOrder = (asset) => async dispatch => {
    dispatch(startLoading());

    try {
        if (asset === 'ETH') {
            _fetchEthOrder();
        }
    
        if (asset === 'ZRX') {
            _fetchZRXOrder();
        }
    } catch (e) {
        
    }
    
    dispatch(stopLoading());
}

const _fetchZRXOrder = async () => {
    const res = await axios.get(`${BASE_API_URL}${ETH_ORDER_API}`);
    console.log(res);
}

const _fetchEthOrder = async () => {
    const res = await axios.get(`${BASE_API_URL}${ZRX_ORDER_API}`);
    console.log(res);
}
