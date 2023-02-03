import axios from "axios";


const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGE5NTIyMjgzZDJhMTQ5YzVhMWMyZiIsInVzZXIiOnsiX2lkIjoiNjNkYTk1MjIyODNkMmExNDljNWExYzJmIiwidXNlcm5hbWUiOiJuZXcyMiIsImVtYWlsIjoibmV3MjJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxODl5SUNudys0RTJObU5jdnFYeUlBZTFzZ0VkaVFnRlFrPSIsImlzQWRtaW4iOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMDItMDFUMTY6MzY6NTAuNTQ0WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDItMDFUMTY6MzY6NTAuNTQ0WiIsIl9fdiI6MH0sImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTM0MTIyOSwiZXhwIjoxNjc1NjAwNDI5fQ.iz4gkWyKoNECkdRX_a9gc8axCdZPgFRL-wxLeOFt0J4"
const BASEURL = "http://localhost:4004/api/";
export const userRequest = axios.create({
    baseURL: BASEURL,
    headers: { token: `Bearer ${token}` }
});


export const publicRequest = axios.create({
    baseURL: BASEURL,

});


