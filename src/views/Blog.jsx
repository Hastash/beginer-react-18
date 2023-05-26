import "./css/Blog.css"
import useFetch from "../model/fetchHTTP"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
    const [newData, setNewData] = useState([]);
    const{data: dataBlogs, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/posts/")
    let navigate = useNavigate();
    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 3);
            setNewData(data)
        }
    }, [dataBlogs]);
    // Get the modal
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalClose = () => {
      setModalVisible(false);
    };
  
    const handleModalOpen = () => {
      setModalVisible(true);
    };

    const handleAddNew = (blog) => {
        let data = newData;
        console.log('Check: ',blog);
        data.unshift(blog);
        setNewData(data);
        handleModalClose();
    }
    return (
        <>
        {/* <button className="btn btn-primary" onClick={handleModalOpen}>Open Modal</button> */}
        <button className="w3-button w3-green w3-large w3-margin" onClick={handleModalOpen}>Open Modal</button>
        <div className={`w3-modal ${modalVisible ? 'w3-show' : 'w3-hide'}`}>
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style={{'max-width':'600px'}}>
            <span onClick={handleModalClose} class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                <AddNewBlog handleAddNew={handleAddNew} />
            </div>
        </div>

        {/* <div><button className="btn-add-new" onClick={()=>navigate('/add-new-blog')}>Add new Blog</button></div> */}
        <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title} </span>
                                <span>X</span>
                            </div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>  View detail</Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                }
            </div>    
                  
        </>
    )
}

export default Blog;