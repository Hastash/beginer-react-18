import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    let isMounted = true; //Handle race condition
    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          const data = response?.data?.data || [];
          // Simulate delay using setTimeout
            setTimeout(() => {
            if(isMounted){
                setUsers(data);
                setLoading(true);
                setIsError(false);
            }
            }, 2000); // 2 seconds delay
        } catch (error) {
            setIsError(true);
            setLoading(false);
        }
        return () => (isMounted = false); //Handle race condition
    };
    //Reference: https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
   
    useEffect(() => {
        fetchData();
    });  

    return {
        users, loading, isError
    }
}
export default useFetch;