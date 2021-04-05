import axios from 'axios';

    const APIExchange = axios.create({
        baseURL: 'https://v6.exchangerate-api.com/v6/863768c8d54f6b4767d23e6a/pair/'
    })

export default APIExchange;

