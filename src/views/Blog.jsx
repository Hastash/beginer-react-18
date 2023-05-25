import "./css/Blog.css"
import useFetch from "../models/fetch"
import { useEffect, useState } from "react";
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const{data: dataBlogs, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/posts/")

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 3);
            setNewData(data)
        }
    }, [dataBlogs]);
    return (
        (newData && newData.length > 0 && newData.map(item=>{
            return(

                <div className="w3-row" >
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="w3-third" style={{'height': '100%'}} key={item.id}>
                            <div className="w3-margin w3-border" >
                                <div className="title">
                                    <span>{item.title} </span>
                                    <span>X</span>
                                </div>
                                <div className="conent">{item.body}</div>
                                <button className="w3-button w3-block w3-dark-grey " style={{'bottom': '10px'}}>
                                    View detail
                                </button>
                            </div>
                        </div>
                    )
                })}
                </div>
            )
        }))
    )
}
export default Blog