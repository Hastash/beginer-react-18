const Todo = (props) => {
    // properties
    // parent => child, top => bottom
    console.log('>>>Check props: ',props);
    const todos = props.data;
    return(
    <div className='todo-container'>
        {todos.map((todo)=>
            // <div className='todo-child' key={todo.id}>{todo.title}</div>
            {
            console.log('>>> Check todo list: ', todo);
            return (
                <div className='todo-child' key={todo.id}>{todo.title}</div>
                )
            }
        )}
    </div>
    )
}
export default Todo;