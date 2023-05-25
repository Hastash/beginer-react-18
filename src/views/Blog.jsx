import "./css/Blog.css"
import useFetch from "../model/fetchHTTP"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const{data: dataBlogs, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/posts/")
    let navigate = useNavigate();
    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 3);
            setNewData(data)
        }
    }, [dataBlogs]);
    return (
        <>
        <div><button className="btn-add-new" onClick={()=>navigate('/add-new-blog')}>Add new Blog</button></div>
        <div className="blogs-container">
        {!isLoading && newData && newData.length > 0 && newData.map(item => {

            return (
                <>
                <div className="single-blog" key={item.id}>
                    <div className="title">
                        <span>{item.title} </span>
                        <span onClick={() => {}}>X</span>
                    </div>
                    <div className="content">{item.body}</div>
                    <button>
                        <Link to={`/blog/${item.id}`}>  View detail</Link>
                    </button>
                </div>
                </>
            )
        })}

        {isLoading &&
            <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
        }
        </div>               
        </>
    )
}
export default Blog