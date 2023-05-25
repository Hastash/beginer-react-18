import "./css/Blog.css"
import useFetch from "../model/fetchHTTP"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
            Open modal
        </button>

        <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">

            <div className="modal-header text-dark">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body text-dark">
                <AddNewBlog />
            </div>

            {/* <div className="modal-footer text-dark">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div> */}

            </div>
        </div>
        </div>
        
        <div><button className="btn-add-new" onClick={()=>navigate('/add-new-blog')}>Add new Blog</button></div>
        <div className="blogs-container">
        {!isLoading && newData && newData.length > 0 && newData.map(item => {

            return (
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
            )
        })}

        {isLoading &&
            <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
        }
        </div>     
                  
        </>
    )
}

export default Blog;