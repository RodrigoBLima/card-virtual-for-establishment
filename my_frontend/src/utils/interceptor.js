import axios from 'axios'; 
import cookies from './cookies';

export const interceptor = axios.interceptors.request.use(async (config) => {    
    
    config.headers['x-csrftoken'] = cookies;        
    config.headers['accept'] = 'application/json';
    config.headers['content-type'] = 'application/json';
    
    return config;       

  }, (error) => {    
    return Promise.reject(error);
});