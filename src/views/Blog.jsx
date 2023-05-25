import "./css/Blog.css"
import useFetch from "../models/fetch"
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const{data: dataBlogs, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/posts/")
    console.log('>>>Check data: ',dataBlogs);
    let newData = [];
    if (dataBlogs && dataBlogs.length > 0){
        newData = dataBlogs.slice(2);
        console.log('>>>Check data: ',newData);
    }
    return (
        
        <h1>Hello blogs</h1>
    )
}
export default Blog