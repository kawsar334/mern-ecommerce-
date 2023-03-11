

import axios  from "axios";


const BASEURL= "http://localhost:4004/api/";

const token = JSON?.parse(JSON?.parse(localStorage?.getItem("persist:ecommerce"))?.user)?.currentUser?.token 


export const publicRequest = axios.create({
    baseURL:BASEURL,
});
  

export const userRequest = axios.create({
    baseURL:BASEURL,
    headers: { token: `Bearer ${token}` }

})  