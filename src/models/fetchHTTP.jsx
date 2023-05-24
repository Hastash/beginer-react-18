import { useEffect, useState } from "react";
// Create an instance.
let controller;

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        controller = new AbortController()
        let signal = controller.signal;
        const fetchData = async () => {
        try {
            const res = await fetch(url,{ signal })
            const response = await res.json()
            const data = response?.data || [];
            // console.log('Check data: ', data)
            // Simulate delay using setTimeout
            setUsers(data);
            setLoading(true);
            setIsError(false);

        } catch (error) {
            if(error.name === 'AbortError'){
                //Handle Abort
                console.log('Request canceled');
            } else {
                //Handle error
                setIsError(true);
                setLoading(false);
            }
        }
    }
        fetchData();
        // Delay Fetch in Real Environment
        // setTimeout(() => {fetchData();}, 3000)

        return () => {
            controller.abort();
        };
}, [url]);
    //Reference: https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook



    return {
        users, loading, isError
    }
}
export default useFetch;