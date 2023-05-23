const Todo = (props) => {
    // properties
    // parent => child, top => bottom
    console.log('>>>Check props: ',props);
    const todos = props.data;
    return(
    <div className='todo-container'>
        <div className="title">
            {props.title}
        </div>
        {todos.map((todo)=>
            // <div className='todo-child' key={todo.id}>{todo.title}</div>
            {
            console.log('>>> Check todo list: ', todo);
            return (
                <li className='todo-child' key={todo.id}>{todo.title}</li>
                )
            }
        )}
        <hr/>
    </div>
    )
}
export default Todo;