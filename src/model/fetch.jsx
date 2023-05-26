import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    // let isMounted = true; //Handle race condition
    useEffect(() => {
        const selfRequest = axios.CancelToken.source()// <-- 1st Step
        const fetchData = async () => {
        try {
          let response = await axios.get(url,{
            cancelToken: selfRequest.token, // <-- 2nd Step
          });
          let data = (response && response.data) ? response.data : [];
          // Simulate delay using setTimeout
            // if(isMounted){
                setData(data);
                setIsLoading(false);
                setIsError(false);
            // }
        } catch (error) {
            if(axios.isCancel(error)){
                //Handle Abort
                console.log('Request canceled', error.message)
            } else {
                //Handle error
                setIsError(true);
                setIsLoading(false);
            }
        }
    }
        // Delay Fetch
        setTimeout(() => {
            fetchData();
        }, 3000)
        
        return () => {
            selfRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }
        // return () => (isMounted = false); //Handle race condition
        
}, [url]);
    //Reference: https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook



    return {
        data, isLoading, isError
    }
}
export default useFetch;