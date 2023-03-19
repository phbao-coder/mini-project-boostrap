import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        Accept: 'application/json',
    },
});

export const getRequest = async (url) => {
    try {
        const res = await instance.get(url);
        return res;
    } catch (error) {
        console.log(error);
    }
};
