import axios from 'axios';

const KEY = 'AIzaSyCLJiRixvFfNG6g3pVnrwD64YzeQYEKGD0';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


