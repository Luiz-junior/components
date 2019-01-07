import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID b36b977efdbad964eb1f65eb401c568068ef888b5e64d42acdb63427010af67f'
    }
})