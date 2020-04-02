import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-6d88c.firebaseio.com/'
});

export default instance; 