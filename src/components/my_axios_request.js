import axios from 'axios';
import { refreshTokenUrl } from './urls';

const baseUrl = "http://127.0.0.1:8000/";

export const axiosInstance = axios.create({
    baseUrl: baseUrl,
    headers : {
        // 'Authorization': 'Bearer ' + token !== undefined ? `${JSON.parse(window.localStorage.getItem("token"))["access_token"]}` : 'sometoken',
        'Content-Type': 'application/json'
    }
})

// axiosInstance.interceptors.response.use(config=>{
//     console.log(config, "intercepted")
//     return config;

// },err=>{
//     console.log(err, "intercepted err")
//     let initailUrl = err.response.config.url;
//     let initialRequest = err.response.config;
//     let initailMethod = err.response.config.method.toUpperCase();
//     let initialBody = err.response.config.data;
//     if (err.response.status === 403 && initailUrl === baseUrl + 'gateway/token/refresh'){
//         window.location.href = "/login"
//     }
//     if (err.response.status === 403){
//         console.log(window.localStorage.getItem("token"))
//         let refreshToken = JSON.parse(window.localStorage.getItem("token"))["refresh_token"];
//         console.log(refreshToken)
//         return axiosInstance({
//             method: "POST",
//             url: "http://127.0.0.1:8000/gateway/token/refresh",
//             data: {
//                 refresh: `Bearer ${refreshToken}`
//             },
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(resp=>{
//             console.log(resp, "retry")
//             window.localStorage.setItem("token", JSON.stringify({"access_token": resp.data.access_token, "refresh_token": resp.data.refresh_token}));
//             axiosInstance.defaults.headers['Authorization'] = `Bearer ${resp.data.access_token}`;
//             initialRequest.headers['Authorization'] =  `Bearer ${resp.data.access_token}`;

//             return axiosInstance(initialRequest);
//         })
//         .catch(errr=>{
//             console.log("Still Failed", err.response);
//         })
//     }
// })