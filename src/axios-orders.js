import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a12ab.firebaseio.com/'
});

export default instance;