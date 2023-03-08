import axios from 'axios';

const KEY = "AIzaSyAljkEf59tYAmEybQulWqV42Y4MK7Otvso";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY

    }
}); 