import axios from 'axios' ;

const userFetch = axios.create({
    baseURL : 'http://localhost:3000/api/v1/user'
});

export default userFetch ;