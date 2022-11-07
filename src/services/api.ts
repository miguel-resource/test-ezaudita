import axios from 'axios';


const apiUrl = '';

export const get = () => {
    return axios.get(apiUrl).then((response) => {
        console.log(response)
    });
}