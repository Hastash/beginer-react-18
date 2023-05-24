import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // let isMounted = true; //Handle race condition
    useEffect(() => {
        const selfRequest = axios.CancelToken.source()// <-- 1st Step
        const fetchData = async () => {
        try {
          const response = await axios.get(url,{
            cancelToken: selfRequest.token, // <-- 2nd Step
          });
          const data = response?.data?.data || [];
          // Simulate delay using setTimeout
            // if(isMounted){
                setUsers(data);
                setLoading(true);
                setIsError(false);
            // }
        } catch (error) {
            if(axios.isCancel(error)){
                console.log('Request canceled', error.message)
            } else {
                //Handle error
                setIsError(true);
                setLoading(false);
            }
        }
    }
        // Delay Fetch
        setTimeout(() => {fetchData();}, 3000)
        return () => {
            selfRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }
        // return () => (isMounted = false); //Handle race condition
        
}, [url]);
    //Reference: https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook



    return {
        users, loading, isError
    }
}
export default useFetch;