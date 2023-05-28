// import useFetch from "../models/fetch";
import useFetch from "../model/fetchHTTP";
// import moment from "moment";

const Employee = () =>{
    // Start Date
    // const today= new Date(new Date().setHours(0,0,0,0)); 
    // const today= moment().startOf('day');

    // // End Dat
    // const priorDate = moment().subtract(30,'days');

    // How to convert to ISOString: `...${priorDate.toISOString()}...${today.toISOString()}`
    const{data: usersList, isLoading, isError} = useFetch("https://reqres.in/api/users?page=2")
    const  users = usersList.data;
    return(   
    <div>
    <table id="customers">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {!isLoading ? ( 
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
    </div>
    )
}
export default Employee;