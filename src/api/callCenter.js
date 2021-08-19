import Axios from 'axios';

export const axiosGet = (url, config = {}) => Axios.get(url, config);
export const axiosPost = (url, data = {}, config = {}) => Axios.post(url, data, config);
export const axiosDelete = (url, config = {}) => Axios.delete(url, config);
