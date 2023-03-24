

import axios  from "axios";


const BASEURL= "http://localhost:4004/api/";

const token = ""


export const publicRequest = axios.create({
    baseURL:BASEURL,
});
  

export const userRequest = axios.create({
    baseURL:BASEURL,
    headers: { token: `Bearer ${token}` }

})  