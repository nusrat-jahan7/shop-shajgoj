import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
               const res = await fetch(url) 
               const data = await res.json()
               setData(data)
               setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        fetchData()
    },[url]) 
    return {data, loading}
}

export default useFetch;

