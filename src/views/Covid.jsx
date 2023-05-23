/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Covid = () =>{
    // ComponentDidMount
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
    (async () => {
        const res = await axios.get("https://reqres.in/api/users?page=2")
        let data = res && res.data.data ? res.data.data : [];
        setUsers(data);
    })();
    }, []);

    // const [users, setUsers] = React.useState([]);
    // const f = async () => {
    //   const res = await fetch("https://reqres.in/api/users/");
    //   const json = await res.json();
    //   setUsers(res);
    // };
    // React.useEffect(() => {
    //   f();
    // }, []);
    
    //https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
   
    return(   
    <table id="customers">
      { console.log('>>> Check data user: ', users)}
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users && users.length > 0 
            && users.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                )
            } )}
        </tbody>
    </table>
    )
}
export default Covid;