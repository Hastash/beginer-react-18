import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
const App = () => {
  let [name, setName] = useState('Nathan');
  const [address, setAddress]=useState('');
  const [todos, setTodos]= useState([ 
  {id: 'Todo1', title:"Doing homework", type:'Nathan'},
  {id: 'Todo2', title:"Testing Polistic", type:'Nathan'},
  {id: 'Todo3', title:"Watching youtube", type:'Hannah'},
  {id: 'Todo4', title:"Learning English", type:'Hannah'}

  ]);
  const handleEventClick =(e) => {
    if(!address){
      alert('Input is empty!')
      return;
    }
    let newTodo = {id:"abc", title: address, type:'Nathan'};
    //hook not merge state
    setTodos([...todos, newTodo]);
    setAddress('');
  }
  const handleOnchangeInput= (e) => {
    setAddress(e.target.value);
  }
  const deleteDataTodo = (id) => {
    let curTodos = todos;
    curTodos = curTodos.filter(item => item.id!==id)
    setTodos(curTodos)
  }
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <Todo
          data={todos}
          title={`All todos`}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          data={todos.filter(item => item.type === 'Nathan')}
          title={`Nathan's todos`}
          deleteDataTodo={deleteDataTodo}
        />
        <input type="text" value={address} onChange={(e)=>handleOnchangeInput(e)}/>
        <button type="button" onClick={(e)=>handleEventClick(e)}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
