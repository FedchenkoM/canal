import axios from 'axios';

export const getTableList = () => {
    return axios.get('http://localhost:5000/api/table')
}