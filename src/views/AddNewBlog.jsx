import { useState } from "react";
import "./css/Blog.css"
import axios from "axios";
const AddNewBlog =(props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmitBtn = async (e) => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content')
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const newData = await response.json()
        console.log('CHeck newData: ',newData);

        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }
    }

    return(
        <form className = "w3-container" >
            <div className="w3-section">---Add new Blog---</div>
            <div className="w3-section">
                <label><b>Title:</b></label>
                <input class="w3-input w3-border" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <label><b>Content:</b></label>
                <input class="w3-input w3-border" type="text" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
            </div>
            <div class="w3-container w3-border-top w3-padding-16">
                <button type="button" onClick={handleSubmitBtn}>Submit</button>
            </div>
        </form>
    )
    
}
export default AddNewBlog;