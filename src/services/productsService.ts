import axios from 'axios';

const apiUrl = "https://fakestoreapi.com/products";
const limit = '?limit=4'

export const getAll = async (): Promise<any> => {
    return axios.get(apiUrl)
}

export const getByCategory = async (category: string): Promise<any> => {
    return axios.get(apiUrl + "/category/" + category + limit)
}
