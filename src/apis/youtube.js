import axios from 'axios';
const KEY = 'AIzaSyBeyjUfbCgz3FszrnCI-UWgkcQpI1juRL8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


