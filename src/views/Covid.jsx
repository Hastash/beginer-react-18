/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // ComponentDidMount
    // useEffect(() => {
    //     setTimeout(()=>{
    //         (async () => {         
    //                 const res = await axios.get("https://reqres.in/api/users?page=2")
    //                 let data = res && res.data.data ? res.data.data : [];
    //                 setUsers(data);
    //                 setLoading(false);
    //         })();
    //     },20000)
    // }, []);
    const fetchData = async () => {
            try {
              const response = await axios.get("https://reqres.in/api/users?page=2");
              const data = response?.data?.data || [];
              // Simulate delay using setTimeout
                setTimeout(() => {
                    setUsers(data);
                    setLoading(true);
                    setIsError(false);
                }, 2000); // 2 seconds delay
            } catch (error) {
                setIsError(true);
                setLoading(false);
            }
    };
    useEffect(() => {
        fetchData();
    }, []);  
    //https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
   
    return(   
    <table id="customers">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {loading ? ( 
                users && users.length > 0 ? ( 
                users.map((item) => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="3">No data available</td>
                </tr>
                )
            ) : (
                isError ?
                (<tr>
                    <td colSpan="3" style={{'textAlign':'center'}}>Something Wrong...!!</td>
                </tr>
                ):(
                <tr>
                    <td colSpan="3" style={{'textAlign':'center'}}>Loading...</td>
                </tr>)
            )}
        </tbody>
    </table>
    )
}
export default Covid;