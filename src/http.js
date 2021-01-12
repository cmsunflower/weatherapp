import axios from 'axios';

const http = axios.create();

http.interceptors.response.use(response => {
    return response.data;
},(error)=>{
    return Promise.reject(error);
})

function fetch(type, url, params, config){
    return new Promise((resolve, reject) => {
        http[type](url, params, config)
            .then(res => resolve(res))
            .catch(err => reject(err));
    })
}

function Get(url, param = {}, config = {}){
    return fetch('get',url,{params:param,...config});
}

function Post(url,params = {},config = {}){
    return fetch('post', url, params, config);
}

export {http, Get, Post}
