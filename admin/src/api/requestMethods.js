import axios from "axios";
import { useEffect, useState } from "react";

const RequestMethods = (url) => {

    const [data, setData] = useState([]);
    const [err , setError] = useState(null);
    const [loading, setLoading] = useState(false);
 
    useEffect(()=>{
        const getData= async()=>{
            try{
                setLoading(true)
                const res = await axios.get(`http://localhost:4004/api${url}`);
                setData(res.data);
                console.log(res.data)
                setError(null)
                setLoading(false)
            }catch(err){
                console.log(err.response.data)
                setError(err);
                setLoading(false)
            }
        }
        getData();
    },[url,])
    return {data, err, loading}
}

export default RequestMethods