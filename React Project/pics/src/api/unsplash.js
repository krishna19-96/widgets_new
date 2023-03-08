import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID eN97N__A2IDMVQD8jfU2s1sA-NE0aFQSr7GgoFVeIHs'
    }

});
