import "./css/Blog.css"
import useFetch from "../model/fetchHTTP"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
    const [newData, setNewData] = useState([]);
    const{data: dataBlogs, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/posts/")
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
        // console.log('Check: ',blog);
        data.unshift(blog);
        setNewData(data);
        handleModalClose();
    }
    return (
        <>
        {/* <button className="btn btn-primary" onClick={handleModalOpen}>Open Modal</button> */}
        <button className="w3-button w3-green w3-large w3-margin" onClick={handleModalOpen}>Open Modal</button>
        <div className={`w3-modal ${modalVisible ? 'w3-show' : 'w3-hide'}`}>
            <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{'maxWidth':'600px'}}>
            <span onClick={handleModalClose} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                <AddNewBlog handleAddNew={handleAddNew} />
            </div>
        </div>

        {/* <div><button className="btn-add-new" onClick={()=>navigate('/add-new-blog')}>Add new Blog</button></div> */}
        <div className="w3-row-padding w3-grayscale">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="w3-col l3 m6 w3-margin w3-border w3-padding" key={item.id}>
                            <header>
                                <span>{item.title} </span>
                                <span>X</span>
                            </header >
                            <div>{item.body}</div>
                            <footer>
                            <button className="w3-button w3-light-grey w3-block">
                                <Link to={`/blog/${item.id}`}>  View detail</Link>
                            </button>
                            </footer>
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