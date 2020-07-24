import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1mZRN6xVNzVDN8-6V0TCQZHt35U0J_Z4O11boS5gCR4'
    }
})