import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-burger-builder-9e466.firebaseio.com/'
});

export default instance;