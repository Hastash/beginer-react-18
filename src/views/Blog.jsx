import "./css/Blog.css"
import useFetch from "../models/fetch"
import { Link, useNavigate } from "react-router-dom"
import DetailBlog from "./DetailBlog"
const Blog = () => {
    const{data: dataBlogs, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/posts/")
    let newData = [];
    let navigate = useNavigate()
    const RedirectDetail = (id) => {
        navigate('/blog/'+id)
    }
    if (dataBlogs && dataBlogs.length > 0){
        newData = dataBlogs.slice(0, 9);
        console.log('>>>Check data: ',newData);
    }
    return(
        <div className="blogs-container">
        {newData && newData.length > 0 && newData.map(item=>{
            return (
                    <div className="single-blog">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="content">
                            {item.body}
                        </div>
                        <button>
                            <Link to={`/blog/${item.id}`} >View</Link>
                            <div onClick={(e)=>RedirectDetail(item.id)}>View</div>
                        </button>
                    </div>
            )
        })}
        {!isLoading && <div style={{textAlign: 'center !important', width: '100%' }}>Loading...</div>}
        </div>                
    )
}
export default Blog