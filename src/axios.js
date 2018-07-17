import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://yoururl.com'
})

export default instance;