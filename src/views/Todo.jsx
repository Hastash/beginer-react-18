const Todo = (props) => {
    // properties
    // parent => child, top => bottom
    const {data, title, deleteDataTodo} = props;
    // Gui nguoc prop len parent
    const handleDelete = (id) => {
        console.log('Check: ',id)
        deleteDataTodo(id);
    }
    return(
    <div className='todo-container'>
        <div className="title">
            {title}
        </div>
        {data.map((todo)=>
            // <div className='todo-child' key={todo.id}>{todo.title}</div>
            {
            return (
                <li className='todo-child' key={todo.id}>{todo.title}
                 &nbsp; &nbsp; 
                    <span onClick={()=>handleDelete(todo.id)}>x</span>
                </li>
                )
            }
        )}
        <hr/>
    </div>
    )
}
export default Todo;