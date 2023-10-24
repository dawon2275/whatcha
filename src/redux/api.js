import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(function(config) {
    //요청이 전달 되기 전에 작업 수행
    console.log('request start', config) //개발자가 확인용으로 쓰는것
    return config;
},function (error) {
    //요청 오류가 있는 작업 수행
    console.log('request error', error)
    return Promise.reject(error)
})

api.interceptors.response.use(function(response) {
    //요청이 전달 되기 전에 작업 수행
    console.log('get response', response) //개발자가 확인용으로 쓰는것
    return response;
},function (error) {
    //요청 오류가 있는 작업 수행
    console.log('get error', error)
    return Promise.reject(error)
})

export default api