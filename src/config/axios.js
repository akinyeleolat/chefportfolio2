import axios from 'axios';
const AuthToken = localStorage.getItem('jwt');
const instance = axios.create({
    baseURL:'https://chef-portfolio-production.herokuapp.com/api/',
    headers:{
    'Authorization':AuthToken
    }
})

export default instance;