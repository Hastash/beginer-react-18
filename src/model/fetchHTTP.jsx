import { useEffect, useState } from "react";
// Create an instance.

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    let controller;

    useEffect(() => {
        controller = new AbortController()
        let signal = controller.signal;
        const fetchData = async () => {
        try {
            const res = await fetch(url,{ signal })
            const response = await res.json()
            // const data = response?.data || [];
            let data = response ? response : [];
            console.log('Check data 1: ', data)
            // Simulate delay using setTimeout
            setData(data);
            setIsLoading(false);
            setIsError(false);

        } catch (error) {
            if(error.name === 'AbortError'){
                //Handle Abort
                console.log('Request canceled');
            } else {
                //Handle Error
                setIsError(true);
                setIsLoading(false);
            }
        }
    }
        // fetchData();
        // Delay Fetch in Real Environment
        setTimeout(() => {fetchData();}, 3000)

        return () => {
            controller.abort();
        };
}, [url]);
    //Reference: https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook



    return {
        data, isLoading, isError
    }
}
export default useFetch;