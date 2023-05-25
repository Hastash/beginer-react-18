import { useState } from "react";
import "./css/Blog.css"
const AddNewBlog =() => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit=() =>{
        console.log('Check: ',title,'---',content)
    }
    return(
        <form className = "add-new-container">
            <div className="text-add-new">---Add new Blog---</div>
            <div className="inputs-data">
                <label>Title:</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div className="inputs-data">
                <label>Content:</label>
                <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
            </div>
            <button onClick={(e)=>{handleSubmit()}}>Submit</button>
        </form>
    )
}
export default AddNewBlog;