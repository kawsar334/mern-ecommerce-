import axios from "axios";


const token ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGM5MzAyMWY3M2MxNmJjNGNhZWQxNCIsInVzZXIiOnsiX2lkIjoiNjQwYzkzMDIxZjczYzE2YmM0Y2FlZDE0IiwidXNlcm5hbWUiOiJhYmFkc2ZkIiwiZW1haWwiOiJhYmRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxOWVEYnhNSHUyYVJPMjRJQ0NnUUNMWXNENjAySlhpbkE0PSIsInBob25lIjoiMjkyODgzODM4MzgiLCJpbWciOiIiLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJfX3YiOjB9LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Nzg1NTMxODAsImV4cCI6MTY3ODgxMjM4MH0.EonNaUzH2Avp7SjchrYWQ203jA66dmHZr_LlM-odaRM"
const BASEURL = "http://localhost:4004/api/";
export const userRequest = axios.create({
    baseURL: BASEURL,
    headers: { token: `Bearer  ${token}` }
});


export const publicRequest = axios.create({
    baseURL: BASEURL,

});


