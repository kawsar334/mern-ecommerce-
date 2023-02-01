

import axios  from "axios";


const BASEURL= "http://localhost:4004/api/";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2M3NDhmNWFkOWZlYzk2ZGNiODc5ZCIsInVzZXIiOnsiX2lkIjoiNjNjYzc0OGY1YWQ5ZmVjOTZkY2I4NzlkIiwidXNlcm5hbWUiOiJuZXc0IiwiZW1haWwiOiJuZXc0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiVTJGc2RHVmtYMThxamFjSXJtWEYvd0puUUpseGh6TTdNZjlNVklwTlBORT0iLCJpbWciOiIiLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTAxLTIxVDIzOjI2OjA3LjcyN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTIxVDIzOjI2OjA3LjcyN1oiLCJfX3YiOjB9LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NzQzNDM1ODMsImV4cCI6MTY3NDYwMjc4M30.RGdZFLqyAe4XAYLmQLxMRJjU2CHI0g_XQyV0DqvvBhE"
export const publicRequest = axios.create({
    baseURL:BASEURL,
});


export const userRequest = axios.create({
    baseURL:BASEURL,
    headers: { token: `Bearer ${token}` }


})