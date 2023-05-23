/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFetch from "../models/fetch";
import moment from "moment";

const Covid = () =>{
    // Start Date
    const today= new Date(new Date().setHours(0,0,0,0)); 

    // End Date
    const priorDate = moment().subtract(30,'days');

    // How to convert to ISOString: `...${priorDate.toISOString()}...${today.toISOString()}`
    const{users, loading: isLoading, isError} = useFetch("https://reqres.in/api/users?page=2")
   
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
            {isLoading ? ( 
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